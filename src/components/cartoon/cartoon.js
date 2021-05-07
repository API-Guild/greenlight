import React from "react"

export default function Cartoon(props) {

  console.log('type', props.children.type)

  return (
    <div className="container is-fluid">
      <figure className="image is-flex is-justify-content-center">
        {/* <img className="cartoon-pages" src={props.url} alt="cartoon"/> */}
        {props.children}
      </figure>
    </div>
  )
}
