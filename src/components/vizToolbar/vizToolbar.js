import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, faCloudDownloadAlt, faPause } from '@fortawesome/free-solid-svg-icons'
import Box from "../box/box"
import Icon from "../icon/icon"

// main VizToolbar component
export default function VizToolbar(props) {
  const renderButtons = buttonList(props.buttons);
  const color = colorSet(props.color);

  return (
    <Box vizToolbar={true}>
      <div className="columns is-1 is-desktop">
        <div className="column is-8">
          {/* mobile layout */}
          <div className="buttons are-small is-centered is-hidden-tablet">
            {renderButtons.map((button, index) => (
              <Button
                key={button.name + '-' + index}
                name={button.name}
                icon={button.icon}
                function={button.function}
                color={color}
              />
            ))}
          </div>
          {/* desktop layout */}
          <div className="buttons is-right is-hidden-mobile">
            {renderButtons.map((button, index) => (
              <Button
                key={button.name + '-' + index}
                name={button.name}
                icon={button.icon}
                function={button.function}
                color={color}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <Download
            color={color}
          />
        </div>
      </div>
    </Box>
  )
}

// Button component
const Button = (props) => {
  return (
    <button 
      className={`button ${props.color}`}
      onClick={props.function}
    >
      <span className="icon">
        <FontAwesomeIcon icon={props.icon}/>
      </span>
      <span>{props.name}</span>
    </button>
  )
}

// Download component
const Download = (props) => {
  return (
    <div className="field has-addons has-addons-left">
      <div className="control">
        <div className="select"> 
          <select className="country">
            <option value="PDF">PDF</option>
            <option value="Image">Image</option>
            <option value="Data">Data</option>
            <option value="CrossTab">CrossTab</option>
            <option value="Powerpoint">Powerpoint</option>
            <option value="Workbook">Workbook</option>
          </select>
        </div>
      </div>
      <div className="control">
        <button type="submit" className={`button ${props.color}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
          </span>
          <span>Download</span>
        </button>
      </div>
    </div>
  )
}

const buttonsArray = [
  {name: "Undo", icon: faUndoAlt, function: () => {console.log("undo!")}},
  {name: "Redo", icon: faRedoAlt, function: () => {console.log("redo!")}},
  {name: "Reset", icon: faHistory, function: () => {console.log("reset!")}},
  {name: "Refresh", icon: faSyncAlt, function: () => {console.log("refresh!")}},
  {name: "Pause", icon: faPause, function: () => {console.log("pause!")}},
  {name: "Details", icon: faInfoCircle, function: () => {console.log("details!")}},
  {name: "Share", icon: faShareAlt, function: () => {console.log("share!")}},  
];

const downloadArray = [
  {name: "PDF Export", function: () => {console.log("PDF!")}},
  {name: "Image Export", function: () => {console.log("image!")}},
  {name: "Data Export", function: () => {console.log("data!")}},
  {name: "CrossTab Export", function: () => {console.log("crosstab!")}},
  {name: "PowerPoint Export", function: () => {console.log("powerpoint!")}},
  {name: "Download Workbook", function: () => {console.log("workbook!")}},
];

// Finds matches between props.buttons and the local buttonsArray
// to render <Button/> components in the <VizToolbar/> component
const buttonList = (buttons) => {
  const newArray = [];

  if (buttons === undefined) {
    return buttonsArray;
  }
  else if (Array.isArray(buttons)) {
    // make everything lowercase
    const propArray = buttons.map((name) => name.toLowerCase());
    // check if the local array includes the button name declared in props
    buttonsArray.forEach(button => {
      if (propArray.includes(button.name.toLowerCase())) {
        newArray.push(button) 
      }
    })
  }
  else {
    console.error('Error: buttons prop must be an array!');
  }
  return newArray;
}
// Finds matches between props.downloads and the local downloadArray
// to render <Download/> components in the <VizToolbar/> component
const downloadList = (options) => {
  const optionsArray = [];

  if (options === undefined) {
    return downloadArray;
  }
  else if (Array.isArray(options)) {
    // make everything lowercase
    const propArray = options.map((name) => name.toLowerCase());
    // check if the local array includes the button name declared in props
    downloadArray.forEach(download => {
      if (propArray.includes(download.name.toLowerCase())) {
        optionsArray.push(download) 
      }
    })
  }
  else {
    console.error('Error: downloads prop must be an array!');
  }
  return optionsArray;
}

const colorSet = (color) => {
  let buttonColor;
  switch (color) {
    case "normal":
      buttonColor = null;
      break;
    case "primary":
      buttonColor = "is-primary";
      break;
    case "link":
      buttonColor = "is-link";
      break;
    case "info":
      buttonColor = "is-info";
      break;
    case "success":
      buttonColor = "is-success";
      break;
    case "warning":
      buttonColor = "is-warning";
      break;
    case "danger":
      buttonColor = "is-danger";
      break;
    case "primary light":
      buttonColor = "is-primary is-light";
      break;
    case "link light":
      buttonColor = "is-link is-light";
      break;
    case "info light":
      buttonColor = "is-info is-light";
      break;
    case "success light":
      buttonColor = "is-success is-light";
      break;
    case "warning light":
      buttonColor = "is-warning is-light";
      break;
    case "danger light":
      buttonColor = "is-danger is-light";
      break;
    case "white":
      buttonColor = "is-white";
      break;
    case "light":
      buttonColor = "is-light";
      break;
    case "dark":
      buttonColor = "is-dark";
      break;
    case "black":
      buttonColor = "is-black";
      break;
    case "text":
      buttonColor = "is-text";
      break;
    case "ghost":
      buttonColor = "is-ghost";
      break;
    default:
      buttonColor = "is-primary";
  }
  return buttonColor;
}
