import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import { postNav, navBar } from './postNav.module.scss'

export default function PostNav(props) {
  const titleClass = "is-size-3 is-size-4-mobile";
  const subtitleClass = "is-size-5 is-size-6-mobile";

  return (
    <div className={`buttons ${navBar}`}>
      {props.previous && props.toPrev ? (
        <a className={`button is-primary is-outlined is-large ${postNav}`}>
          <p>
            <FontAwesomeIcon icon={faDirections} flip="both"/>
            <strong className={titleClass}> Previous</strong>
          </p>
          <p className={subtitleClass}><em>{props.previous}</em></p>
        </a>
      ) : null}
      {props.next && props.toNext ? (
        <a className={`button is-primary is-outlined is-large ${postNav}`} style={{marginLeft: "auto"}}>
          <p>
            <strong className={titleClass}>Next </strong>
            <FontAwesomeIcon icon={faDirections}/>
          </p>
          <p className={subtitleClass}><em>{props.next}</em></p>
        </a>
      ) : null}
    </div>
  )
}
