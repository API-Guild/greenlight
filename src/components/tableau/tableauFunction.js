import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import "./tableau.css"
const apiTableau = typeof window !== 'undefined' ? require("./tableauApi/tableau-2.7.0.min.js") : null;

export default function Tableau(props) {
  const [loaded, setLoaded] = useState(false);
  let vizObj;
  const vizID = "vizID-" + Math.random().toString(36).substr(2, 10);
  const vizOptions = {
    width: props.options.width,
    height: props.options.height,
    onFirstVizSizeKnown: () => {
    },
    onFirstInteractive: () => {
    }
  };
  
  // similar in usage to the componentDidMount lifecycle method
  useEffect(() => {
    initViz()
  }, [])

  // useEffect(() => {
  //   if (!loaded) return
  //   initViz()
  // }, [loaded]);

  const loader = () => {
    setLoaded(true)
  };

  const initViz = () => {
    const vizContainer = document.getElementById(vizID);

    // If a previous viz object exists, delete it.
    if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line
    vizObj = new tableau.Viz(vizContainer, props.viz, vizOptions);
  };

  return (
    <>
      <div id={vizID} className="vizDiv" onLoad={() => loader}/>
    </>
  )
}
