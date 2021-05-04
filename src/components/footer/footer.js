import React from "react"
import greenlight from "../../assets/svg/greenlight.svg"

export default function Footer() {
  return (
      <footer className="footer is-flex-shrink-1">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Greenlight</strong> by <a href="https://stephenlprice.github.io/portfolio/index.html" target="_blank" rel="noreferrer">Stephen Price </a> 
              and <a href="https://trevorsmithbanjo.github.io/#/" target="_blank" rel="noreferrer"> Trevor Smith</a>. The source code is licensed
              <a href="https://opensource.org/licenses/0BSD" target="_blank" rel="noreferrer"> 0BSD</a>. Built with 
              <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer"> Gatsby</a> and 
              <a href="https://bulma.io/" target="_blank" rel="noreferrer"> Bulma</a>.
            </p>
          </div>
        </div>
      </footer>
  )
}
