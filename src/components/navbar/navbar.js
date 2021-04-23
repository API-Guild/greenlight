import React from "react"
import greenlight from "../../assets/svg/greenlight.svg"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Navbar() {
  // Toggles the dropdown menu upon hamburger clicks from tablet devices and smaller
  const showMenu = () => {
    const menu = document.getElementById("navMenu")
    const burger = document.getElementById("burger")

    menu.classList.toggle("is-active")
    burger.classList.toggle("is-active")
  }

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
  )

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="logo" src={greenlight} alt="logo" />
          Greenlight
        </a>

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
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/dashboards">
              Dashboards
            </a>

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
              <a className="navbar-item" href="/">
                Explore
              </a>
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
