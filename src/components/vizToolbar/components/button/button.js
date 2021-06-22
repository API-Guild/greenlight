import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, faExternalLinkAlt, faLink, faBook, faFileContract 
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
  const [activeName, setActiveName] = useState('');
  const [activeDataSource, setActiveDataSource] = useState('');
  const [publishedSheets, setPublishedSheets] = useState([]);
  const [worksheets, setWorksheets] = useState('');

  // toggles display of modal
  const handleModal = () => {
    setDetailModal(!detailModal);
    if (!props.vizObj) {
      return;
    }
    else {
      setVizUrl(props.vizObj.getUrl());
      setWorkbookName(props.vizObj.getWorkbook().getName());
      setActiveSheet(props.vizObj.getWorkbook().getActiveSheet());
      setActiveName(props.vizObj.getWorkbook().getActiveSheet().getName());
      // setActiveDataSource(props.vizObj.getWorkbook().getPublishedSheetsInfo().getDataSourcesAsync());
      setWorksheets(props.vizObj.getWorkbook().getActiveSheet().getWorksheets());
      setPublishedSheets(props.vizObj.getWorkbook().getPublishedSheetsInfo());

      console.count('handleModal')
      console.log('activeSheet', activeSheet)
      console.log('activeName', activeName)
      console.log('activeSheet.getSummaryDataAsync()', activeDataSource)
    }
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
        title={activeName}
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
              titleColor="grey-lighter"
              subtitle={
                <div>
                  <a href={vizUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faBook} style={{height: "0.7rem", verticalAlign: "inherit"}}/> {workbookName}
                  </a>
                </div>
              }
              subtitleSize={6}
              subtitleColor="link"
            />
            <Title
              title="Worksheets"
              titleSize={5}
              titleColor="grey-lighter"
              subtitle={
                publishedSheets.map((sheet, index) => (
                  <div key={sheet + '-' + index}>
                    <a href={sheet.getUrl()} target="_blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faFileContract} style={{height: "0.7rem", verticalAlign: "inherit"}}/> {sheet.getName()}
                    </a>
                  </div>
                ))
              }
              subtitleSize={6}
              subtitleColor="grey-light"
            />
          </div>
          <div className="column">
            <Title
              title="Datasources"
              titleSize={5}
              titleColor="grey-lighter"
              subtitle={
                <div>
                  <a href={vizUrl} target="_blank" rel="noreferrer">
                    {workbookName} <FontAwesomeIcon icon={faLink} style={{height: "0.7rem", verticalAlign: "inherit"}}/>
                  </a>
                </div>
              }
              subtitleSize={6}
              subtitleColor="link"
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
