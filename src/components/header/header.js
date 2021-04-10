import React from "react"
import "../../pages/global.scss"

export default function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"></img>
        </a>

        <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarCollapse">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="navbarCollapse" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">Home</a>
          <a className="navbar-item" href="/">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/">More</a>
            
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/">About</a>
              <a className="navbar-item" href="/">Jobs</a>
              <a className="navbar-item" href="/">Contact</a>
              <hr className="navbar-divider"></hr>
              <a className="navbar-item" href="/">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <span className="button is-primary">
                <strong>Sign up</strong>
              </span>
              <span className="button is-light">
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
