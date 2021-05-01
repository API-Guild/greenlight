import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  const compId = Math.random().toString(36).substr(2, 9);

  const clearExplore = () => {
    document.getElementById(`${compId}`).value = "";
  };

  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input id={compId} className="input" type="text" placeholder="Explore" role="searchbox"/>
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch}/>
        </span>
        <span className="icon is-small is-right" onClick={clearExplore} onKeyPress={clearExplore} role="button" tabIndex={0}>
          <button className="delete is-small" aria-label="clear explore"/>
        </span>
      </p>
    </div>
  )
}
