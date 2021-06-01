import React from "react"

export const isSize1 = props => (
  <h1 className="is-size-1-tablet is-size-2-mobile has-text-primary" {...props}>
    {props.children}
  </h1>
)
export const isSize2 = props => (
  <h2 className="is-size-2-tablet is-size-3-mobile has-text-primary" {...props}>
    {props.children}
  </h2>
)
export const isSize3 = props => (
  <h3 className="is-size-3-tablet is-size-4-mobile has-text-primary" {...props}>
    {props.children}
  </h3>
)
export const isSize4 = props => (
  <h4 className="is-size-4-tablet is-size-5-mobile has-text-primary" {...props}>
    {props.children}
  </h4>
)
export const isSize5 = props => (
  <h5 className="is-size-5-tablet is-size-6-mobile has-text-primary" {...props}>
    {props.children}
  </h5>
)
export const isSize6 = props => (
  <h6 className="is-size-6-tablet is-size-7-mobile has-text-primary" {...props}>
    {props.children}
  </h6>
)
export const isSize7 = props => (
  <h6 className="is-size-7-tablet" {...props}>
    {props.children}
  </h6>
)
export const table = props => (
  <table className="table is-bordered is-striped is-hoverable is-fullwidth" {...props}>
    {props.children}
  </table>
)
export const paragraph = props => (
  <div className="content">
    <p {...props}>{props.children}</p>
  </div>
)
export const ul = props => (
  <div className="content">
    <ul {...props}>{props.children}</ul>
  </div>
)
export const blockquote = props => (
  <div className="content">
    <blockquote {...props}>{props.children}</blockquote>
  </div>
)
export const ol = props => (
  <div className="content">
    <ol {...props}>{props.children}</ol>
  </div>
)
