import React from "react"
import * as heroStyles from "./hero.module.css"
import Title from "../title/title"

export default function Hero(props) {
  const heroColor = colorizer(props.color);
  const heroSize = sizer(props.size);

  return (
    <section className={`hero ${heroColor} ${heroSize}`}>
      <div className="hero-body">
        <Title
          title={props.title}
          titleColor={props.titleColor}
          titleSize={props.titleSize}
          subtitle={props.subtitle}
          subtitleColor={props.subtitleColor}
          subtitleSize={props.subtitleSize}
        />
        {/* Used for dates on articles */}
        <p className={`subtitle ${heroStyles.subtitleDate} is-7`}> 
          {props.date}
        </p>
      </div>
    </section>
  )
}

const colorizer = (color) => {
  let colorClass = '';

  if (typeof color === 'string') {
    colorClass = `is-${color}`;
  }
  return colorClass;
}

const sizer = (size) => {
  let sizeClass = '';

  if (typeof size === 'number') {
    sizeClass = `is-${size}`
  }
  return sizeClass;
}
