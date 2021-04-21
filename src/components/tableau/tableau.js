import React, { useEffect } from "react"
import "./tableau.css"

export default function TableauApi(props) {

  useEffect(() => {
    // Wait until the component mounts or updates to run initViz()
    initViz();
  });

  const initViz = () => {
    const vizContainer = document.getElementById("vizContainer");

    // If a previous viz object exists, delete it.
    if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line
    const vizObj = new tableau.Viz(vizContainer, props.viz, props.options);
  };

  const styleObj = {
    height: props.options.height,
    width: "100%"
  }

  return (
    <div id="vizContainer" className="container" />
  )
}
