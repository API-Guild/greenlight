import React, { useContext } from 'react'
import { Link } from "gatsby"
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'
import LayoutContext from '../../context/LayoutContext'
import { postNav, navBar, singleBtn } from './PostNav.module.scss'

export default function PostNav(props) {
  const { width } = useContext(LayoutContext);

  // get's called a double if it has 2 titles and 2 links
  const double = props.previous && props.next && props.toPrev && props.toNext;

  const navBarClass = classNames({
    'columns': true,
    'is-variable': true,
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

  const columnClass = classNames({
    'column': true,
    'is-one-third': double && width > 768,
    'is-half': double && width < 768,
  });

  const btnClass = classNames({
    'button is-primary is-outlined is-large': true,
    [`${postNav}`]: true,
    [`${singleBtn}`]: !double,
  });

  return (
    <div className={`${navBarClass} ${navBar}`}>
      {props.previous && props.toPrev ? (
        <div className={columnClass}>
          <Link to={props.toPrev}>
            <span 
              className={btnClass} 
              style={{textAlign: "left"}}
            >
              <p>
                <FontAwesomeIcon icon={faDirections} flip="both"/>
                <strong className={titleClass}> Previous</strong>
              </p>
              <p className={subtitleClass}><em>{props.previous}</em></p>
            </span>
          </Link>
        </div>
      ) : null}
      {props.next && props.toNext ? (
        <div className={columnClass} style={{marginLeft: "auto"}}>
          <Link to={props.toNext}>
            <span 
              className={btnClass} 
              style={{marginLeft: "auto", textAlign: "right"}}
            >
              <p>
                <strong className={titleClass}>Next </strong>
                <FontAwesomeIcon icon={faDirections}/>
              </p>
              <p className={subtitleClass}><em>{props.next}</em></p>
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  )
}
