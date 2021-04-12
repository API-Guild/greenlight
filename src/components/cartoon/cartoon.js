import React from "react"

export default function Cartoon(props) {

  return (
    <figure className="image is-flex is-justify-content-center">
      <img className="cartoon-pages" src={props.svg} alt="cartoon"/>
    </figure>
  )
}
