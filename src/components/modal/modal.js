import React, { useState, useEffect } from "react"

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
        <div className="modal-background"/>
        {!props.card ? (
          <>
            <div className="modal-content">
              {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={props.setDisplay}/>
          </>
        ) : (
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{props.title}</p>
              <button className="delete" aria-label="close" onClick={props.setDisplay}/>
            </header>
            <section className="modal-card-body">
              {props.children}
            </section>
            <footer className="modal-card-foot">
              {props.footer}
            </footer>
          </div>
        )}
      </div>
    </>
  )
}
