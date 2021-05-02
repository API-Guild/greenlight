import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import greenlight from "../../assets/svg/greenlight.svg"
import Search from "../search/search"
import Dropdown from "../dropdown/dropdown"


export default function Navbar() {
  // Toggles the dropdown menu upon hamburger clicks from tablet devices and smaller
  const showMenu = () => {
    const menu = document.getElementById("navMenu");
    const burger = document.getElementById("burger");

    menu.classList.toggle("is-active")
    burger.classList.toggle("is-active")
  };

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

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img className="logo" src={greenlight} alt="logo" />
          Greenlight
        </Link>

        <span
          id="burger"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          onClick={showMenu}
          onKeyUp={showMenu}
          tabIndex={0}
        >
          <span aria-hidden="true" data-target="navMenu"></span>
          <span aria-hidden="true" data-target="navMenu"></span>
          <span aria-hidden="true" data-target="navMenu"></span>
        </span>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          
          <Dropdown title="Dashboards">
            <Link to="/explore" className="navbar-item">
              <span className="icon-text has-text-weight-bold">
                <span className="icon">
                  <FontAwesomeIcon icon={faListUl}/>
                </span>
                <span>Explore</span>
              </span>
            </Link>
            <hr className="navbar-divider"></hr>
            
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
            <div className="buttons">
              <button className="button is-primary">
                <strong>Sign up</strong>
              </button>
              <button className="button is-light">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
