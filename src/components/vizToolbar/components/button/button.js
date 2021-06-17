import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, 
} from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"
import Modal from "../../../modal/modal"
import Title from "../../../title/title"

export default function Button(props) {
  // controls display of embedded content details
  const [detailModal, setDetailModal] = useState(false);
  const [vizUrl, setVizUrl] = useState('');
  const [workbookName, setWorkbookName] = useState('');
  const [activeSheet, setActiveSheet] = useState('');
  const [publishedSheets, setPublishedSheets] = useState('');
  const [worksheets, setWorksheets] = useState('');

  // toggles display of modal
  const handleModal = () => {
    setDetailModal(!detailModal);
    setVizUrl(props.vizObj.getUrl());
    setWorkbookName(props.vizObj.getWorkbook().getName());
    setActiveSheet(props.vizObj.getWorkbook().getActiveSheet());
    setPublishedSheets(props.vizObj.getWorkbook().getActiveSheet().getWorksheets());
    setWorksheets(props.vizObj.getWorkbook().getPublishedSheetsInfo());
    console.log('activeSheet', activeSheet)
    console.log('publishedSheets', publishedSheets)
    console.log('worksheets', worksheets)
    console.count('handleModal')
  }

  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;
  
  // array of supported buttons, all of them are displayed by default
  const buttonsArray = [
    {name: "Undo", icon: faUndoAlt, function: () => {props.vizObj.undoAsync()}},
    {name: "Redo", icon: faRedoAlt, function: () => {props.vizObj.redoAsync()}},
    {name: "Reset", icon: faHistory, function: () => {props.vizObj.revertAllAsync()}},
    {name: "Refresh", icon: faSyncAlt, function: () => {props.vizObj.refreshDataAsync()}},
    {name: "Details", icon: faInfoCircle, function: () => {handleModal()}},
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
        title={workbookName}
        footer={
          <>
            <button className="button is-primary">Save changes</button>
            <button className="button">Cancel</button>
          </>
        }
      >
        <div className="columns">
          <div className="column">
            <Title
              title="Workbook"
              titleSize={5}
              titleColor="primary"
              subtitle={workbookName}
              subtitleSize={6}
              subtitleColor="grey-lighter"
            />
          </div>
          <div className="column">
            <Title
              title="URL"
              titleSize={5}
              titleColor="primary"
              subtitle={<a href={vizUrl} target="_blank" rel="noreferrer">{vizUrl}</a>}
              subtitleSize={6}
              subtitleColor="grey-lighter"
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
