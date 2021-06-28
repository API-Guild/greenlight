import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faDatabase, faFileContract } from '@fortawesome/free-solid-svg-icons'
import Title from "../../../../title/title"

export default function Dashboard(props) {
  return (
    <>
      <Title
        title="Current View"
        titleSize={4}
        titleColor="white"
        subtitle={
          <div className="columns">
            <div className="column">
              <a href={props.vizUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                  icon={faLink} 
                  style={{height: "0.7rem", verticalAlign: "inherit"}}
                />{props.activeName}
              </a>
              <p>Type: {props.activeType}</p>
            </div>
            <div className="column">
              <p>Workbook: {props.workbookName}</p>
              <p>Behavior: {props.activeSize.behavior}</p>
            </div>
          </div>
        }
        subtitleSize={6}
        subtitleColor="grey-lighter"
      />
      <Title
        title="Worksheets"
        titleSize={4}
        titleColor="white"
        subtitle={
          <div className="columns is-mobile is-multiline is-centered">
            {props.sheets.map((sheet, index) => (
              <div className="column is-narrow" key={`${index}-${sheet.getName().toLowerCase()}`}>
                <a href={sheet.getUrl()} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon 
                    icon={faLink} 
                    style={{height: "0.7rem", verticalAlign: "inherit"}}
                  /> {sheet.getName()}
                </a>
              </div>
            ))}
          </div>
        }
        subtitleSize={6}
        subtitleColor="grey-lighter"
      />
    </>
  )
}
