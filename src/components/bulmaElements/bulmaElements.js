import React from "react"
import { Link } from "gatsby"
import { ReactComponent as AnchorLink } from "../../assets/svg/anchorLink.svg"


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
      <AnchorLink/>
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
      <AnchorLink/>
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
      <AnchorLink/>
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

export const a = props => {
  // regex to determine if href starts with exactly one slash (/*), anything else is external.
  const internal = /^\/(?!\/)/.test(props.href);
  // links to static content (/static/*) should be routed as external
  const imageLink = /^\/(?!\/)static\//.test(props.href);

  // if the URL is internal and not an image link (/static/*) use <Link>
  if(internal && !imageLink) {
    return (
      <Link to={props.href} {...props}>
        {props.children}
      </Link>
    )
  } else {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  }
}
