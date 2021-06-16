import React, { useState } from "react"
import Box from "../box/box"
import Viz from "../viz/viz"
import VizToolbar from "../vizToolbar/vizToolbar"

export default function Tableau(props) {
  // shared viz object updated by the <Viz/> component but required by functions in <VizToolbar/>
  const [vizObj, setVizObj] = useState(null);
  // since default is to display the toolbar, an undefined prop should equal true
  // i.e. only explicitly setting it to false would exclude it
  const customToolbar = props.customToolbar === false ? false : true;

  return (
    <Box vizBox={true}>
      <Viz
        vizObj={vizObj}
        setVizObj={setVizObj}
        vizUrl={props.viz}
        height={props.height}
        width={props.width}
        hideTabs={props.hideTabs}
        hideToolbar={props.hideToolbar}
        device={props.device}
        fixedLayout={props.fixedLayout}
      />
      {customToolbar ? <VizToolbar toolbarOptions={props.toolbarOptions} vizObj={vizObj}/> : null}
    </Box>
  )
}
