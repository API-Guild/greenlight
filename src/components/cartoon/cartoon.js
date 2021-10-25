import React from "react"
import classNames from "classnames"
import { cartoon, left, right } from "./cartoon.module.scss"

export default function Cartoon(props) {
  const container = classNames({
    [`${left}`]: props.float === 'left',
    [`${right}`]: props.float === 'right',
  });

  return (
    <div className={`container ${props.classes} ${container}`} style={{width: props.width, margin: props.margin}}>
      <figure className={`image cartoon is-flex is-justify-content-center ${cartoon}`}>
        {props.children}
      </figure>
    </div>
  )
}
