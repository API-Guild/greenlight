import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, faPause 
} from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"

export default function Button(props) {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;
  
  // array of supported buttons, all of them are displayed by default
  const buttonsArray = [
    {name: "Undo", icon: faUndoAlt, function: () => {console.log("undo!", props.vizObj)}},
    {name: "Redo", icon: faRedoAlt, function: () => {console.log("redo!", props.vizObj)}},
    {name: "Reset", icon: faHistory, function: () => {console.log("reset!", props.vizObj)}},
    {name: "Refresh", icon: faSyncAlt, function: () => {console.log("refresh!", props.vizObj)}},
    {name: "Pause", icon: faPause, function: () => {console.log("pause!", props.vizObj)}},
    {name: "Details", icon: faInfoCircle, function: () => {console.log("details!", props.vizObj)}},
    {name: "Share", icon: faShareAlt, function: () => {props.vizObj.showShareDialog()}},  
  ];

  // determines what buttons get rendered, default is all unless
  // an allowlist (array) is passed as a prop
  const renderButtons = set.buttonList(props.buttons, buttonsArray);

  return (
    <>
      {!props.buttonFlag ? null : (
        renderButtons.map((button, index) => (
          <button
            key={button.name + '-' + index + '-' + Math.random().toString(36).substr(2, 10)} 
            className={`button ${btnStyles}`}
            onClick={button.function}
          >
            <span className="icon">
              <FontAwesomeIcon icon={button.icon}/>
            </span>
            <span>{button.name}</span>
          </button>
        ))
      )}
    </>
  )
}
