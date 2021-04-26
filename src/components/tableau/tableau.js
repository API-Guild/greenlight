import React, { useState, useEffect } from "react"
import "./tableau.css"

export default function Tableau(props) {

  const [loaded, setLoaded] = useState(false);
  const styleObj = {
    height: props.options.height,
    width: "100%"
  };

  useEffect(() => {
    loadTableau()
  },[]);

  useEffect(() => {
    if (!loaded) return
    // Wait until the component mounts or updates to run initViz()
    initViz()
  }, [loaded]);

  const loadTableau = () => {
    if (document.getElementById("tableauAPI")) return initViz()

    const tableauAPI = document.createElement('script');
    tableauAPI.id = "tableauAPI"
    tableauAPI.type = "text/javascript";
    tableauAPI.src = "https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js";
    tableauAPI.addEventListener('load', () => setLoaded(true))
    document.body.appendChild(tableauAPI)
  };

  const initViz = () => {
    const vizContainer = document.getElementById("vizContainer");

    // If a previous viz object exists, delete it.
    if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line
    const vizObj = new tableau.Viz(vizContainer, props.viz, props.options);
  };

  return (
    <div id="vizContainer" className="container" style={styleObj}/>
  )
}
