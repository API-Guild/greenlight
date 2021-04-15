import React from "react"
import Helmet from "react-helmet"


export default function TableauApi(props) {

  const pathSegment = "/javascripts/api/";
  const fullPath = props.server + pathSegment + props.version;
  const vizUrl = props.viz;
  const vizOptions = props.options;

  const initViz = () => {
    const vizContainer = document.getElementById("vizContainer");

    // If a previous viz object exists, delete it.
    // if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // const vizObj = new tableau.Viz(vizContainer, vizUrl, vizOptions);
  };

  // Only run the embed script once the page body has loaded
  document.body.onLoad = () => {
    initViz()
    console.log('body loaded!')
    console.log(fullPath);
  };

  return (
    <>
      <Helmet>
        <script type="text/javascript" src={fullPath} />
      </Helmet>
      <div id="vizContainer" />
    </>
  )
}
