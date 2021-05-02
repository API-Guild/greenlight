import React from "react"

export default function Dropdown(props) {
  const compId = Math.random().toString(36).substr(2, 9);

  const showDropdown = () => {
    const dropdown = document.getElementById(`${compId}`);

    dropdown.classList.toggle("is-active")
  };

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <span className="navbar-link" onClick={showDropdown} onKeyPress={showDropdown} role="button" tabIndex={0}>
        {props.title}
      </span>
      
      <div id={compId} className="navbar-dropdown">
        {props.children}
      </div>
    </div>
  )
}
