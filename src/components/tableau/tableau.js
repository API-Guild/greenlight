import React, { useEffect } from "react"
import Helmet from "react-helmet"
import "./tableau.css"
import "./tableauApi/tableau-2.7.0.min.js"

export default function Tableau(props) {
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
    // loadAPI()
    initViz()
  });

  const initViz = () => {
    let vizObj;
    const vizContainer = document.getElementById(vizID);
    
    // If a previous viz object exists, delete it.
    if (vizObj) { vizObj.dispose() }

    // Create a viz object and embed it in the container div.
    // eslint-disable-next-line
    vizObj = new tableau.Viz(vizContainer, props.viz, vizOptions);
  };

  return (
    <>
      <Helmet>
        <link as="script" rel="preload" href="https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js" />
      </Helmet>
      <div id={vizID} className="vizDiv"/>
    </>
  )
}
