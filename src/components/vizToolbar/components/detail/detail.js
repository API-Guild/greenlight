import React, { useState, useEffect } from "react"
import { uniqWith, isEqual } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import * as meta from "./vizMeta.js"
import Modal from "../../../modal/modal"
import Dashboard from "./panels/Dashboard"

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
        (sheets) => {
          setSheets(sheets);
          let dashData = [];
          sheets.forEach((sheet) => {
            sheet.getDataSourcesAsync().then(
              (datasources) => {
                datasources.forEach((datasource) => dashData.push(datasource));
              },
              (err) => console.error(`Cannot push datasources to array: ${err}`)
            );
          });
          console.log('dashData', dashData)
          console.log('uniqWith',uniqWith(dashData, isEqual))
          setDataSources(dashData);
        },
        (err) => tabError(err)
      );
    }
    else if (activeType === 'Story') {
    }
  },[activeType, activeSheet])

  useEffect(() => {
    // console.log('sheets', sheets)
    // console.log('dataSources', dataSources)
  },[sheets,dataSources])

  return (
    <>
      <Modal
        card={true}
        display={props.detailModal}
        setDisplay={props.handleModal}
        title={
          <span>
            <FontAwesomeIcon 
              icon={faFileContract} 
              style={{height: "1.25rem", verticalAlign: "middle"}}
            /> Visualization Details
          </span>
        }
        footer={
          <>
            <button className="button is-primary">Save changes</button>
            <button className="button">Cancel</button>
          </>
        }
      >
      {activeType === 'Dashboard' ? (
        <Dashboard
          activeType={activeType}
          vizUrl={vizUrl}
          activeName={activeName}
          workbookName={workbookName}
          activeSize={activeSize}
          dataSources={dataSources}
          sheets={sheets}
        />
      ) : null}
      </Modal>
    </>
  )
}
