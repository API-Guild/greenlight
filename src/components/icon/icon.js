import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon(props) {
  return (
    <span className="icon-text">
      <span className="icon">
        <FontAwesomeIcon icon={props.icon}/>
        <i className="fas fa-home"></i>
      </span>
      <span>{props.text}</span>
    </span>
  )
}
