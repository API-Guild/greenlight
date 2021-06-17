import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, 
} from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"
import Modal from "../../../modal/modal"

export default function Button(props) {
  // controls display of embedded content details
  const [detailModal, setDetailModal] = useState(false);

  // toggles display of modal
  const handleModal = () => {
    console.log('detailModal', detailModal)
    setDetailModal(!detailModal);
  }

  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;
  
  // array of supported buttons, all of them are displayed by default
  const buttonsArray = [
    {name: "Undo", icon: faUndoAlt, function: () => {props.vizObj.undoAsync()}},
    {name: "Redo", icon: faRedoAlt, function: () => {props.vizObj.redoAsync()}},
    {name: "Reset", icon: faHistory, function: () => {props.vizObj.revertAllAsync()}},
    {name: "Refresh", icon: faSyncAlt, function: () => {props.vizObj.refreshDataAsync()}},
    {name: "Details", icon: faInfoCircle, function: () => {
      handleModal();
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
      <Modal
        card={true}
        display={detailModal}
        setDisplay={handleModal}
        title="Sample Test Modal"
        footer={
          <>
            <button className="button is-primary">Save changes</button>
            <button className="button">Cancel</button>
          </>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Modal>
    </>
  )
}
