import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Title from "../../../../title/title"

export default function Datasources(props) {
  return (
    <Title
      title="Datasources"
      titleSize={4}
      titleColor="white"
      subtitle={
        <div className="columns is-multiline">
          {!props.data ? null : (
            props.data.map((datasource, index) => (
              <div 
                key={`${index}-${datasource.getName()}`} 
                className="column is-narrow"
                style={{"width":"fit-content"}}
              >
                <p className="has-text-primary">
                  <FontAwesomeIcon 
                    icon={faDatabase} 
                    style={{height: "0.7rem", verticalAlign: "inherit"}}
                  /> <strong>{datasource.getName()}</strong>
                </p>
                <p>
                  Type: <strong>{datasource.getIsPrimary() ? "Primary" : "Secondary"}</strong>
                </p>
                <p className="is-size-7 has-text-grey">
                  <strong className="is-size-7 has-text-grey-lighter">Fields:</strong> [
                    {Object.keys(datasource.getFields()).map(fields => (
                      <>
                        {typeof datasource.getFields()[fields] === 'object' ? 
                        (`${datasource.getFields()[fields].getName()}, `) 
                        : null}
                      </>
                    ))}
                  ]
                </p>
              </div>
            ))
          )}
        </div>
      }
      subtitleSize={6}
      subtitleColor="grey-lighter"
    />
  )
}
