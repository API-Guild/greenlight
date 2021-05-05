import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <footer className="footer is-flex-shrink-1">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong><a href="https://api-guild.github.io/greenlight/" target="_blank" rel="noreferrer">Greenlight </a></strong> 
              by <a href="https://stephenlprice.github.io/portfolio/index.html" target="_blank" rel="noreferrer">Stephen Price </a> 
              and <a href="https://trevorsmithbanjo.github.io/#/" target="_blank" rel="noreferrer"> Trevor Smith</a>. 
              <br/>
              The source code is licensed <a href="https://opensource.org/licenses/0BSD" target="_blank" rel="noreferrer"> 0BSD</a>.
              Visit us on <a className="has-text-primary" href="https://github.com/API-Guild/greenlight" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}/> Github
              </a> 
              .
            </p>
          </div>
        </div>
      </footer>
  )
}
