import React from "react"
import * as boxStyles from "./box.module.css"

export default function Block(props) {
  let hoverBox;

  if (props.hoverBox) {
    hoverBox = boxStyles.hoverBox;
  }

  return (
    <div className={`box ${boxStyles.box} ${hoverBox}`}>{props.children}</div>
  )
}
