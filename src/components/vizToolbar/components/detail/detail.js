import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faBook, faFileContract } from '@fortawesome/free-solid-svg-icons'
import * as meta from "./vizMeta.js"
import Modal from "../../../modal/modal"
import Title from "../../../title/title"

export default function Detail(props) {
  const [vizUrl, setVizUrl] = useState('');
  const [workbookName, setWorkbookName] = useState('');
  const [activeSheet, setActiveSheet] = useState('');
  const [sheetType, setSheetType] = useState('');
  const [activeName, setActiveName] = useState('');
  const [activeDataSource, setActiveDataSource] = useState('');
  const [publishedSheets, setPublishedSheets] = useState([]);
  const [worksheets, setWorksheets] = useState('');

  const tabError = (err) => {
    console.error('Visualization Metadata Error: ', err)
  }

  // queries the viz object for meta data once it has become interactive
  useEffect(() => {
    const viz = props.vizObj;

    if (props.loaded && viz) {
      meta.getVizUrl(viz).then(
        (value) => setVizUrl(value),
        (err) => tabError(err)
      );

      meta.getVizWb(viz).then(
        (value) => {
          setWorkbookName(value.getName());
          setActiveSheet(value.getActiveSheet());
        },
        (err) => tabError(err)
      )

      // meta.getWbName(viz).then(
      //   (value) => setWorkbookName(value),
      //   (err) => tabError(err)
      // );

      // setActiveSheet(viz.getWorkbook().getActiveSheet());
      // setSheetType(viz.getWorkbook().getActiveSheet().getSheetType());
      // setActiveName(viz.getWorkbook().getActiveSheet().getName());
      // setWorksheets(viz.getWorkbook().getActiveSheet().getWorksheets());
      // setPublishedSheets(viz.getWorkbook().getPublishedSheetsInfo());
    }
  },[props.loaded, props.vizObj])

  useEffect(() => {
    if (props.loaded && activeSheet !== '') {
      meta.getSheetType(activeSheet).then(
        (value) => setSheetType(value),
        (err) => tabError(err)
      )
    }
  },[props.loaded, activeSheet])

  return (
    <>
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
              title="Visualization"
              titleSize={4}
              titleColor="white"
              subtitle={
                <div>
                  <a href={vizUrl} target="_blank" rel="noreferrer">
                    Datasource <FontAwesomeIcon icon={faLink} style={{height: "0.7rem", verticalAlign: "inherit"}}/>
                  </a>
                  <p className="is-size-7">Type: {sheetType}</p>
                </div>
                // publishedSheets.map((sheet, index) => (
                //   <div key={sheet + '-' + index}>
                //     <a href={sheet.getUrl()} target="_blank" rel="noreferrer">
                //       <FontAwesomeIcon icon={faFileContract} style={{height: "0.7rem", verticalAlign: "inherit"}}/> {sheet.getName()}
                //     </a>
                //   </div>
                // ))
              }
              subtitleSize={5}
              subtitleColor="grey-lighter"
            />
            <Title
              title="Datasources"
              titleSize={4}
              titleColor="white"
              subtitle={
                <div>
                  <a href={vizUrl} target="_blank" rel="noreferrer">
                    Datasource <FontAwesomeIcon icon={faLink} style={{height: "0.7rem", verticalAlign: "inherit"}}/>
                  </a>
                </div>
              }
              subtitleSize={5}
              subtitleColor="grey-lighter"
            />
          </div>
          <div className="column">
            <Title
              title="Workbook"
              titleSize={4}
              titleColor="white"
              subtitle={
                <div>
                  <a href={vizUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faBook} style={{height: "0.7rem", verticalAlign: "inherit"}}/> {workbookName}
                  </a>
                </div>
              }
              subtitleSize={5}
              subtitleColor="grey-lighter"
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
