import React, {useState, useEffect, useContext } from "react"
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import LayoutContext from '../../context/LayoutContext'
import * as vizTbStyles from "./vizToolbar.module.scss"
import * as set from "./toolBarConfig/toolBarConfig"
import VizNav from "./components/vizNav/vizNav"
import DownloadOptions from "./components/downloadOptions/downloadOptions"
import Button from "./components/button/button"

export default function VizToolbar(props) {

  const logObject = () => {
    const vizObj = props.vizObj;
    console.log('vizObj:', vizObj);

    const workbook = vizObj.getWorkbook();
    console.log('workbook:', workbook);

    const activeSheet = workbook.getActiveSheet();
    console.log('activeSheet:', activeSheet);

    const sheetType = activeSheet.getSheetType();
    console.log('sheetType:', sheetType);

    activeSheet.getFiltersAsync().then((filters) => {
      for (let i = 0; i < filters.length; i++) {
        console.log(`${filters[i].$4}:`, filters[i]);
      }
    });
  }
  
  const { width } = useContext(LayoutContext);

  // by default a full <VizToolbar/> get's mounted unless props are explicitly set to false or empty arrays
  // therefore undefined is a baseline that adds a full toolbar regardless
  const [options, setOptions] = useState({
    buttons: undefined,
    color: undefined,
    outline: undefined,
    rounded: undefined,
    downloads: undefined,
  });

  // both of these flags determine if components get rendered, default behavior is true
  const [buttonFlag, setButtonFlag] = useState(true);
  const [downloadFlag, setDownloadFlag] = useState(true);

  // if a toolbarOptions prop is available, update state and flags accordingly
  useEffect(() => {
    // check if toolbarOptions prop has been passed and update state
    if (props.toolbarOptions) {
      setOptions({...props.toolbarOptions})
      // decide if buttons should be rendered, default is true and renders all of them
      if (props.toolbarOptions.buttons) {
        if (Array.isArray(props.toolbarOptions.buttons) && props.toolbarOptions.buttons.length === 0) {
          setButtonFlag(false);
        }
      }
      // decide if downloads should be rendered, default is true and renders all options
      if (props.toolbarOptions.buttons) {
        if (Array.isArray(props.toolbarOptions.downloads) && props.toolbarOptions.downloads.length === 0) {
          setDownloadFlag(false);
        }
      }
    }
  },[props.toolbarOptions])

  // by default buttons are disabled until a Tableau vizualization is loaded
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(props.loaded ? false : true);
    if (props.loaded && props.viz) {
      logObject();
    } else {
      console.log("not loaded");
    }
  },[props.loaded])

  // sets download options for the select control
  const [downloadSelect, setDownload] = useState('Download');

  // sets state based on the selected download option
  const handledownloadSelect = (event) => {
    setDownload(event.target.value);
  }

  const handleDownload = () => {
    if (props.vizObj) {
      try {
        switch (downloadSelect) {
          case 'Download':
            // this method only works for the JS API version 2021.1
            if (typeof props.vizObj.showDownloadDialog === 'function') {
              props.vizObj.showDownloadDialog();
            }
            else {
              throw new Error('The general download option is only supported on the' + 
              ' API version 2021.1, please select a different option from the download menu.');
            }
            break;
          case 'PDF':
            props.vizObj.showExportPDFDialog();
            break;
          case 'Image':
            props.vizObj.showExportImageDialog();
            break;
          case 'Data':
            if (props.vizObj.getWorkbook().getActiveSheet() === undefined) {
              alert('select a chart or sheet to download data');
            }
            else {
              props.vizObj.showExportDataDialog();
            }
            break;
          case 'CrossTab':
            if (props.vizObj.getWorkbook().getActiveSheet() === undefined) {
              alert('select a chart or sheet to download crosstab data');
            }
            else {
              props.vizObj.showExportCrossTabDialog();
            }
            break;
          case 'PowerPoint':
            props.vizObj.showExportPowerPointDialog();
            break;
          case 'Workbook':
            props.vizObj.showDownloadWorkbookDialog();
            break;
          default:
            // this method only works for the JS API version 2021.1
            if (typeof props.vizObj.showDownloadDialog === 'function') {
              props.vizObj.showDownloadDialog();
            }
            else {
              return;
            }
        }
      }
      catch(err) {
        console.error('Tableau', err);
      }
    }
    setDownload('Download');
  }

  // controls rendering of navigation in toolbar and detail modal
  const [vizNav, setVizNav] = useState(false);

  useEffect(() => {
    if(props.viz) {
      setVizNav(props.viz.length > 1 ? true : false);
    }
  },[props.viz])

  // toolbar settings and styles, the set methods help standardize 
  // these options beyond what is supported by the Bulma framework
  const color = set.colorSet(options.color);
  const outline = set.outlineSet(options.outline);
  const rounded = set.roundedSet(options.rounded);

  // standardize styles for select controls with buttons based on user input
  const selectDivStyles = set.selectArrowSet(options.color, options.outline);
  const selectBg = set.selectBgSet(options.color, options.outline);
  const selectTxt = set.selectTextSet(options.color, options.outline);
  const selectStyles = `download ${color} ${selectBg} ${selectTxt} ${vizTbStyles.select}`;
  const btnStyles = `${color} ${outline}`;

  const buttonsClass = classNames({
    'buttons is-centered': true,
    'are-small': width < 540,
  });

  const selectDivClass = classNames({
    'select': true,
    'is-small': width < 540,
    [`${selectDivStyles}`]: true,
  });

  return (
    <div className={vizTbStyles.toolbar}>
      {!vizNav ? null : (
        <VizNav
          color={color}
          outline={outline}
          rounded={rounded}
          handleVizIndex={props.handleVizIndex}
          viz={props.viz} 
          vizIndex={props.vizIndex}
        />
      )}
      <div className={buttonsClass}>
        <Button
          buttonFlag={buttonFlag}
          buttons={options.buttons}
          color={color}
          outline={outline}
          rounded={rounded}
          vizObj={props.vizObj}
          disabled={disabled}
          loaded={props.loaded}
          vizNav={vizNav}
          handleVizIndex={props.handleVizIndex}
          viz={props.viz} 
          vizIndex={props.vizIndex}
        />
        {!downloadFlag ? null : (
          <div className={`field has-addons has-addons-left ${vizTbStyles.field}`}>
            <div className="control">
              <div className={selectDivClass} disabled={disabled}>
                {/* eslint-disable-next-line */} 
                <select 
                  className={selectStyles} 
                  value={downloadSelect} 
                  onChange={handledownloadSelect} 
                  disabled={disabled}
                >
                  <option>Download</option>
                  <DownloadOptions
                    downloads={options.downloads}
                    vizObj={props.vizObj}
                  />
                </select>
              </div>
            </div>
            <div className="control">
              <button 
                type="submit" 
                className={`button ${btnStyles}`}
                onClick={handleDownload}
                disabled={disabled}
                aria-label="download"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faCloudDownloadAlt}/>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
