import React from "react"
import Title from "../title/title"
import * as calloutStyles from "./callout.module.css"

export default function Callout(props) {
  const calloutType = setType(props.type);

  return (
    <div className={`container ${calloutStyles.callout}`}>
      <div className={`notification ${calloutType}`}>
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

const setType = (type) => {
  let calloutType = "is-primary";

  switch (type) {
    case "primary":
      calloutType = "is-primary";
      break;
    case "link":
      calloutType = "is-link";
      break;
    case "info":
      calloutType = "is-info";
      break;
    case "success":
      calloutType = "is-success";
      break;
    case "warning":
      calloutType = "is-warning";
      break;
    case "danger":
      calloutType = "is-danger";
      break;
    case "primary light":
      calloutType = "is-primary is-light";
      break;
    case "link light":
      calloutType = "is-link is-light";
      break;
    case "info light":
      calloutType = "is-info is-light";
      break;
    case "success light":
      calloutType = "is-success is-light";
      break;
    case "warning light":
      calloutType = "is-warning is-light";
      break;
    case "danger light":
      calloutType = "is-danger is-light";
      break;
    default:
      calloutType = null;
  }
  return calloutType;
}
