import React, { useState, useEffect } from "react"
import { cardHead, cardFooter } from "./modal.module.scss"

export default function Modal(props) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if(props.display) {
      setActive('is-active');
    }
    else {
      setActive('');
    }
  }, [props.display])

  return (
    <>
      <div className={`modal ${active}`}>
        <div 
          className="modal-background" 
          onClick={props.setDisplay} 
          onKeyDown={props.setDisplay} 
          role="button"
          aria-label="close modal"
          tabIndex={0}
        />
        {/* determines if modal has card or normal layout */}
        {!props.card ? (
          <>
            <div className="modal-content">
              {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={props.setDisplay}/>
          </>
        ) : (
          <div className="modal-card">
            <header className={`modal-card-head ${cardHead}`}>
              <p className="modal-card-title">{props.title}</p>
              <button className="delete" aria-label="close" onClick={props.setDisplay}/>
            </header>
            <section className="modal-card-body">
              {props.children}
            </section>
            <footer className={`modal-card-foot ${cardFooter}`}>
              {props.footer}
            </footer>
          </div>
        )}
      </div>
    </>
  )
}
