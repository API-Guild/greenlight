import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import "./tableau.css"

export default function Tableau(props) {
  // used to delay initializing the Tableau viz until the external JS API file has been loaded
  const [loaded, setLoaded] = useState(false);
  let vizObj;
  const apiID = "tableauAPI-" + Math.random().toString(36).substr(2, 9);
  const vizOptions = {
    width: props.options.width,
    height: props.options.height,
    onFirstVizSizeKnown: () => {
      onVizSize()
    },
    onFirstInteractive: () => {
    }
  };
  
  // similar to the componentDidMount lifecycle method
  useEffect(() => {
    loadAPI()
  },[]);

  // initilazes the Tableau viz once the external JS API file has loaded
  useEffect(() => {
    if (!loaded) return
    initViz()
    console.log('viz', vizObj)
    // adds standard event listeners
    vizEvents()
  }, [loaded]);

  const loadAPI = () => {
    if (document.getElementById(apiID)) return initViz()

    const tableauAPI = document.createElement('script');
    tableauAPI.id = apiID;
    tableauAPI.type = "text/javascript";
    tableauAPI.src = "https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js";
    tableauAPI.defer = true;
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
    <>
      <Helmet>
        <link as="script" rel="preload" href="https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js" />
      </Helmet>
      <div id="vizContainer"/>
    </>
  )
}
