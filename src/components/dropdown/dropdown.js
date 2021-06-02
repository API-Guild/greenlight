import React, { useState } from "react"

const List = (props) => {
  let display = 'navbar-dropdown';

  if (props.dropdown) {
    display = 'navbar-dropdown is-active';
  }
  else {
    display = 'navbar-dropdown';
  }
  
  return (
    <div className={display}>
      {props.content}
    </div>
  )
}

export default function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  }

  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <span 
        className="navbar-link" 
        onClick={() => showDropdown()} 
        onKeyPress={() => showDropdown()} 
        role="button" 
        tabIndex={0}
      >
        {props.title}
      </span>
      
      <List content={props.children} dropdown={dropdown} />
    </div>
  )
}
