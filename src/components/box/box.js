import React from "react"
import * as boxStyles from "./box.module.css"

export default function Block(props) {
  const hoverBox = props.hoverBox ? boxStyles.hoverBox : null;
  const vizToolbar = props.vizToolbar ? boxStyles.vizToolbar : null;

  return (
    <div className={`box ${boxStyles.box} ${hoverBox} ${vizToolbar}`}>{props.children}</div>
  )
}
