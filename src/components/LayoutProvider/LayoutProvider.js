import React, { useState, useEffect } from "react"
import LayoutContext from "../../context/LayoutContext"
import { getWidth, windowSizer } from "../../utils/layoutUtils"

export default function LayoutProvider(props) {
  const [width, setWidth] = useState(undefined);
  const [layout, setLayout] = useState(undefined);
  const [device, setDevice] = useState(undefined);

  useEffect(() => {
    // update values on first load
    setWidth(getWidth());
    setLayout(windowSizer().layout);
    setDevice(windowSizer().device);

    // get values after a delay built into windowSizer()
    const updateContext = () => {
      setWidth(windowSizer().width);
      setLayout(windowSizer().layout);
      setDevice(windowSizer().device);
    }
      
    // listen for resize events and pass that information down to components
    window.addEventListener('resize', () => {
      updateContext();
    });

    return () => {
      window.removeEventListener('resize', () => {
        updateContext();
      });
    };

  },[])

  return (
    <LayoutContext.Provider value={{ width, layout, device }}>
      {props.children}
    </LayoutContext.Provider>
  )
}
