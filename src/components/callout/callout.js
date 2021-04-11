import React from "react"

export default function Callout(props) {

  let calloutType = "primary";

  switch (props.type) {
    case "primary":
    calloutType = "primary";
    break;
  }

  return (
    <div className="container">
      <div className="notification is-primary">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">
          {props.subtitle}
        </h2>
      </div>
    </div>
  )
}
