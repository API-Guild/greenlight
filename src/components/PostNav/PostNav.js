import React, { useContext } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import LayoutContext from '../../context/LayoutContext'
import { postNav, navBar } from './postNav.module.scss'

export default function PostNav(props) {
  const { width } = useContext(LayoutContext);

  const navBarClass = classNames({
    'columns': true,
    'is-variable': true,
    'is-8': width > 425,
    'is-mobile': width > 455,
  });
  const titleClass = classNames({
    'is-size-3': true,
    'is-size-4-mobile': width <= 530,
  });
  const subtitleClass = classNames({
    'is-size-5': true,
    'is-size-6-mobile': width <= 530,
  });

  return (
    <div className={`${navBarClass} ${navBar}`}>
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
