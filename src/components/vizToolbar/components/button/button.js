import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"
import Detail from "../detail/detail"

export default function Button(props) {
  // controls display of embedded content details
  const [detailModal, setDetailModal] = useState(false);
  // toggles display of modal
  const handleModal = () => {
    setDetailModal(!detailModal);
  }
  
  // array of supported buttons, all of them are displayed by default
  const buttonsArray = [
    {
      name: "Undo", 
      icon: faUndoAlt, 
      function: () => {
        if (props.vizObj) {
          try {props.vizObj.undoAsync();} 
          catch(err) {console.error('Tableau error:', err);}
        }
      }
    },
    {
      name: "Redo", 
      icon: faRedoAlt, 
      function: () => {
        if (props.vizObj) {
          try {props.vizObj.redoAsync();} 
          catch(err) {console.error('Tableau error:', err);}
        } 
      }
    },
    {
      name: "Reset", 
      icon: faHistory, 
      function: () => {
        if (props.vizObj) {
          try {props.vizObj.revertAllAsync();} 
          catch(err) { console.error('Tableau error:', err); }
        }
      }
    },
    {
      name: "Refresh", 
      icon: faSyncAlt, 
      function: () => {
        if (props.vizObj) {
          try{props.vizObj.refreshDataAsync();} 
          catch(err){console.error('Tableau error:', err);}
        }
      }
    },
    {
      name: "Details", 
      icon: faInfoCircle, 
      function: () => {handleModal();}
    },
    {
      name: "Share", 
      icon: faShareAlt, 
      function: () => {
        if (props.vizObj) {
          try{props.vizObj.showShareDialog();} 
          catch(err){console.error('Tableau error:', err);}
        }
      }
    },  
  ];
  // determines what buttons get rendered, default is all 
  // unless an allowlist (array) is passed as a prop
  const renderButtons = set.buttonList(props.buttons, buttonsArray);

  const btnStyles = `${props.color} ${props.outline} ${props.rounded}`;

  return (
    <>
      {!props.buttonFlag ? null : (
        renderButtons.map((button, index) => (
          <button
            key={button.name + '-' + index + '-' + Math.random().toString(36).substr(2, 10)} 
            className={`button ${btnStyles}`}
            onClick={button.function}
            disabled={props.disabled}
          >
            <span className="icon">
              <FontAwesomeIcon icon={button.icon}/>
            </span>
            <span>{button.name}</span>
          </button>
        ))
      )}
      <Detail
        detailModal={detailModal}
        handleModal={handleModal}
        vizObj={props.vizObj}
        loaded={props.loaded}
        disabled={props.disabled}
        vizArray={props.vizArray}
        color={props.color}
        outline={props.outline}
        rounded={props.rounded}
        handleVizIndex={props.handleVizIndex}
        vizUrl={props.vizUrl} 
        vizIndex={props.vizIndex}
      />
    </>
  )
}
