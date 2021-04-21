import React, { useEffect } from "react"
import Helmet from "react-helmet"


export default function TableauApi(props) {

  const pathSegment = "/javascripts/api/";
  const fullPath = props.server + pathSegment + props.version;

  useEffect(() => {
    // Wait until the component mounts or updates to run initViz()
    initViz();
  });

  const initViz = () => {
    const vizContainer = document.getElementById("vizContainer");

    // If a previous viz object exists, delete it.
    // if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line
    // const vizObj = new tableau.Viz(vizContainer, props.viz, props.options);
  };

  const styleObj = {
    height: props.height,
    width: props.width
  }

  return (
    <>
      <Helmet>
        {props.server && props.version ? (
          <script type="text/javascript" src={fullPath} />
        ) : (console.error('Error: tableau server and version not found!'))}
      </Helmet>
      <div id="vizContainer" style={styleObj} />
    </>
  )
}
