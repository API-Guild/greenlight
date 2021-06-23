import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPaperPlane, faBackspace } from '@fortawesome/free-solid-svg-icons'

export default function ContactForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Select');

  const handleSubject = (event) => {
    setSubject(event.target.value);
  }

  const clearFirstName = () => {
    setFirstName('');
  };

  const clearLastName = () => {
    setLastName('');
  };

  const clearEmail = () => {
    setEmail('');
  };

  const clearMessage = () => {
    setMessage('');
  };

  const clearAll = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container is-fluid">
      <div className="field">
        <label className="label has-text-primary" htmlFor="firstNameInput">First Name</label>
        <div className="control has-icons-left has-icons-right">
          <input 
            id="firstNameInput" className="input" type="text" placeholder="e.g. John" 
            onChange={(event) => {setFirstName(event.target.value)}}
            value={firstName}
          />
          <p className="help">required</p>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faUser}/>
          </span>
          <span 
            className="icon is-small is-right" role="button" tabIndex={0} 
            onClick={clearFirstName} onKeyDown={clearFirstName}
          >
            <button className="delete is-small" aria-label="clear field"/>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label has-text-primary" htmlFor="lastNameInput">Last Name</label>
        <div className="control has-icons-left has-icons-right">
          <input 
            id="lastNameInput" className="input" type="text" placeholder="e.g. Doe"
            onChange={(event) => {setLastName(event.target.value)}}
            value={lastName}
          />
          <p className="help">required</p>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faUser}/>
          </span>
          <span 
            className="icon is-small is-right" role="button" tabIndex={0}
            onClick={clearLastName} onKeyDown={clearLastName}
          >
            <button className="delete is-small" aria-label="clear field"/>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label has-text-primary" htmlFor="emailInput">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input 
            id="emailInput" className="input" type="email" placeholder="e.g. jd@email.io"
            onChange={(event) => {setEmail(event.target.value)}}
            value={email}
          />
          <p className="help">required</p>
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope}/>
          </span>
          <span 
            className="icon is-small is-right" role="button" tabIndex={0}
            onClick={clearEmail} onKeyDown={clearEmail}
          >
            <button className="delete is-small" aria-label="clear field"/>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label has-text-primary" htmlFor="subjectControl">Subject</label>
        <div id="subjectControl" className="control">
          <div className="select">
            {/* eslint-disable-next-line */}
            <select value={subject} onChange={handleSubject}>
              <option disabled hidden>Select</option>
              <option>Dashboard Request</option>
              <option>Datasource Access</option>
              <option>Question</option>
              <option>Correction</option>
              <option>Access Request</option>
              <option>Help Needed</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label has-text-primary" htmlFor="messageInput">Message</label>
        <div className="control has-icons-right">
          <textarea 
            id="messageInput" className="textarea" placeholder="How can we help you?"
            onChange={(event) => {setMessage(event.target.value)}}
            value={message}
          />
          <span 
            className="icon is-small is-right" role="button" tabIndex={0}
            onClick={clearMessage} onKeyDown={clearMessage}
          >
            <button className="delete is-small" aria-label="clear field"/>
          </span>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-primary" tabIndex={0}>
            <span className="icon">
              <FontAwesomeIcon icon={faPaperPlane}/>
            </span>
            <span>Submit</span>
          </button>
        </div>
        <div className="control">
          <button className="button is-light" tabIndex={0} onClick={clearAll} onKeyDown={clearAll}>
            <span className="icon">
              <FontAwesomeIcon icon={faBackspace}/>
            </span>
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  )
}
