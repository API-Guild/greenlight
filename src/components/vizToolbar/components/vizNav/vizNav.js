import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { navBtn, vizNav } from "./vizNav.module.css"

export default function VizNav(props) {
  const btnStyles = `${props.color} ${props.outline} ${props.rounded} ${navBtn}`;

  return (
    <>
      <div className={`buttons are-small is-centered is-hidden-tablet ${vizNav}`}>
        {/* mobile layout */}
        <button className={`button ${btnStyles}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faBackward}/>
          </span>
          <span><strong>Previous</strong></span>
        </button>
        <button className={`button ${btnStyles}`}>
          <span><strong>Next</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faForward}/>
          </span>
        </button>
      </div>
      {/* desktop layout */}
      <div className={`buttons is-centered is-hidden-mobile ${vizNav}`}>
        <button className={`button ${btnStyles}`}>
          <span className="icon">
            <FontAwesomeIcon icon={faBackward}/>
          </span>
          <span><strong>Previous</strong></span>
        </button>
        <button className={`button ${btnStyles}`}>
          <span><strong>Next</strong></span>
          <span className="icon">
            <FontAwesomeIcon icon={faForward}/>
          </span>
        </button>
      </div>
    </>
  )
}
