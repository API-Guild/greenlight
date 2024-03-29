import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import Logo from "../logo/logo"
import Search from "../search/search"
import Dropdown from "../dropdown/dropdown"
import Auth from "../auth/auth"
import * as navbarStyles from "./navbar.module.css"


export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);

  // Toggles the dropdown menu upon hamburger clicks from tablet devices and smaller
  const showMenu = () => {
    setNavMenu(!navMenu);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="logo is-flex is-align-items-center">
            <Logo />
          </span>
          Greenlight
        </Link>
        <Hamburger navMenu={navMenu} showMenu={showMenu} />
      </div>
      <NavMenu navMenu={navMenu} />
    </nav>
  )
}

// hamburger icon, when clicked on tablet and mobile displays the NavMenu
const Hamburger = (props) => {
  // toggles showing a hamburger or an 'X' icon
  let display = `navbar-burger ${navbarStyles.navbarBurger}`;

  if (props.navMenu) {
    display = `navbar-burger is-active ${navbarStyles.navbarBurger}`;
  }
  else {
    display = `navbar-burger ${navbarStyles.navbarBurger}`;
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
      onKeyDown={props.showMenu}
      tabIndex={0}
    >
      <span aria-hidden="true" data-target="navMenu"></span>
      <span aria-hidden="true" data-target="navMenu"></span>
      <span aria-hidden="true" data-target="navMenu"></span>
    </span>
  )
}

// Contains <Link>'s to pages and blog posts listed in the dropdown
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

  if (props.navMenu) {
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
        
        <Dropdown title="Documentation" navMenu={props.navMenu}>
          <Link to="/docs" className="navbar-item">
            <span className="icon-text has-text-weight-bold">
              <span className="icon">
                <FontAwesomeIcon icon={faListUl}/>
              </span>
              <span>Articles</span>
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
          <div className={navbarStyles.exploreSearch}>
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
