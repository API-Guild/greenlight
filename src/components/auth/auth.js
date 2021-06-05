import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function Auth() {
  return (
    <div className="buttons">
      <button className="button is-primary">
        <strong>
          <span className="icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={faUserPlus}/>
            </span>
            <span>Sign Up</span>
          </span>
        </strong>
      </button>
      <button className="button is-light">
        <span className="icon-text">
          <span className="icon">
            <FontAwesomeIcon icon={faSignInAlt}/>
          </span>
          <span>Log In</span>
        </span>
      </button>
    </div>
  )
}
