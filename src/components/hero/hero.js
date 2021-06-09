import React from "react"
import * as heroStyles from "./hero.module.css"
import Title from "../title/title"

export default function Hero(props) {
  return (
    <section className="hero">
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
