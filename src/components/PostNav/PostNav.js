import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import LayoutContext from '../../context/LayoutContext'
import { postNav, navBar } from './postNav.module.scss'

export default function PostNav(props) {
  const titleClass = "is-size-3 is-size-4-mobile";
  const subtitleClass = "is-size-5 is-size-6-mobile";

  const { width } = useContext(LayoutContext);

  console.log('context width:', width)

  return (
    <div className={`columns is-variable is-8 is-mobile ${navBar}`}>
      {props.previous && props.toPrev ? (
        <div className='column'>
          <a className={`button is-primary is-outlined is-large ${postNav}`} style={{textAlign: "left"}}>
            <p>
              <FontAwesomeIcon icon={faDirections} flip="both"/>
              <strong className={titleClass}> Previous</strong>
            </p>
            <p className={subtitleClass}><em>{props.previous}</em></p>
          </a>
        </div>
      ) : null}
      {props.next && props.toNext ? (
        <div className='column'>
          <a className={`button is-primary is-outlined is-large ${postNav}`} style={{marginLeft: "auto", textAlign: "right"}}>
            <p>
              <strong className={titleClass}>Next </strong>
              <FontAwesomeIcon icon={faDirections}/>
            </p>
            <p className={subtitleClass}><em>{props.next}</em></p>
          </a>
        </div>
      ) : null}
    </div>
  )
}
