import React, { useState } from "react"

const List = (props) => {
  let display = 'navbar-dropdown';

  if (props.dropdown) {
    display = 'navbar-dropdown is-active';
  }
  else {
    display = 'navbar-dropdown';
  }
  
  // props.content are <Link/> components from navbar.js 
  // as nodes obtained from the content/blog folder
  return (
    <div className={display}>
      {props.content}
    </div>
  )
}

export default function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);

  // toggles display of the <List/> component
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
