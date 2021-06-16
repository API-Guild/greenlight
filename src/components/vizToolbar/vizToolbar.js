import React, {useState, useEffect} from "react"
import * as vizTbStyles from "./vizToolbar.module.css"
import * as set from "./toolBarConfig/toolBarConfig"
import VizNav from "./components/vizNav/vizNav"
import Download from "./components/download/download"
import Button from "./components/button/button"

export default function VizToolbar(props) {
  // by default a full <VizToolbar/> get's mounted unless props are explicitly set to false or empty arrays
  // therefore undefined is a baseline that adds a full toolbar regardless
  const [options, setOptions] = useState({
    buttons: undefined,
    color: undefined,
    outline: undefined,
    rounded: undefined,
    downloads: undefined,
  });

  // both of these flags determine if components get rendered, default behavior is true
  const [buttonFlag, setButtonFlag] = useState(true);
  const [downloadFlag, setDownloadFlag] = useState(true);

  // toolbar settings and styles, the set methods help standardize 
  // these options beyond what is supported by the Bulma framework
  const color = set.colorSet(options.color);
  const outline = set.outlineSet(options.outline);
  const rounded = set.roundedSet(options.rounded);
  // const selectStyle = `${set.selectBgSet(options.color, options.outline)} ${set.selectTextSet(options.color, options.outline)}`;
  // const selectDivStyles = set.selectArrowSet(options.color, options.outline);

  // if a toolbarOptions prop is available, update state and flags accordingly
  useEffect(() => {
    // check if toolbarOptions prop has been passed and update state
    if (props.toolbarOptions) {
      setOptions({...props.toolbarOptions})
      // decide if buttons should be rendered, default is true and renders all of them
      if (props.toolbarOptions.buttons) {
        if (Array.isArray(props.toolbarOptions.buttons) && props.toolbarOptions.buttons.length === 0) {
          setButtonFlag(false);
        }
      }
      // decide if downloads should be rendered, default is true and renders all options
      if (props.toolbarOptions.buttons) {
        if (Array.isArray(props.toolbarOptions.downloads) && props.toolbarOptions.downloads.length === 0) {
          setDownloadFlag(false);
        }
      }
    }
  },[props.toolbarOptions])

  return (
    <div className={vizTbStyles.toolbar}>
      <VizNav
        previous={{"name": "previous"}}
        next={{"name": "next"}}
        color={color}
        outline={outline}
        rounded={rounded}
      />
      {/* mobile layout */}
      <div className="buttons are-small is-centered is-hidden-tablet">
        <Button
          buttonFlag={buttonFlag}
          buttons={options.buttons}
          color={color}
          outline={outline}
          rounded={rounded}
          vizObj={props.vizObj}
        />
        <Download
          downloadFlag={downloadFlag}
          downloads={options.downloads}
          color={color}
          outline={outline}
          rounded={rounded}
          options={{
            color: options.color,
            outline: options.outline
          }}
          vizObj={props.vizObj}
        />
      </div>
      {/* desktop layout */}
      <div className="buttons is-centered is-hidden-mobile">
        <Button
          buttonFlag={buttonFlag}
          buttons={options.buttons}
          color={color}
          outline={outline}
          rounded={rounded}
          vizObj={props.vizObj}
        />
        <Download
          downloadFlag={downloadFlag}
          downloads={options.downloads}
          color={color}
          outline={outline}
          rounded={rounded}
          options={{
            color: options.color,
            outline: options.outline
          }}
          vizObj={props.vizObj}
        />
        {/* {!downloadFlag ? null : (
          <Download
            downloads={options.downloads}
            color={color}
            outline={outline}
            rounded={rounded}
            selectStyle={selectStyle}
            selectDivStyles={selectDivStyles}
            vizObj={props.vizObj}
          />
        )} */}
      </div>
    </div>
  )
}
