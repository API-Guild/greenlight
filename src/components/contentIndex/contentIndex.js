import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import Search from "../search/search"


// Creates an index component listing posts on pages such as Explore
export default function ContentIndex(props) {

  return (
    <div className="container">
      <nav className="panel is-primary">
        <p className="panel-heading">
          {props.title}
        </p>
        <div className="panel-block">
          <Search/>
        </div>
        <a className="panel-block is-active">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          minireset.css
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faFileInvoice}/>
          </span>
          jgthms.github.io
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
