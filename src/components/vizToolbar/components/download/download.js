import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"
import { select, field } from "./download.module.css"

export default function Download(props) {
  const [downloadSelect, setDownload] = useState('Download');
  const renderDownloads = set.downloadList(props.downloads);
  const btnStyles = `${props.color} ${props.outline}`;
  const selectStyles = `download ${props.color} ${props.selectStyle} ${select}`; 

  const handledownloadSelect = (event) => {
    setDownload(event.target.value);
  }
  
  return (
    <div className={`field has-addons has-addons-left ${field}`}>
      {/* mobile layout */}
      <div className="control">
        <div className={`select is-small is-hidden-tablet ${props.selectDivStyles}`}>
          {/* eslint-disable-next-line */} 
          <select className={selectStyles} value={downloadSelect} onChange={handledownloadSelect}>
            <option disabled hidden>Download</option>
            {renderDownloads.map((option, index) => (
              <option value={option.name} key={option.name + "-" + index}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="control is-hidden-tablet">
        <button 
          type="submit" 
          className={`button ${btnStyles}`}
          onClick={() => {console.log(`download: ${downloadSelect}!`)}}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
          </span>
        </button>
      </div>

      {/* desktop layout */}
      <div className="control">
        <div className={`select is-hidden-mobile ${props.selectDivStyles}`}> 
          {/* eslint-disable-next-line */}
          <select className={selectStyles} value={downloadSelect} onChange={handledownloadSelect}>
            <option disabled hidden>Download</option>
            {renderDownloads.map((option, index) => (
              <option value={option.name} key={option.name + "-" + index}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="control is-hidden-mobile">
        <button 
          type="submit" 
          className={`button ${btnStyles}`}
          onClick={() => {console.log(`download: ${downloadSelect}!`)}}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/>
          </span>
        </button>
      </div>
    </div>
  )
}
