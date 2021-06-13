import React from "react"
import Title from "../title/title"
import * as calloutStyles from "./callout.module.css"

export default function Callout(props) {
  const calloutColor = setColor(props.color);

  return (
    <div className={`container ${calloutStyles.callout}`}>
      <div className={`notification ${calloutColor}`}>
        <Title 
          title={props.title}
          titleSize={props.titleSize}
          titleColor={props.titleColor}
          subtitle={props.subtitle}
          subtitleSize={props.subtitleSize}
          subtitleColor={props.subtitleColor}
        />
      </div>
    </div>
  )
}

const setColor = (color) => {
  let colorClass = 'is-primary';

  if (typeof color === 'string') {
    colorClass = `is-${color}`
  }

  return colorClass;
}
