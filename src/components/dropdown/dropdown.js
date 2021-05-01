import React from "react"
import { Link } from "gatsby"

export default function Dropdown(props) {
  const compId = Math.random().toString(36).substr(2, 9);

  const showDropdown = () => {
    const dropdown = document.getElementById(`${compId}`);

    dropdown.classList.toggle("is-active")
  };

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <Link className="navbar-link" to={props.to} onClick={showDropdown}>
        {props.title}
      </Link>

      <div id={compId} className="navbar-dropdown">
        {props.children}
      </div>
    </div>
  )
}
