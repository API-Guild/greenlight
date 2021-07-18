import React, { useContext } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import LayoutContext from '../../../../context/LayoutContext'
import { navBtn, vizNav } from "./vizNav.module.css"

export default function VizNav(props) {
  const { width } = useContext(LayoutContext);

  const btnStyles = `${props.color} ${props.outline} ${props.rounded} ${navBtn}`;
  const indexBtn = `${props.color} ${props.outline} ${props.rounded}`;
  const vizzes = props.viz.length;

  // props.handleVizIndex() is defined in the <Tableau/> component
  // it allows for navigation within an array of URLs
  const Next = () => {
    props.handleVizIndex(1);
  }

  const Prev = () => {
    props.handleVizIndex(-1);
  }

  const buttonsDivClass = classNames({
    'buttons is-centered': true,
    'are-small': width < 540,
    [`${vizNav}`]: true,
  });

  return (
    <div className={buttonsDivClass}>
      <button className={`button ${btnStyles}`} onClick={Prev}>
        <span className="icon">
          <FontAwesomeIcon icon={faBackward}/>
        </span>
        <span><strong>Previous</strong></span>
      </button>

      <button className={`button ${indexBtn}`}>{props.vizIndex + 1}/{vizzes}</button>

      <button className={`button ${btnStyles}`} onClick={Next}>
        <span><strong>Next</strong></span>
        <span className="icon">
          <FontAwesomeIcon icon={faForward}/>
        </span>
      </button>
    </div>
  )
}
