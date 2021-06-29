import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import * as vizTbStyles from "./vizToolbar.module.scss"
import * as set from "./toolBarConfig/toolBarConfig"
import VizNav from "./components/vizNav/vizNav"
import DownloadOptions from "./components/downloadOptions/downloadOptions"
import Button from "./components/button/button"

export default function VizToolbar(props) {
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
            return;
          case 'PDF':
            props.vizObj.showExportPDFDialog()
            break;
          case 'Image':
            props.vizObj.showExportImageDialog()
            break;
          case 'Data':
            if (props.vizObj.getWorkbook().getActiveSheet() === undefined) {
              alert('select a chart or sheet to download data');
            }
            else {
              props.vizObj.showExportDataDialog()
            }
            break;
          case 'CrossTab':
            if (props.vizObj.getWorkbook().getActiveSheet() === undefined) {
              alert('select a chart or sheet to download crosstab data');
            }
            else {
              props.vizObj.showExportCrossTabDialog()
            }
            break;
          case 'PowerPoint':
            props.vizObj.showExportPowerPointDialog()
            break;
          case 'Workbook':
            props.vizObj.showDownloadWorkbookDialog()
            break;
          default:
            return;
        }
      }
      catch(err) {
        console.error('Tableau error: ', err);
      }
    }
    setDownload('Download');
  }

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

  return (
    <div className={vizTbStyles.toolbar}>
      {!props.vizArray ? null : (
        <VizNav
          color={color}
          outline={outline}
          rounded={rounded}
          handleVizIndex={props.handleVizIndex}
          vizUrl={props.vizUrl} 
          vizIndex={props.vizIndex}
        />
      )}
      {/* mobile layout */}
      <div className="buttons are-small is-centered is-hidden-tablet">
        <Button
          buttonFlag={buttonFlag}
          buttons={options.buttons}
          color={color}
          outline={outline}
          rounded={rounded}
          vizObj={props.vizObj}
          disabled={disabled}
          loaded={props.loaded}
          vizArray={props.vizArray}
          handleVizIndex={props.handleVizIndex}
          vizUrl={props.vizUrl} 
          vizIndex={props.vizIndex}
        />
        {!downloadFlag ? null : (
          <div className={`field has-addons has-addons-left ${vizTbStyles.field}`}>
            <div className="control">
              <div className={`select is-small is-hidden-tablet ${selectDivStyles}`} disabled={disabled}>
                {/* eslint-disable-next-line */} 
                <select 
                  className={selectStyles} 
                  value={downloadSelect} 
                  onChange={handledownloadSelect} 
                  disabled={disabled}
                >
                  <option disabled hidden>Download</option>
                  <DownloadOptions
                    downloads={options.downloads}
                    vizObj={props.vizObj}
                  />
                </select>
              </div>
            </div>
            <div className="control is-hidden-tablet">
              <button 
                type="submit" 
                className={`button ${btnStyles}`}
                onClick={handleDownload}
                disabled={disabled}
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faCloudDownloadAlt}/>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* desktop layout */}
      <div className="buttons is-centered is-hidden-mobile">
        <Button
          buttonFlag={buttonFlag}
          buttons={options.buttons}
          color={color}
          outline={outline}
          rounded={rounded}
          vizObj={props.vizObj}
          disabled={disabled}
          loaded={props.loaded}
          vizArray={props.vizArray}
          handleVizIndex={props.handleVizIndex}
          vizUrl={props.vizUrl} 
          vizIndex={props.vizIndex}
        />
        {!downloadFlag ? null : (
          <div className={`field has-addons has-addons-left ${vizTbStyles.field}`}>
            <div className="control">
              <div className={`select is-hidden-mobile ${selectDivStyles}`} disabled={disabled}> 
                {/* eslint-disable-next-line */}
                <select 
                  className={selectStyles} 
                  value={downloadSelect} 
                  onChange={handledownloadSelect} 
                  disabled={disabled}
                >
                  <option disabled hidden>Download</option>
                  <DownloadOptions
                    downloads={options.downloads}
                    vizObj={props.vizObj}
                  />
                </select>
              </div>
            </div>
            <div className="control is-hidden-mobile">
              <button 
                type="submit" 
                className={`button ${btnStyles}`}
                onClick={handleDownload}
                disabled={disabled}
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
