import React from "react"
import greenlight from "../../assets/svg/greenlight.svg"

export default function Header() {

  const showMenu = () => {
    const menu = document.getElementById('navMenu');
    const burger = document.getElementById('burger');

    menu.classList.toggle('is-active');
    burger.classList.toggle('is-active');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img className="logo-navbar" src={greenlight} alt="logo"/>
          Greenlight
        </a>

        <span id='burger' role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" 
        data-target="navMenu" onClick={showMenu} onKeyUp={showMenu} tabIndex={0}>
          <span aria-hidden="true" data-target="navMenu"></span>
          <span aria-hidden="true" data-target="navMenu"></span>
          <span aria-hidden="true" data-target="navMenu"></span>
        </span>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/about">About</a>
          <a className="navbar-item" href="/contact">Contact</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/reports">Reports</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/">Financials</a>
              <a className="navbar-item" href="/">Supply Chain</a>
              <a className="navbar-item" href="/">Sales</a>
              <a className="navbar-item" href="/">QA/QC</a>
              <a className="navbar-item" href="/">Marketing</a>
              <a className="navbar-item" href="/">Human Resources</a>
              <hr className="navbar-divider"></hr>
              <a className="navbar-item" href="/">Explore</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">
                <strong>Sign up</strong>
              </button>
              <button className="button is-light">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
