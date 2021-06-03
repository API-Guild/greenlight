import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice, faUndoAlt, faListUl  } from '@fortawesome/free-solid-svg-icons'
import Search from "../search/search"

// Creates an index component listing posts on pages such as Explore
export default function ContentIndex(props) {
  return (
    <div className="container is-max-desktop">
      <nav className="panel is-primary">
        
        <p className="panel-heading">
          <span className="icon-text has-text-weight-bold">
            <span className="icon">
              <FontAwesomeIcon icon={faListUl}/>
            </span>
            <span>{props.title}</span>
          </span>
        </p>

        <div className="panel-block">
          <Search/>
        </div>

        {props.content.map((item, index) => (
          <ContentItem 
            key={item.fields.slug + '-' + index}
            slug={item.fields.slug}
            title={item.frontmatter.title}
            date={item.frontmatter.date}
            description={item.frontmatter.description}
          />
        ))}

        <div className="panel-block">
          <button className="button is-primary is-outlined is-fullwidth">
            <span className="icon">
              <FontAwesomeIcon icon={faUndoAlt}/>
            </span>
            <span>Reset all filters</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

// An individual item of content such as a blog post
const ContentItem = (props) => {
  return (
    <span>
      <Link
        to={props.slug}
        className="panel-block contentIndexArticle is-active"
      >
        <span className="panel-icon is-flex-shrink-0">
          <FontAwesomeIcon icon={faFileInvoice}/>
        </span>
        <span className="has-text-weight-medium is-flex-grow-1">
          {props.title}
        </span>
        <span className="has-text-weight-light is-flex-shrink-0">
          {props.date}
        </span>
      </Link>
        <p className="contentIndexDesc has-text-weight-light has-text-left has-text-grey-lighter">
          {props.description}
        </p>
        <br/>
    </span>
  )
}
