import React, { useState, useEffect } from "react"
import { titleEl } from "./title.module.scss"

export default function Title(props) {
  const [longTitle, setLongTitle] = useState(false);
  const titleSize = titleSizer(props.titleSize, longTitle);
  const titleColor = colorizer(props.titleColor);
  const subtitleSize = subtitlerSizer(props.subtitleSize, props.subtitle);
  const subtitleColor = colorizer(props.subtitleColor);

  // determines if a title has a string that is too long and requires smaller
  // font size for mobile devices (2 sizes instead of 1 size smaller than tablet)
  useEffect(() => {
    if (typeof props.title === 'string') {
      let textSplit = props.title.split(' ');
      textSplit.forEach(string => {
        if (string.length > 12) {
          return setLongTitle(true);
        }
      })
    }
  },[])

  // can have empty title and/or subtitle text with different sizes.
  // recommended to have a title that is 2 numbers larger than the subtitle, i.e. {title: 1}, {subtitle: 3}
  return (
    <div>
      {props.title ? <h1 className={`title ${titleSize} ${titleColor} ${titleEl}`}>{props.title}</h1> : null}
      {props.subtitle ? <h2 className={`subtitle ${subtitleSize} ${subtitleColor}`}>{props.subtitle}</h2> : null}
    </div>
  )
}

const titleSizer = (size, longTitle) => {
  let textClass;

  if (longTitle) {
    textClass = `is-size-${size}-tablet is-size-${size+2}-mobile`;
  }
  else if (!longTitle && size <= 5) {
    textClass = `is-size-${size}-tablet is-size-${size+1}-mobile`;
  }
  else {
    textClass = `is-size-${size}`;
  }

  return textClass;
}

const subtitlerSizer = (size) => {
  let textClass;

  if (size <= 5) {
    textClass = `is-size-${size}-tablet is-size-${size+1}-mobile`;
  }
  else {
    textClass = `is-size-${size}`;
  }

  return textClass;
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
