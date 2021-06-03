import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Greenlight} from "../../assets/svg/greenlight.svg"
import Search from "../search/search"
import Dropdown from "../dropdown/dropdown"
import Auth from "../auth/auth"


export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  // Toggles the dropdown menu upon hamburger clicks from tablet devices and smaller
  const showMenu = () => {
    setDropdown(!dropdown);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="logo is-flex is-align-items-center">
            <Greenlight/>
          </span>
          Greenlight
        </Link>
        <Hamburger dropdown={dropdown} showMenu={showMenu}/>
      </div>
      <NavMenu dropdown={dropdown}/>
    </nav>
  )
}

// hamburger icon, when clicked on tablet and mobile displays the NavMenu
const Hamburger = (props) => {
  // toggles showing a hamburger or an 'X' icon
  let display = 'navbar-burger';

  if (props.dropdown) {
    display = 'navbar-burger is-active';
  }
  else {
    display = 'navbar-burger';
  }

  return (
    <span
      id="burger"
      role="button"
      className={display}
      aria-label="menu"
      aria-expanded="false"
      data-target="navMenu"
      onClick={props.showMenu}
      onKeyUp={props.showMenu}
      tabIndex={0}
    >
      <span aria-hidden="true" data-target="navMenu"></span>
      <span aria-hidden="true" data-target="navMenu"></span>
      <span aria-hidden="true" data-target="navMenu"></span>
    </span>
  )
}

// Contains a list of links and dropdowns
const NavMenu = (props) => {
  // Gatsby hook for graphql queries that aren't page components
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );
  
  // toggles visibility when clicking on the hamburger icon
  let display = 'navbar-menu';

  if (props.dropdown) {
    display = 'navbar-menu is-active';
  }
  else {
    display = 'navbar-menu';
  }

  return (
    <div id="navMenu" className={display}>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        
        <Dropdown title="Blog">
          <Link to="/explore" className="navbar-item">
            <span className="icon-text has-text-weight-bold">
              <span className="icon">
                <FontAwesomeIcon icon={faListUl}/>
              </span>
              <span>Explore</span>
            </span>
          </Link>
          <hr className="navbar-divider"></hr>
          
          {/* nodes obtained from the content/blog folder */}
          {data.allMdx.edges.map(({ node }) => (
            <Link
              to={node.fields.slug}
              className="navbar-item"
              key={node.id}
            >
              {node.frontmatter.title}
            </Link>
          ))}
          <div id="exploreSearch">
            <Search/>
          </div>
        </Dropdown>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Auth/>
        </div>
      </div>
    </div>
  )
}
