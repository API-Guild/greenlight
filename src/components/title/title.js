import React, { useState, useEffect } from "react"

export default function Title(props) {
  const [longTitle, setLongTitle] = useState(false);
  const titleSize = titleSizer(props.titleSize, longTitle);
  const titleColor = colorizer(props.titleColor);
  const subtitleSize = subtitlerSizer(props.subtitleSize, props.subtitle);
  const subtitleColor = colorizer(props.subtitleColor);

  useEffect(() => {
    // determines if a title has a string that is too long and requires smaller
    // font size for mobile devices (2 sizes instead of 1 size smaller than tablet)
    if (typeof props.title === 'string') {
      let textSplit = props.title.split(' ');
      textSplit.forEach(string => {
        if (string.length > 12) {
          return setLongTitle(true);
        }
      })
    }
  },[props.title])

  // can have empty title and/or subtitle text with different sizes.
  // recommended to have a title that is 2 numbers larger than the subtitle, i.e. {title: 1}, {subtitle: 3}
  return (
    <div>
      {props.title ? <h1 className={`title ${titleSize} ${titleColor}`}>{props.title}</h1> : null}
      {props.subtitle ? <h2 className={`subtitle ${subtitleSize} ${subtitleColor}`}>{props.subtitle}</h2> : null}
    </div>
  )
}

const titleSizer = (size, longTitle) => {
  let sizeClass;

  if (longTitle && typeof size === 'number') {
    sizeClass = `is-size-${size}-tablet is-size-${size+2}-mobile`;
  }
  else if (!longTitle && size <= 5) {
    sizeClass = `is-size-${size}-tablet is-size-${size+1}-mobile`;
  }
  else {
    sizeClass = `is-size-${size}`;
  }
  return sizeClass;
}

const subtitlerSizer = (size) => {
  let sizeClass = '';

  if (typeof size === 'number') {
    if (size <= 5) {
      sizeClass = `is-size-${size}-tablet is-size-${size+1}-mobile`;
    }
    else {
      sizeClass = `is-size-${size}`;
    }
  }
  return sizeClass;
}

const colorizer = (color) => {
  let colorClass = '';
  if (typeof color === 'string') {
    colorClass = `has-text-${color}`;
  }
  return colorClass;
}
