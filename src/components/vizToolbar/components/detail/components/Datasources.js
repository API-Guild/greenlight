import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Title from "../../../../title/title"

export default function Datasources(props) {
  return (
    <>
    {props.sheet.getDataSourcesAsync().then(
      datasources => {
        datasources.map((datasource, index) => (
          <p>
            <FontAwesomeIcon 
              icon={faDatabase} 
              style={{height: "0.7rem", verticalAlign: "inherit"}}
            /> {datasource.getName()}
          </p>
        ))
      },
      err => console.error('Cannot get datasources from sheet: ', err)
    )}
    </>
  )
}
