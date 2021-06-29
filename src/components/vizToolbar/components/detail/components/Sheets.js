import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faUnlink } from '@fortawesome/free-solid-svg-icons'
import Table from "../../../../table/table"

export default function Sheets(props) {
  let worksheets = [];
  const data = [];

  try {
    props.sheets.forEach(sheet => {
      worksheets.push(<VizLink sheet={sheet}/>);
      worksheets.push(sheet.getSheetType());
      worksheets.push(sheet.getSize().behavior);
      data.push([worksheets]);
      worksheets = [];
    })
  }
  catch(err) {
    console.error('Cannot get sheet meta data for provided sheets: ', err)
  }
  
  return (
    <>
      <Table
        headers={['Worksheet', 'Type', 'Size']}
        data={data}
        modalTable={true}
      />
    </>
  )
}

const VizLink = (props) => {
  return (
    <>
      {!props.sheet.getIsHidden() ? (
        <a href={props.sheet.getUrl()} target="_blank" rel="noreferrer">
          <FontAwesomeIcon 
            icon={faLink} 
            style={{height: "0.7rem", verticalAlign: "inherit"}}
          /> {props.sheet.getName()}
        </a>
      ) : (
        <p>
          <FontAwesomeIcon 
            icon={faUnlink} 
            style={{height: "0.7rem", verticalAlign: "inherit"}}
          /> {props.sheet.getName()}
        </p>
      )}
    </>
  )
}
