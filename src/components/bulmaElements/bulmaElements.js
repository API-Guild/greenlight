import React from "react"

export const isSize1 = props => (
  <h1 
    id={props.children.replaceAll(' ', '-').toLowerCase()} 
    className="is-size-1-tablet is-size-2-mobile has-text-primary" 
    {...props}
  >
    <a 
      href={`#${props.children.replaceAll(' ', '-').toLowerCase()}`} 
      aria-label={props.children} 
      className="anchor"
    >
      <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20">
        <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
        </path>
      </svg>
    </a>
    {props.children}
  </h1>
)

export const isSize2 = props => (
  <h2 
    id={props.children.replaceAll(' ', '-').toLowerCase()} 
    className="is-size-2-tablet is-size-3-mobile has-text-primary" 
    {...props}
  >
    <a 
      href={`#${props.children.replaceAll(' ', '-').toLowerCase()}`} 
      aria-label={props.children} 
      className="anchor"
    >
      <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20">
        <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
        </path>
      </svg>
    </a>
    {props.children}
  </h2>
)

export const isSize3 = props => (
  <h3 
    id={props.children.replaceAll(' ', '-').toLowerCase()} 
    className="is-size-3-tablet is-size-4-mobile has-text-primary" 
    {...props}
  >
    <a 
      href={`#${props.children.replaceAll(' ', '-').toLowerCase()}`} 
      aria-label={props.children} 
      className="anchor"
    >
      <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20">
        <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
        </path>
      </svg>
    </a>
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
  <h6 className="is-size-6-tablet is-size-7-mobile has-text-grey-light" {...props}>
    {props.children}
  </h6>
)

export const table = props => (
  <div className="table-container">
    <table className="table is-bordered is-striped is-hoverable is-fullwidth" {...props}>
      {props.children}
    </table>
  </div>
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

export const a = props => (
  <a target="_blank" rel="noreferrer" {...props}>
    {props.children}
  </a>
)
