import React, { useState, useEffect, useContext } from "react"
import { modal, content, body, cardHead, cardFooter } from "./modal.module.scss"
import ModalContext from "../../context/ModalContext"
import Box from "../box/box"

export default function Modal(props) {
  // displays the modal
  const [active, setActive] = useState('');
  // stops scrolling while the modal is displayed, adds 'is-clipped' to <html> tag via SEO component
  const { handleClip } = useContext(ModalContext);
  // controls that multiple modals don't "unclip" the page if not displayed using 'context' (global) handleClip function
  const [clipFlag, setClipFlag] = useState(false);

  useEffect(() => {
    // adds the event listener to the entire page to handle 'esc' on modals
    document.addEventListener("keydown", handleEscKey);
    // remove the event listener to avoid memory leaks and bugs
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    }
  });

  useEffect(() => {
    // a parent component should decide when to display the Modal via 'display' and 'setDisplay' props
    if (props.display) {
      setActive('is-active');
      // comes from modal context to clip the entire document (stops scrolling)
      handleClip('is-clipped');
      setClipFlag(true);
    }
    else {
      setActive('');
      // only unclips <html> if local component has set flag to true
      if (clipFlag === true) {
        handleClip('');
        setClipFlag(false);
      }
    }
  }, [props.display, handleClip, clipFlag]);

  const handleEscKey = (event) => {
    if (event.keyCode === 27) {
      props.setDisplay();
    }
  };

  return (
    <>
      <div 
        className={`modal ${active} ${modal}`} 
      >
        <div 
          className="modal-background" 
          onClick={props.setDisplay} 
          onKeyDown={handleEscKey} 
          role="button"
          aria-label="close modal"
          tabIndex={0}
        />
        {/* determines if modal has card or normal layout */}
        {!props.card ? (
          <>
            <Box modalBox={true}>
              <div className={`modal-content ${content}`}>
                {props.children}
              </div>
              <button 
                className="modal-close is-large" 
                aria-label="close" 
                onClick={props.setDisplay}
              />
            </Box>
          </>
        ) : (
          <div className={`modal-card ${content}`}>
              <header className={`modal-card-head ${cardHead}`}>
                <p className="modal-card-title">{props.title}</p>
                <button 
                  className="delete" 
                  aria-label="close" 
                  onClick={props.setDisplay}
                />
              </header>
              <section className={`modal-card-body ${body}`}>
                {props.children}
              </section>
              <footer className={`modal-card-foot if-flex is-justify-content-center ${cardFooter}`}>
                {props.footer}
              </footer>
          </div>
        )}
      </div>
    </>
  )
}
