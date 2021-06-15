import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import * as vizTbStyles from "./vizToolbar.module.css"
import * as util from "./options/options"

// main VizToolbar component
export default function VizToolbar(props) {
  const [options, setOptions] = useState({
    buttons: undefined,
    color: undefined,
    outline: undefined,
    rounded: undefined,
    downloads: undefined,
  });
  const [buttonFlag, setButtonFlag] = useState(true);
  const [downloadFlag, setDownloadFlag] = useState(true);

  console.log('options before', options)

  useEffect(() => {
    // check if toolbarOptions prop has been passed
    if (props.toolbarOptions) {
      setOptions({...props.toolbarOptions})
      console.log('options later', options)
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
  },[])

  const renderButtons = util.buttonList(options.buttons);
  const color = util.colorSet(options.color);
  const outline = util.outlineSet(options.outline);
  const rounded = util.roundedSet(options.rounded);
  const selectStyle = `${util.selectBgSet(options.color, options.outline)} ${util.selectTextSet(options.color, options.outline)}`;
  const selectDivStyles = util.selectArrowSet(options.color, options.outline);

  return (
    <div className={vizTbStyles.toolbar}>
      <VizNav
        previous={{"name": "previous"}}
        next={{"name": "next"}}
        color={color}
        outline={outline}
        rounded={rounded}
      />
      {/* mobile layout */}
      <div className="buttons are-small is-centered is-hidden-tablet">
        {!buttonFlag ? null : (
          renderButtons.map((button, index) => (
            <Button
              key={button.name + '-' + index}
              name={button.name}
              icon={button.icon}
              onClick={button.function}
              color={color}
              outline={outline}
              rounded={rounded}
            />
          ))
        )}
        {!downloadFlag ? null : (
          <Download
            downloads={options.downloads}
            color={color}
            outline={outline}
            rounded={rounded}
            selectStyle={selectStyle}
            selectDivStyles={selectDivStyles}
          />
        )}
      </div>
      {/* desktop layout */}
      <div className="buttons is-centered is-hidden-mobile">
        {!buttonFlag ? null : (
          renderButtons.map((button, index) => (
            <Button
              key={button.name + '-' + index}
              name={button.name}
              icon={button.icon}
              onClick={button.function}
              color={color}
              outline={outline}
              rounded={rounded}
            />
          ))
        )}
        {!downloadFlag ? null : (
          <Download
            downloads={options.downloads}
            color={color}
            outline={outline}
            rounded={rounded}
            selectStyle={selectStyle}
            selectDivStyles={selectDivStyles}
          />
        )}
      </div>
    </div>
  )
}

// <VizNav> component
const VizNav = (props) => {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded} ${vizTbStyles.navBtn}`;

  return (
    <>
      <div className={`buttons are-small is-centered is-hidden-tablet ${vizTbStyles.vizNav}`}>
        {/* mobile layout */}
        <button className={`button ${btnStyles}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faBackward}/>
          </span>
          <span><strong>Previous</strong></span>
        </button>
        <button className={`button ${btnStyles}`}>
          <span><strong>Next</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faForward}/>
          </span>
        </button>
      </div>
      {/* desktop layout */}
      <div className={`buttons is-centered is-hidden-mobile ${vizTbStyles.vizNav}`}>
        <button className={`button ${btnStyles}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faBackward}/>
          </span>
          <span><strong>Previous</strong></span>
        </button>
        <button className={`button ${btnStyles}`}>
          <span><strong>Next</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faForward}/>
          </span>
        </button>
      </div>
    </>
  )
}

// <Button> component
const Button = (props) => {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;

  return (
    <button 
      className={`button ${btnStyles}`}
      onClick={props.onClick}
    >
      <span className="icon">
        <FontAwesomeIcon icon={props.icon}/>
      </span>
      <span>{props.name}</span>
    </button>
  )
}

// <Download> component
const Download = (props) => {
  const [downloadSelect, setDownload] = useState('Download');
  const renderDownloads = util.downloadList(props.downloads);
  const btnStyles = `${props.color} ${props.outline}`;
  const selectStyles = `download ${props.color} ${props.selectStyle} ${vizTbStyles.select}`; 

  const handledownloadSelect = (event) => {
    setDownload(event.target.value);
  }
  
  return (
    <div className={`field has-addons has-addons-left ${vizTbStyles.field}`}>
      {/* mobile layout */}
      <div className="control">
        <div className={`select is-small is-hidden-tablet ${props.selectDivStyles}`}>
          {/* eslint-disable-next-line */} 
          <select className={selectStyles} value={downloadSelect} onChange={handledownloadSelect}>
            <option disabled hidden>Download</option>
            {renderDownloads.map((option, index) => (
              <option value={option.name} key={option.name + "-" + index}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="control is-hidden-tablet">
        <button 
          type="submit" 
          className={`button ${btnStyles}`}
          onClick={() => {console.log('download!')}}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
          </span>
        </button>
      </div>

      {/* desktop layout */}
      <div className="control">
        <div className={`select is-hidden-mobile ${props.selectDivStyles}`}> 
          {/* eslint-disable-next-line */}
          <select className={selectStyles} value={downloadSelect} onChange={handledownloadSelect}>
            <option disabled hidden>Download</option>
            {renderDownloads.map((option, index) => (
              <option value={option.name} key={option.name + "-" + index}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="control is-hidden-mobile">
        <button 
          type="submit" 
          className={`button ${btnStyles}`}
          onClick={() => {console.log('download!')}}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
          </span>
        </button>
      </div>
    </div>
  )
}
