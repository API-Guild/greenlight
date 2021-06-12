import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import * as vizTbStyles from "./vizToolbar.module.css"
import * as util from "./utilities.js"
import Box from "../box/box"

// main VizToolbar component
export default function VizToolbar(props) {
  const renderButtons = util.buttonList(props.buttons);
  const color = util.colorSet(props.color);
  const outline = util.outlineSet(props.outline);
  const rounded = util.roundedSet(props.rounded);

  console.log('outline', outline)
  return (
    <Box vizToolbar={true}>
      <VizNav
        previous={{"name": "previous"}}
        next={{"name": "next"}}
        color={color}
        outline={outline}
        rounded={rounded}
      />
      {/* mobile layout */}
      <div className="buttons are-small is-centered is-hidden-tablet">
        {renderButtons.map((button, index) => (
          <Button
            key={button.name + '-' + index}
            name={button.name}
            icon={button.icon}
            function={button.function}
            color={color}
            outline={outline}
            rounded={rounded}
          />
        ))}
        <Download
          downloads={props.downloads}
          color={color}
          outline={outline}
          rounded={rounded}
        />
      </div>
      {/* desktop layout */}
      <div className="buttons is-centered is-hidden-mobile">
        {renderButtons.map((button, index) => (
          <Button
            key={button.name + '-' + index}
            name={button.name}
            icon={button.icon}
            function={button.function}
            color={color}
            outline={outline}
            rounded={rounded}
          />
        ))}
        <Download
          downloads={props.downloads}
          color={color}
          outline={outline}
          rounded={rounded}
        />
      </div>
    </Box>
  )
}

// <VizNav> component
const VizNav = (props) => {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded} ${vizTbStyles.navBtn}`;

  return (
    <>
      <div className={`buttons are-small is-centered is-hidden-tablet ${vizTbStyles.vizNav}`}>
        {/* mobile layout */}
        <button class={`button ${btnStyles}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faBackward}/>
          </span>
          <span><strong>Previous</strong></span>
        </button>
        <button class={`button ${btnStyles}`}>
          <span><strong>Next</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faForward}/>
          </span>
        </button>
      </div>
      {/* desktop layout */}
      <div className={`buttons is-centered is-hidden-mobile ${vizTbStyles.vizNav}`}>
        <button class={`button ${btnStyles}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faBackward}/>
          </span>
          <span><strong>Previous</strong></span>
        </button>
        <button class={`button ${btnStyles}`}>
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
      onClick={props.function}
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
  const renderDownloads = util.downloadList(props.downloads);
  const btnStyles = `${props.color} ${props.outline}`;
  
  return (
    <div className={`field has-addons has-addons-left ${vizTbStyles.field}`}>
      {/* mobile layout */}
      <div className="control">
        <div className={`select is-small is-hidden-tablet ${props.color}`}> 
          <select className={`download ${props.color} ${vizTbStyles.select}`}>
            <option selected>Download</option>
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
        <div className={`select is-hidden-mobile ${props.color}`}> 
          <select className={`download ${props.color} ${vizTbStyles.select}`}>
            <option selected>Download</option>
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
