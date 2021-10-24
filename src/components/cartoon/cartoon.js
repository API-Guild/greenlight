import React from "react"
import { cartoon } from "./cartoon.module.scss"

export default function Cartoon(props) {

  return (
    <div className="container">
      <figure className={`image cartoon is-flex is-justify-content-center ${cartoon}`}>
        {props.children}
      </figure>
    </div>
  )
}
