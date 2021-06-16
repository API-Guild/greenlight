import React from "react"
import * as set from "../../toolBarConfig/toolBarConfig"

export default function Download(props) {

  // array of supported downloads, all of them are displayed by default
  const downloadArray = [
    {name: "PDF"},
    {name: "Image"},
    {name: "Data"},
    {name: "CrossTab"},
    {name: "PowerPoint"},
    {name: "Workbook"},
  ];

  // determines what downloads get listed, default is all 
  // unless an allowlist (array) is passed as a prop
  const renderDownloads = set.downloadList(props.downloads, downloadArray);
  
  return (
    <>
      {renderDownloads.map((option, index) => (
        <option 
          value={option.name} 
          key={option.name + "-" + index + '-' + Math.random().toString(36).substr(2, 10)}
        >
          {option.name}
        </option>
      ))}
    </>
  )
}
