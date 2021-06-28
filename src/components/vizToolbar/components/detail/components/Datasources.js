import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function Datasources(props) {
  const [datasources, setDataSources] = useState(undefined);

  props.sheet.getDataSourcesAsync().then(
    result => setDataSources(result),
    err => console.error(`Cannot get datasources from sheet ${props.sheet}`, err)
  );

  useEffect(() => {
  }, [datasources])
 
  return (
    <>
      {datasources === undefined ? null : (
        datasources.map((datasource, index) => (
          <p key={`${index}-${datasource.getName()}`}>
            <FontAwesomeIcon 
              icon={faDatabase} 
              style={{height: "0.7rem", verticalAlign: "inherit"}}
            /> {datasource.getName()}
          </p>
        ))
      )}
    </>
  )
}
