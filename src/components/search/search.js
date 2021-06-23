import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  const [search, setSearch] = useState('');

  const clearSearch = () => {
    setSearch('');
  };

  return (
      <p className="control has-icons-left has-icons-right">
        <input 
          className="input" type="text" placeholder="Search" role="searchbox"
          onChange={(event) => {setSearch(event.target.value)}}
          value={search}
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch}/>
        </span>
        <span className="icon is-small is-right" onClick={clearSearch} onKeyDown={clearSearch} role="button" tabIndex={0}>
          <button className="delete is-small" aria-label="clear search"/>
        </span>
      </p>
  )
}
