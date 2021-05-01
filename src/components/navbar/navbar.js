import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import greenlight from "../../assets/svg/greenlight.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  // Toggles the dropdown menu upon hamburger clicks from tablet devices and smaller
  const showMenu = () => {
    const menu = document.getElementById("navMenu")
    const burger = document.getElementById("burger")

    menu.classList.toggle("is-active")
    burger.classList.toggle("is-active")
  };

  const clearExplore = () => {
    document.getElementById("exploreInput").value = "";
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

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/dashboards">
              Dashboards
            </Link>

            <div className="navbar-dropdown">
              {data.allMdx.edges.map(({ node }) => (
                <Link
                  to={node.fields.slug}
                  className="navbar-item"
                  key={node.id}
                >
                  {node.frontmatter.title}
                </Link>
              ))}
              <hr className="navbar-divider"></hr>
              <div id="exploreSearch" className="field">
                <p className="control has-icons-left has-icons-right">
                  <input id="exploreInput" className="input" type="text" placeholder="Explore" role="searchbox"/>
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faSearch}/>
                  </span>
                  <span className="icon is-small is-right" onClick={clearExplore} onKeyPress={clearExplore} role="button" tabIndex={0}>
                    <button className="delete is-small" aria-label="clear explore"/>
                  </span>
                </p>
              </div>
            </div>
          </div>
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
