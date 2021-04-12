import React from "react"

export default function Callout(props) {

  let calloutType = "notification primary";

  switch (props.type) {
    case "primary":
      calloutType = "notification is-primary";
      break;
    case "link":
      calloutType = "notification is-link";
      break;
    case "info":
      calloutType = "notification is-info";
      break;
    case "success":
      calloutType = "notification is-success";
      break;
    case "warning":
      calloutType = "notification is-warning";
      break;
    case "danger":
      calloutType = "notification is-danger";
      break;
    case "primary light":
      calloutType = "notification is-primary is-light";
      break;
    case "link light":
      calloutType = "notification is-link is-light";
      break;
    case "info light":
      calloutType = "notification is-info is-light";
      break;
    case "success light":
      calloutType = "notification is-success is-light";
      break;
    case "warning light":
      calloutType = "notification is-warning is-light";
      break;
    case "danger light":
      calloutType = "notification is-danger is-light";
      break;
    default:
      calloutType = "notification is-primary";
  }

  return (
    <div className="container">
      <div className={calloutType}>
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">
          {props.subtitle}
        </h2>
      </div>
    </div>
  )
}
