import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract, faLink, faUnlink, faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as meta from "./vizMeta/vizMeta"
import Modal from "../../../modal/modal"
import Title from "../../../title/title"
import Sheets from "./components/Sheets"
import VizNav from "../vizNav/vizNav"

export default function Detail(props) {
  const [vizUrl, setVizUrl] = useState('');
  const [workbookName, setWorkbookName] = useState('');
  const [activeSheet, setActiveSheet] = useState('');
  const [activeType, setActiveType] = useState('');
  const [activeName, setActiveName] = useState('');
  const [activeSize, setActiveSize] = useState('');
  const [dataSources, setDataSources] = useState([]);
  const [sheets, setSheets] = useState([]);

  const tabError = (err) => {
    console.error('Visualization Metadata Error: ', err)
  }

  // queries the viz object for meta data once it has become interactive
  useEffect(() => {
    const viz = props.vizObj;

    if (viz === undefined) {
      setVizUrl('');
      setWorkbookName('');
      setActiveSheet('');
      setActiveType('');
      setActiveName('');
      setActiveSize('');
      setDataSources('');
      setSheets('');
    }

    if (props.loaded && viz) {
      meta.getVizUrl(viz).then(
        (url) => setVizUrl(url),
        (err) => tabError(err)
      );

      meta.getVizWb(viz).then(
        (workbook) => {
          setWorkbookName(workbook.getName());
          setActiveSheet(workbook.getActiveSheet());
        },
        (err) => tabError(err)
      );
    }
  },[props.loaded, props.vizObj])

  // queries metadata for the active visualization once state has been updated
  useEffect(() => {
    if (activeSheet !== '') {
      meta.getSheetType(activeSheet).then(
        (type) => setActiveType(type),
        (err) => tabError(err)
      );
      
      meta.getSheetName(activeSheet).then(
        (name) => setActiveName(name),
        (err) => tabError(err)
      );

      meta.getSheetSize(activeSheet).then(
        (size) => setActiveSize(size),
        (err) => tabError(err)
      );
    }
  },[activeSheet])

  // queries datasources using methods specific to 
  // each visualiation type ['Dashboard', 'Story', 'Worksheet']
  useEffect(() => {
    if (activeType === 'Worksheet') {
      meta.worksheetData(activeSheet).then(
        (datasources) => setDataSources(datasources),
        (err) => tabError(err)
      );
    }
    else if (activeType === 'Dashboard') {
      meta.getDashSheets(activeSheet).then(
        (sheets) => setSheets(sheets),
        (err) => tabError(err)
      );
    }
    else if (activeType === 'Story') {
    }
  },[activeType, activeSheet])

  return (
    <>
      <Modal
        card={true}
        display={props.detailModal}
        setDisplay={props.handleModal}
        title={
          <span>
            {activeName !== '' ? (
              <>
                <FontAwesomeIcon 
                  icon={faFileContract} 
                  style={{height: "1rem", verticalAlign: "baseline"}}
                /> {activeName}
              </>
            ) : (
              <>
                <FontAwesomeIcon 
                  icon={faSpinner} 
                  style={{height: "1rem", verticalAlign: "baseline"}}
                  pulse
                /> Loading Visualization...
              </>
            )}
          </span>
        }
        footer={
          <>
            {!props.vizArray ? null : (
              <VizNav
                color={props.color}
                outline={props.outline}
                rounded={props.rounded}
                handleVizIndex={props.handleVizIndex}
                vizUrl={props.vizUrl} 
                vizIndex={props.vizIndex}
              />
            )}
          </>
        }
      >
        <Title
          title={"Visualization Details"}
          titleSize={4}
          titleColor="white"
          subtitle={
            <div className="columns">
              <div className="column">
                {vizUrl !== '' ? (
                  <a href={vizUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon 
                      icon={faLink} 
                      style={{height: "0.7rem", verticalAlign: "inherit"}}
                    /> Link
                  </a>
                ) : (
                  <p>
                    <FontAwesomeIcon 
                      icon={faUnlink} 
                      style={{height: "0.7rem", verticalAlign: "inherit"}}
                    /> Link unavailable
                  </p>
                )}
                <p>Type: {activeType}</p>
              </div>
              <div className="column">
                <p>Workbook: {workbookName}</p>
                <p>Size: {activeSize.behavior}</p>
              </div>
            </div>
          }
          subtitleSize={6}
          subtitleColor="grey-lighter"
        />
        <br/>
        {activeType === 'Dashboard' &&
          <Sheets
            activeType={activeType}
            vizUrl={vizUrl}
            activeName={activeName}
            workbookName={workbookName}
            activeSize={activeSize}
            sheets={sheets}
          />
        }
        {activeType === 'Worksheet' &&
          <>
          </>
        }
      </Modal>
    </>
  )
}
