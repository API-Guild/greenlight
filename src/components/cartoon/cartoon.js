import React from "react"

export default function Cartoon(props) {

  return (
    <div className="container">
      <figure className="image cartoon is-flex is-justify-content-center">
        {props.children}
      </figure>
    </div>
  )
}
