import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon(props) {
  return (
    <>
      {props.direction === 'left' ? (
        <span className="icon-text">
          <span className="icon">
            <FontAwesomeIcon icon={props.icon} flip="horizontal"/>
          </span>
          <span>{props.text}</span>
        </span>
      ) : (
        <span className="icon-text">
          <span>{props.text}</span>
          <span className="icon">
            <FontAwesomeIcon icon={props.icon}/>
          </span>
        </span>
      )}
    </>
  )
}
