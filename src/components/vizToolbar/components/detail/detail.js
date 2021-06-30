import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract, faLink, faUnlink, faSpinner } from '@fortawesome/free-solid-svg-icons'
import * as meta from "./vizMeta/vizMeta"
import Modal from "../../../modal/modal"
import Title from "../../../title/title"
import VizNav from "../vizNav/vizNav"
import Sheets from "./components/Sheets"
import Datasources from "./components/Datasources"
import StoryPoints from "./components/StoryPoints"

export default function Detail(props) {
  const [vizUrl, setVizUrl] = useState('');
  const [workbookName, setWorkbookName] = useState('');
  const [activeSheet, setActiveSheet] = useState('');
  const [activeType, setActiveType] = useState('');
  const [activeName, setActiveName] = useState('');
  const [activeSize, setActiveSize] = useState('');
  const [sheets, setSheets] = useState('');
  const [dataSources, setDataSources] = useState('');
  const [story, setStory] = useState('');
  const [activePoint, setStoryPoint] = useState('');
  const [storySheet, setStorySheet] = useState('');
  const [storySheetUrl, setStorySheetUrl] = useState('');
  

  const tabError = (err) => {
    console.error('Visualization Metadata Error: ', err)
  }

  // queries the viz object for meta data once it has become interactive
  useEffect(() => {
    const viz = props.vizObj;

    if (!props.loaded && !viz) {
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
  // each visualization type ['Dashboard', 'Story', 'Worksheet']
  useEffect(() => {
    if (activeType === 'Worksheet') {
      meta.worksheetData(activeSheet).then(
        (datasources) => {
          setDataSources(datasources);
        },
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
      meta.getActiveStory(activeSheet).then(
        (storypoint) => {
          setStoryPoint(storypoint);
          meta.getStoryViz(storypoint).then(
            (sheet) => {
              setStorySheet(sheet);
              meta.getVizUrl(sheet).then(
                (url) => setStorySheetUrl(url),
                (err) => tabError(err)
              );
            },
            (err) => tabError(err)
          );
        },
        (err) => tabError(err)
      );
      meta.getStory(activeSheet).then(
        (story) => setStory(story),
        (err) => tabError(err)
      );
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
                /> Visualization Details
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
          title={!activeName ? 'Name' : activeName}
          titleSize={4}
          titleColor="white"
          subtitleSize={6}
          subtitleColor="grey-lighter"
          subtitle={
            <>
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
                  <p>Type: <strong>{activeType}</strong></p>
                </div>
                <div className="column">
                  <p>Workbook: <strong>{workbookName}</strong></p>
                  <p>Size: <strong>{activeSize.behavior}</strong></p>
                </div>
              </div>
            </>
          }
        />
        {activeType === 'Dashboard' &&
          <>
            <br/>
            <Sheets
              activeType={activeType}
              vizUrl={vizUrl}
              activeName={activeName}
              workbookName={workbookName}
              activeSize={activeSize}
              sheets={sheets}
            />
          </>
        }
        {activeType === 'Worksheet' &&
          <>
            <br/>
            <Datasources
              data={dataSources}
            />
          </>
        }
        {activeType === 'Story' && 
          <>
            {/* <br/>
            <Title
              title="Active Storypoint"
              titleSize={4}
              titleColor="white"
              subtitleSize={6}
              subtitleColor="grey-lighter"
              subtitle={
                <div className="columns">
                  <div className="column">
                    <p>
                      <strong>Name:</strong> {activePoint.getContainedSheet().getName()}
                    </p>
                    {!storySheet ? null : (
                      storySheetUrl ? (
                        <a 
                          href={storySheetUrl} 
                          target="_blank" 
                          rel="noreferrer"
                        >
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
                      )
                    )}
                  </div>
                  <div className="column">
                    <p>
                      <strong>Index: </strong> {activePoint.getContainedSheet().getIndex()}
                    </p>
                  </div>
                </div>
              }
            /> */}
            <br/>
            <StoryPoints
              story={story}
              activeSheet={activeSheet}
            />
          </> 
        }
      </Modal>
    </>
  )
}
