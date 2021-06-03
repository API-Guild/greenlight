import React, { useState, useRef, useEffect } from "react"
import * as dropdownStyle from "./dropdown.module.css"

const List = (props) => {
  let display = 'navbar-dropdown';

  if (props.dropdown && props.navMenu) {
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
  const navLinkRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);

  // rotates the caret pseudo element for a more interactive effect
  useEffect(() => {
    if (dropdown) {
      navLinkRef.current.style.setProperty('--deg', "-45deg")
    }
    else {
      navLinkRef.current.style.setProperty('--deg', "45deg")
    }
  },[dropdown])

  useEffect(() => {
    setDropdown(false);
  },[props.navMenu])

  // toggles display of the <List/> component
  const showDropdown = () => {
    setDropdown(!dropdown);
  }
  
  return (
    <div className="navbar-item has-dropdown is-hoverable">
      <span 
        ref={navLinkRef}
        className={`navbar-link ${dropdownStyle.navbarLink}`} 
        onClick={() => showDropdown()} 
        onKeyPress={() => showDropdown()} 
        role="button" 
        tabIndex={0}
      >
        {props.title}
      </span>
      
      <List content={props.children} dropdown={dropdown} navMenu={props.navMenu} />
    </div>
  )
}
