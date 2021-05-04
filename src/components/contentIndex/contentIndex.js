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

        {props.content.map((item) => (
          <span>
            <Link
              to={item.fields.slug}
              className="panel-block contentIndexArticle is-active"
              key={Math.random().toString(36).substr(2, 10)}
            >
              <span className="panel-icon is-flex-shrink-0">
                <FontAwesomeIcon icon={faFileInvoice}/>
              </span>
              <span className="has-text-weight-medium is-flex-grow-1">
                {item.frontmatter.title}
              </span>
              <span className="has-text-weight-light is-flex-shrink-0">
                {item.frontmatter.date}
              </span>
            </Link>
              <p className="contentIndexDesc has-text-weight-light has-text-left">
                {item.frontmatter.description}
              </p>
              <br/>
          </span>
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
