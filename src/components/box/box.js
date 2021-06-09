import React from "react"
import { box } from "./box.module.css"

export default function Block(props) {
  return (
    <div className={`box ${box}`}>{props.children}</div>
  )
}
