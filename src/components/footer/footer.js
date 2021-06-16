import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { footer, bmc } from "./footer.module.css"
import Title from "../title/title"


export default function Footer() {
  return (
    <footer className={`footer is-flex-shrink-1 ${footer}`}>
      <div className="columns">
        <div className="column is-three-fifths is-hidden-mobile">
          <Title
            title={<Link to="/">Greenlight</Link>}
            titleSize={3}
            titleColor="primary"
            subtitle={
              <blockquote>
                "Gatsby believed in the green light, the orgiastic future that year by year recedes before us. 
                It eluded us then, but that’s no matter — tomorrow we will run faster, stretch out our arms farther... 
                And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past."
              </blockquote>
            }
            subtitleSize={6}
            subtitleColor="grey-lighter"
          />
          <p className="has-text-right">- F. Scott Fitzgerald</p>
        </div>
        <div className="column is-one-fifth is-offset-one-fifth">
          <br/>
          <ul className="has-text-centered-mobile is-size-5">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="https://github.com/API-Guild/greenlight" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub}/> Github
              </a>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/stelloprint" target="_blank" rel="noreferrer">
                <img 
                  className={bmc} 
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer!&emoji=🍺&slug=stelloprint&button_colour=0df2c1&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                  alt="buy me a beer!"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="column is-three-fifths is-hidden-tablet">
          <Title
            title={<Link to="/">Greenlight</Link>}
            titleSize={3}
            titleColor="primary"
            subtitle={
              <blockquote>
                "Gatsby believed in the green light, the orgiastic future that year by year recedes before us. 
                It eluded us then, but that’s no matter — tomorrow we will run faster, stretch out our arms farther... 
                And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past."
              </blockquote>
            }
            subtitleSize={6}
            subtitleColor="grey-lighter"
          />
          <p className="has-text-right">- F. Scott Fitzgerald</p>
        </div>
      </div>
      <br/>
      <p className="has-text-centered">
        Copyright © 2021 
        <a href="https://api-guild.github.io/greenlight/" target="_blank" rel="noreferrer"> Greenlight</a>. 
        All Rights Reserved. The source code is licensed 
        <a href="https://opensource.org/licenses/0BSD" target="_blank" rel="noreferrer"> 0BSD</a>.
      </p>
    </footer>
  )
}
