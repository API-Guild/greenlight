import React, { useState } from "react"
import { breakpoints } from "../../utils/layoutUtils"
import Box from "../box/box"
import Viz from "../viz/viz"
import VizToolbar from "../vizToolbar/vizToolbar"

export default function Tableau(props) {
  // shared viz object updated by the <Viz/> component but required by functions in <VizToolbar/>
  const [vizObj, setVizObj] = useState(undefined);
  // lets components know if the viz has been loaded to obtain useful metadata and enable buttons
  const [loaded, setLoaded] = useState(false);
  // index used to navigate through an array of viz URLs
  const [vizIndex, setVizIndex] = useState(0);

  // allows for navigation functionality within arrays of URLs
  const handleVizIndex = (step) => {
    const vizLen = props.viz.length;
    // if vizIndex equals or exceeds the length of the array, loop back to the first value
    if (vizIndex + step >= vizLen) {
      setVizIndex(0);
    }
    // if vizIndex becomes negative, loop towards the last value in the array
    else if (vizIndex + step < 0) {
      setVizIndex(vizLen -1);
    }
    // + 1 or -1 to vizIndex based on click events from navigation buttons
    else {
      setVizIndex(vizIndex + step);
    }
  }

  // since default is to display the toolbar, an undefined prop should equal true
  // i.e. only explicitly setting it to false would exclude it
  const customToolbar = props.customToolbar === false ? false : true;

  // if props.viz is an array -> show navigation buttons, else if it's a string do not add navigation
  let vizArray = false;
  if (Array.isArray(props.viz)) {
    vizArray = true;
  } 

  // default height for placeholder and vizDiv
  const defaultHeight = {
    desktop: 800,
    tablet: 1000,
    phone: 1200,
  };

  return (
    <Box vizBox={true}>
      <Viz
        vizObj={vizObj}
        setVizObj={setVizObj}
        loaded={loaded}
        setLoaded={setLoaded}
        vizUrl={props.viz}
        vizArray={vizArray}
        vizIndex={vizIndex}
        height={props.height}
        width={props.width}
        defaultHeight={defaultHeight}
        hideTabs={props.hideTabs}
        hideToolbar={props.hideToolbar}
        device={props.device}
        fixedLayout={props.fixedLayout}
      />
      {!customToolbar ? null : (
        <VizToolbar 
          toolbarOptions={props.toolbarOptions} 
          vizObj={vizObj}
          loaded={loaded}
          vizUrl={props.viz} 
          vizArray={vizArray} 
          vizIndex={vizIndex}
          handleVizIndex={handleVizIndex}
        />
      )}
    </Box>
  )
}
