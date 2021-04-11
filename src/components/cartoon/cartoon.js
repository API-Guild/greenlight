import React from "react"

export default function Cartoon(props) {
  return (
    <div className="container is-fluid">
      <figure className="image">
        <img className="cartoon-pages" src={props.svg} alt="cartoon"/>
      </figure>
    </div>
  )
}
