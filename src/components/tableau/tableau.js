import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"


export default function TableauApi(props) {

  const pathSegment = "/javascripts/api/";
  const fullPath = props.server + pathSegment + props.version;

  useEffect(() => {
    const initViz = () => {
      const vizContainer = document.getElementById("vizContainer");
  
      // If a previous viz object exists, delete it.
      // if (vizObj) { vizObj.dispose() }
  
      // Create a viz object and embed it in the container div.
      // const vizObj = new tableau.Viz(vizContainer, props.viz, props.options);
    };

    // Wait until the component mounts or updates to run initViz()
    setTimeout(initViz(), 1000)
    console.log('document loaded!', document)
    console.log(fullPath)
    console.log('vizContainer loaded!')
  });

  return (
    <>
      <Helmet>
        {props.server && props.version ? (
          <script type="text/javascript" src={fullPath} />
        ) : (null)}
      </Helmet>
      <div id="vizContainer" />
    </>
  )
}
