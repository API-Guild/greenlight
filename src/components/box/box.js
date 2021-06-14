import React from "react"
import * as boxStyles from "./box.module.css"

export default function Block(props) {
  const hoverBox = props.hoverBox ? boxStyles.hoverBox : '';
  const vizBox = props.vizBox ? boxStyles.vizBox : '';

  return (
    <div className={`box ${boxStyles.box} ${hoverBox} ${vizBox}`}>{props.children}</div>
  )
}
