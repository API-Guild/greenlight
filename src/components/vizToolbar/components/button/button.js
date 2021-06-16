import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props) {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;

  return (
    <button 
      className={`button ${btnStyles}`}
      onClick={props.onClick}
    >
      <span className="icon">
        <FontAwesomeIcon icon={props.icon}/>
      </span>
      <span>{props.name}</span>
    </button>
  )
}
