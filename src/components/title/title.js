import React from "react"

export default function Title(props) {
  let titleSize;

  switch (props.titleSize) {
    case 1:
      titleSize = 'is-1';
      break;
    case 2:
      titleSize = 'is-2';
      break;
    case 3:
      titleSize = 'is-3';
      break;
    case 4:
      titleSize = 'is-4';
      break;
    case 5:
      titleSize = 'is-5';
      break;
    case 6:
      titleSize = 'is-6';
      break;
    default:
      titleSize = '';
  }

  let subtitleSize;

  switch (props.subtitleSize) {
    case 1:
      subtitleSize = 'is-1';
      break;
    case 2:
      subtitleSize = 'is-2';
      break;
    case 3:
      subtitleSize = 'is-3';
      break;
    case 4:
      subtitleSize = 'is-4';
      break;
    case 5:
      subtitleSize = 'is-5';
      break;
    case 6:
      subtitleSize = 'is-6';
      break;
    default:
      subtitleSize = '';
  }

  return (
    <div>
      {props.title ? <p className={`title ${titleSize} has-text-primary`}>{props.title}</p> : null}
      {props.subtitle ? <p className={`subtitle ${subtitleSize} has-text-grey-lighter`}>{props.subtitle}</p> : null}
    </div>
  )
}
