import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice, faUndoAlt, faListUl  } from '@fortawesome/free-solid-svg-icons'
import Search from "../search/search"


// Creates an index component listing posts on pages such as Explore
export default function ContentIndex(props) {

  console.log('content', props.content)

  const makeActive = (event) => {
    event.target.classList.toggle("is-active")
  }

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
          <Link
            to={item.fields.slug}
            className="panel-block contentIndexArticle has-text-weight-medium"
            onClick={makeActive}
            key={Math.random().toString(36).substr(2, 10)}
          >
            <span className="panel-icon">
              <FontAwesomeIcon icon={faFileInvoice}/>
            </span>
            {item.frontmatter.title}
          </Link>
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
