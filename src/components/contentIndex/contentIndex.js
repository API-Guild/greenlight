import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice, faUndoAlt, faListUl  } from '@fortawesome/free-solid-svg-icons'
import Search from "../search/search"


// Creates an index component listing posts on pages such as Explore
export default function ContentIndex(props) {

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

        <a className="panel-block contentIndexArticle has-text-weight-medium" href="/explore" onClick={makeActive}>
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          Article 1
        </a>

        <a className="panel-block contentIndexArticle has-text-weight-medium" href="/explore" onClick={makeActive}>
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          Article 2
        </a>

        <a className="panel-block contentIndexArticle has-text-weight-medium" href="/explore" onClick={makeActive}>
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          Article 3
        </a>

        <label className="panel-block">
          <input type="checkbox"/>
          remember me
        </label>

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
