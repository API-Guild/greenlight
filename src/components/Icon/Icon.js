import React from 'react'

export default function Icon(props) {
  return (
    <span className="icon-text">
      <span className="icon">
        <i className="fas fa-home"></i>
      </span>
      <span>{props.text}</span>
    </span>
  )
}
