import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Title from "../../../../title/title"
import Datasources from "./Datasources"

export default function Sheets(props) {
  return (
    <>
      <Title
        title="Worksheets"
        titleSize={4}
        titleColor="white"
        subtitle={
          <div className="columns is-mobile is-multiline is-centered">
            {props.sheets.map((sheet, index) => (
              <div key={`${index}-${sheet.getName().toLowerCase()}`}>
                <Sheet
                  sheet={sheet}
                />
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

const Sheet = (props) => {
  let type = props.sheet.getSheetType();
  type = type.charAt(0).toUpperCase() + type.slice(1);

  let size = props.sheet.getSize().behavior;
  size = size.charAt(0).toUpperCase() + size.slice(1);

  return ( 
    <div className="column is-narrow">
      <a href={props.sheet.getUrl()} target="_blank" rel="noreferrer">
        <FontAwesomeIcon 
          icon={faLink} 
          style={{height: "0.7rem", verticalAlign: "inherit"}}
        /> {props.sheet.getName()}
      </a>
      <p>Type: {type}</p>
      <p>Size: {size}</p>
    </div>
  )
}
