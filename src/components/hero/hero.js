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
        {/* Used for dates on blog posts */}
        <p className={`subtitle ${heroStyles.subtitleDate} is-7`}> 
          {props.date}
        </p>
      </div>
    </section>
  )
}

const colorizer = (color) => {
  let heroColor;
  switch (color) {
    case 'primary':
      heroColor = 'is-primary';
      break;
    case 'link':
      heroColor = 'is-link';
      break;
    case 'info':
      heroColor = 'is-info';
      break;
    case 'success':
      heroColor = 'is-success';
      break;
    case 'warning':
      heroColor = 'is-warning';
      break;
    case 'danger':
      heroColor = 'is-danger';
      break;
    default:
      heroColor = null;
  }
  return heroColor;
}

const sizer = (size) => {
  let heroSize;
  switch (size) {
    case 'small':
      heroSize = 'is-small';
      break;
    case 'medium':
      heroSize = 'is-medium';
      break;
    case 'large':
      heroSize = 'is-large';
      break;
    case 'half':
      heroSize = 'is-halfheight';
      break;
    case 'full':
      heroSize = 'is-fullheight';
      break;
    default:
      heroSize = null;
  }
  return heroSize;
}
