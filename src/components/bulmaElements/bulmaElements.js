import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ReactComponent as AnchorLink } from "../../assets/svg/anchorLink.svg"

// mapped to <h1> or # in markdown
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

// mapped to <h2> or ## in markdown
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

// mapped to <h3> or ### in markdown
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

// mapped to <h4> or #### in markdown
export const isSize4 = props => (
  <h4 className="is-size-4-tablet is-size-5-mobile has-text-primary" {...props}>
    {props.children}
  </h4>
)

// mapped to <h5> or ##### in markdown
export const isSize5 = props => (
  <h5 className="is-size-5-tablet is-size-6-mobile has-text-primary" {...props}>
    {props.children}
  </h5>
)

// mapped to <h6> or ###### in markdown
export const isSize6 = props => (
  <h6 className="is-size-6-tablet is-size-7-mobile has-text-grey-light" {...props}>
    {props.children}
  </h6>
)

// mapped to tables in markdown
export const table = props => (
  <div className="table-container">
    <table className="table is-bordered is-striped is-hoverable is-fullwidth" {...props}>
      {props.children}
    </table>
  </div>
)

// mapped to <p> or simple text in markdown
export const paragraph = props => (
  <div className="content">
    <p {...props}>{props.children}</p>
  </div>
)

// mapped to <ul> or '-' in markdown
export const ul = props => (
  <div className="content">
    <ul {...props}>{props.children}</ul>
  </div>
)

// mapped to <blockquote> or > in markdown
export const blockquote = props => (
  <div className="content">
    <blockquote {...props}>{props.children}</blockquote>
  </div>
)

// mapped to <ol> or 1., 2., 3.,... in markdown
export const ol = props => (
  <div className="content">
    <ol {...props}>{props.children}</ol>
  </div>
)

// mapped to <a> or <Link> depending on URL or [text](url) in markdown
export const A = props => {
  // get the prefix defined for the site to make sure it is not duplicated below
  const data = useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
    }
  `);

  const href = props.href;
  const pathPrefix = data.site.pathPrefix;

  // regex to determine if href starts with exactly one slash (/*), anything else is external.
  const internal = /^\/(?!\/)/.test(href);
  // links to static content (/static/*) should be routed as external
  const imageLink = new RegExp('static');

  // if the URL is internal and not an image link (/static/*) use <Link>
  if(internal && !imageLink.test(href)) {
    const to = href.replace(pathPrefix, '');

    console.log('internal && !imageLink', props)

    return (
      <Link to={to} {...props}>
        {props.children}
      </Link>
    )
  } else {
    console.log('!internal || imagelink', props)
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  }
}

export const Checkbox = props => (  
  <input 
    type="checkbox"  
    style={{cursor: "pointer"}}
  >
    {props.children}
  </input>
)

// 404
// https://api-guild.github.io/greenlight/static/1c64d26f341c597cab3359cbe5f6bf0d/e17e5/greenlight-sideways.png

// working
// https://api-guild.github.io/greenlight/static/1c64d26f341c597cab3359cbe5f6bf0d/e17e5/greenlight-sideways.png