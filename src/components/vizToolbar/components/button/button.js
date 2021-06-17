import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, 
} from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"

export default function Button(props) {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;
  
  // array of supported buttons, all of them are displayed by default
  const buttonsArray = [
    {name: "Undo", icon: faUndoAlt, function: () => {props.vizObj.undoAsync()}},
    {name: "Redo", icon: faRedoAlt, function: () => {props.vizObj.redoAsync()}},
    {name: "Reset", icon: faHistory, function: () => {props.vizObj.revertAllAsync()}},
    {name: "Refresh", icon: faSyncAlt, function: () => {props.vizObj.refreshDataAsync()}},
    {name: "Details", icon: faInfoCircle, function: () => {
      props.handleModal();
      console.log('getName', props.vizObj.getWorkbook().getName())
      console.log('getActiveSheet', props.vizObj.getWorkbook().getActiveSheet())
      console.log('getPublishedSheetsInfo', props.vizObj.getWorkbook().getPublishedSheetsInfo())
      console.log('getWorksheets', props.vizObj.getWorkbook().getActiveSheet().getWorksheets())
    }},
    {name: "Share", icon: faShareAlt, function: () => {props.vizObj.showShareDialog()}},  
  ];

  // determines what buttons get rendered, default is all 
  // unless an allowlist (array) is passed as a prop
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
