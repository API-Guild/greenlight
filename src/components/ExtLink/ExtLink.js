import React from 'react'

export default function ExtLink(props) {
  const color = props.color ? props.color : "";

  return (
    <a className={color} href={props.to} target="_blank" rel="noreferrer">{props.children}</a>
  )
}
