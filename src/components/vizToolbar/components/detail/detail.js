import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons'
import Modal from "../../../modal/modal"
import Title from "../../../title/title"

export default function Detail(props) {
  const [vizUrl, setVizUrl] = useState('');
  const [workbookName, setWorkbookName] = useState('');
  const [activeSheet, setActiveSheet] = useState('');
  const [activeName, setActiveName] = useState('');
  const [activeDataSource, setActiveDataSource] = useState('');
  const [publishedSheets, setPublishedSheets] = useState([]);
  const [worksheets, setWorksheets] = useState('');

  useEffect(() => {
    const viz = props.vizObj;
    if (props.loaded === true) {
      setVizUrl(viz.getUrl());
      setWorkbookName(viz.getWorkbook().getName());
      setActiveSheet(viz.getWorkbook().getActiveSheet());
      setActiveName(viz.getWorkbook().getActiveSheet().getName());
      setWorksheets(viz.getWorkbook().getActiveSheet().getWorksheets());
      setPublishedSheets(viz.getWorkbook().getPublishedSheetsInfo());
    }
  },[props.loaded, props.vizObj])


  return (
    <Modal
      card={true}
      display={props.detailModal}
      setDisplay={props.handleModal}
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
  )
}
