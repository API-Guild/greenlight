import React from "react"
import * as cardStyles from './card.module.css'

// Main card component with optional subcomponents
export default function Card(props) {
  return (
    <div className={`card ${cardStyles.card}`}>
      {props.header ? <Header title={props.header} /> : null}
      {props.image ? <Image image={props.image}/> : null}
      {props.content ? <Content content={props.content}/> : null}
      {props.footer ? <Footer footer={props.footer}/> : null}
    </div>
  )
}

function Header(props) {
  return (
    <header className="card-header">
      <span className="card-header-title has-text-primary">
        {props.title}
      </span>
    </header>
  )
}

function Image(props) {
  return (
    <div className="card-image">
      <figure className="imagex">
        <img src={props.image} alt="card"/>
      </figure>
    </div>
  )
}

function Content(props) {
  return (
    <div className="card-content">
      <div className="content">
        {props.content}
      </div>
    </div>
  )
}

function Footer(props) {
  return (
    <footer className="card-footer">
      {props.footer.map((item, index) => (
        <span className="card-footer-item" key={`${item}-${index}`}>
          {item}
        </span>
      ))}
    </footer>
  )
}
