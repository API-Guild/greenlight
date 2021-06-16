import React, {useState, useEffect} from "react"
import * as vizTbStyles from "./vizToolbar.module.css"
import * as set from "./toolBarConfig/toolBarConfig"
import VizNav from "./components/vizNav/vizNav"
import Download from "./components/download/download"
import Button from "./components/button/button"

export default function VizToolbar(props) {
  const [options, setOptions] = useState({
    buttons: undefined,
    color: undefined,
    outline: undefined,
    rounded: undefined,
    downloads: undefined,
  });
  const [buttonFlag, setButtonFlag] = useState(true);
  const [downloadFlag, setDownloadFlag] = useState(true);
  const renderButtons = set.buttonList(options.buttons);
  const color = set.colorSet(options.color);
  const outline = set.outlineSet(options.outline);
  const rounded = set.roundedSet(options.rounded);
  const selectStyle = `${set.selectBgSet(options.color, options.outline)} ${set.selectTextSet(options.color, options.outline)}`;
  const selectDivStyles = set.selectArrowSet(options.color, options.outline);

  console.log('options before', options)

  useEffect(() => {
    // check if toolbarOptions prop has been passed
    if (props.toolbarOptions) {
      setOptions({...props.toolbarOptions})
      console.log('options later', options)
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
  },[])

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
        {!buttonFlag ? null : (
          renderButtons.map((button, index) => (
            <Button
              key={button.name + '-' + index}
              name={button.name}
              icon={button.icon}
              onClick={button.function}
              color={color}
              outline={outline}
              rounded={rounded}
            />
          ))
        )}
        {!downloadFlag ? null : (
          <Download
            downloads={options.downloads}
            color={color}
            outline={outline}
            rounded={rounded}
            selectStyle={selectStyle}
            selectDivStyles={selectDivStyles}
          />
        )}
      </div>
      {/* desktop layout */}
      <div className="buttons is-centered is-hidden-mobile">
        {!buttonFlag ? null : (
          renderButtons.map((button, index) => (
            <Button
              key={button.name + '-' + index}
              name={button.name}
              icon={button.icon}
              onClick={button.function}
              color={color}
              outline={outline}
              rounded={rounded}
            />
          ))
        )}
        {!downloadFlag ? null : (
          <Download
            downloads={options.downloads}
            color={color}
            outline={outline}
            rounded={rounded}
            selectStyle={selectStyle}
            selectDivStyles={selectDivStyles}
          />
        )}
      </div>
    </div>
  )
}
