import React, { useState, useRef, useEffect } from "react"
import * as dropdownStyles from "./dropdown.module.css"

const List = (props) => {
  let display = dropdownStyles.dropdownHide;

  // only displays if both the navMenu and dropdown are true
  if (props.dropdown && props.navMenu) {
    display = dropdownStyles.dropdownShow;
  }
  else {
    display = dropdownStyles.dropdownHide;
  }
  
  // props.content are <Link/> components from navbar.js 
  // as nodes obtained from the content/docs folder
  return (
    <div id="d-test-yo" className={`navbar-dropdown ${display}`}>
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
        className={`navbar-link ${dropdownStyles.navbarLink}`} 
        onClick={() => showDropdown()} 
        onKeyDown={() => showDropdown()} 
        role="button" 
        tabIndex={0}
      >
        {props.title}
      </span>
      
      <List content={props.children} dropdown={dropdown} navMenu={props.navMenu} />
    </div>
  )
}
