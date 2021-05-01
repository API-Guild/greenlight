import React, { useState, useEffect } from "react"
import "./tableau.css"

export default function Tableau(props) {

  const [loaded, setLoaded] = useState(false);
  const vizOptions = {
    width: props.options.width,
    height: props.options.height,
    onFirstVizSizeKnown: () => {
      onVizSize()
    },
    onFirstInteractive: () => {
    }
  };
  let vizObj;

  useEffect(() => {
    loadAPI()
  },[]);

  useEffect(() => {
    if (!loaded) return
    // Wait until the component mounts or updates to run initViz()
    console.log('options', props.options)
    initViz()
    console.log('viz', vizObj)
    vizEvents()
  }, [loaded]);

  const loadAPI = () => {
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
    vizObj = new tableau.Viz(vizContainer, props.viz, vizOptions);
  };

  const onVizSize = (VizResizeEvent) => {
    console.log('resize', vizObj.getVizSize())
  };

  const vizEvents = () => {
  };

  return (
    <div id="vizContainer"/>
  )
}
