import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import * as set from "../../toolBarConfig/toolBarConfig"
import { select, field } from "./download.module.css"

export default function Download(props) {
  const [downloadSelect, setDownload] = useState('Download');
  // these variables standardize styles for buttons and select controls based on user input
  const btnStyles = `${props.color} ${props.outline}`;
  const selectBg = set.selectBgSet(props.options.color, props.options.outline);
  const selectTxt = set.selectTextSet(props.options.color, props.options.outline);
  const selectStyles = `download ${props.color} ${selectBg} ${selectTxt} ${select}`;
  const selectDivStyles = set.selectArrowSet(props.options.color, props.options.outline);

  // sets state based on the selected download option
  const handledownloadSelect = (event) => {
    setDownload(event.target.value);
  }

  // array of supported downloads, all of them are displayed by default
  const downloadArray = [
    {name: "PDF", function: () => {console.log("PDF!")}},
    {name: "Image", function: () => {console.log("image!")}},
    {name: "Data", function: () => {console.log("data!")}},
    {name: "CrossTab", function: () => {console.log("crosstab!")}},
    {name: "PowerPoint", function: () => {console.log("powerpoint!")}},
    {name: "Workbook", function: () => {console.log("workbook!")}},
  ];

  // determines what downloads get listed, default is all 
  // unless an allowlist (array) is passed as a prop
  const renderDownloads = set.downloadList(props.downloads, downloadArray);
  
  return (
    <>
      {!props.downloadFlag ? null : (
        <div className={`field has-addons has-addons-left ${field}`}>
          {/* mobile layout */}
          <div className="control">
            <div className={`select is-small is-hidden-tablet ${selectDivStyles}`}>
              {/* eslint-disable-next-line */} 
              <select className={selectStyles} value={downloadSelect} onChange={handledownloadSelect}>
                <option disabled hidden>Download</option>
                {renderDownloads.map((option, index) => (
                  <option 
                    value={option.name} 
                    key={option.name + "-" + index + '-' + Math.random().toString(36).substr(2, 10)}
                  >
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
            <div className={`select is-hidden-mobile ${selectDivStyles}`}> 
              {/* eslint-disable-next-line */}
              <select className={selectStyles} value={downloadSelect} onChange={handledownloadSelect}>
                <option disabled hidden>Download</option>
                {renderDownloads.map((option, index) => (
                  <option 
                    value={option.name} 
                    key={option.name + "-" + index + '-' + Math.random().toString(36).substr(2, 10)}
                  >
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
      )}
    </>
  )
}
