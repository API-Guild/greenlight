import React from "react"

export default function Title(props) {
  const titleSize = sizer(props.titleSize);
  const titleColor = colorizer(props.titleColor);
  const subtitleSize = sizer(props.subtitleSize);
  const subtitleColor = colorizer(props.subtitleColor);


  // can have empty title and/or subtitle text with different sizes.
  // recommended to have a title that is 2 numbers larger than the subtitle, i.e. {title: 1}, {subtitle: 3}
  return (
    <div>
      {props.title ? <h1 className={`title ${titleSize} ${titleColor}`}>{props.title}</h1> : null}
      {props.subtitle ? <h2 className={`subtitle ${subtitleSize} ${subtitleColor}`}>{props.subtitle}</h2> : null}
    </div>
  )
}

const sizer = (size) => {
  let textSize;
  switch (size) {
    case 1:
      textSize = 'is-1';
      break;
    case 2:
      textSize = 'is-2';
      break;
    case 3:
      textSize = 'is-3';
      break;
    case 4:
      textSize = 'is-4';
      break;
    case 5:
      textSize = 'is-5';
      break;
    case 6:
      textSize = 'is-6';
      break;
    default:
      textSize = null;
  }
  return textSize;
}

const colorizer = (color) => {
  let textColor;
  switch (color) {
    case 'primary':
      textColor = 'has-text-primary';
      break;
    case 'white':
      textColor = 'has-text-white';
      break;
    case 'black':
      textColor = 'has-text-black';
      break;
    case 'light':
      textColor = 'has-text-light';
      break;
    case 'dark':
      textColor = 'has-text-dark';
      break;
    case 'link':
      textColor = 'has-text-link';
      break;
    case 'info':
      textColor = 'has-text-info';
      break;
    case 'success':
      textColor = 'has-text-success';
      break;
    case 'warning':
      textColor = 'has-text-warning';
      break;
    case 'danger':
      textColor = 'has-text-danger';
      break;
    case 'black-bis':
      textColor = 'has-text-black-bis';
      break;
    case 'black-ter':
      textColor = 'has-text-black-ter';
      break;
    case 'grey darker':
      textColor = 'has-text-grey-darker';
      break;
    case 'grey dark':
      textColor = 'has-text-grey-dark';
      break;
    case 'grey':
      textColor = 'has-text-grey';
      break;
    case 'grey light':
      textColor = 'has-text-grey-light';
      break;
    case 'grey lighter':
      textColor = 'has-text-grey-lighter';
      break;
    case 'white-ter':
      textColor = 'has-text-white-ter';
      break;
    case 'white-bis':
      textColor = 'has-text-white-bis';
      break;
    case 'primary light':
      textColor = 'has-text-primary-light';
      break;
    case 'link light':
      textColor = 'has-text-link-light';
      break;
    case 'info light':
      textColor = 'has-text-info-light';
      break;
    case 'success light':
      textColor = 'has-text-success-light';
      break;
    case 'warning light':
      textColor = 'has-text-warning-light';
      break;
    case 'danger light':
      textColor = 'has-text-danger-light';
      break;
    case 'primary dark':
      textColor = 'has-text-primary-dark';
      break;
    case 'link dark':
      textColor = 'has-text-link-dark';
      break;
    case 'info dark':
      textColor = 'has-text-info-dark';
      break;
    case 'success dark':
      textColor = 'has-text-success-dark';
      break;
    case 'warning dark':
      textColor = 'has-text-warning-dark';
      break;
    case 'danger dark':
      textColor = 'has-text-danger-dark';
      break;
    default:
      textColor = null;
  }
  return textColor;
}
