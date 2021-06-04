import React from "react"
import * as heroStyles from "./hero.module.css"

export default function Hero(props) {
  return (
    <section className="section">
      <div className="container is-justify-content-flex-start">
        <p className="title has-text-primary is-1">
          {props.title}
        </p>
        <p className="subtitle is-4">
          {props.subtitle}
        </p>
        {/* Used for dates on blog posts */}
        <p className={`subtitle ${heroStyles.subtitleDate} is-7`}> 
          {props.date}
        </p>
      </div>
    </section>
  )
}
