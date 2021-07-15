import React, { useState, useEffect } from "react"
import LayoutContext from "../../context/LayoutContext"

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

// server side rendering requires that this function not be called if the window API
// is inaccessible during builds: https://www.gatsbyjs.com/docs/debugging-html-builds/
const getWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }
  else {
    return null;
  }
}

// returns screen widths, layouts and devices based on breakpoints with a timeout 
// to reduce responses until the resizing event has stabilized on a value
const windowSizer = () => {
  let width;
  let resizeTimeout;
  // prevent execution of any previous timeout
  clearTimeout(resizeTimeout)

  // runs if the window API is available (on clients) not during builds (SSR)
  if (typeof window !== 'undefined') {
    resizeTimeout = setTimeout(width = getWidth(), 300);
  }

  // breakpoints as defined by Tableau desktop's device layout designer 
  // & chrome's devtools, null values indicate window width
  const breakpoints = [
    {layout: 'mobile-s', device: 'phone', min: 0, max: 424},
    {layout: 'mobile-m', device: 'phone', min: 425, max: 767},
    {layout: 'mobile-l', device: 'phone', min: 768, max: 1023},
    {layout: 'tablet', device: 'tablet', min: 1024, max: 1279},
    {layout: 'desktop-s', device: 'tablet', min: 1280, max: 1365},
    {layout: 'desktop-m', device: 'desktop', min: 1366, max: 1919},
    {layout: 'desktop-l', device: 'desktop', min: 1920, max: 2279},
    {layout: 'widescreen', device: 'desktop', min: 2280, max: 2560},
    {layout: 'fullhd', device: 'desktop', min: 2561, max: null},
  ];

  let layout;
  let device;

  // determine the layout that fits within breakpoint min & max values
  for (let i = 0; i < breakpoints.length; i++) {
    if (width >= breakpoints[i].min && (!breakpoints[i].max || width <= breakpoints[i].max)) {
      device = breakpoints[i].device;
      layout = breakpoints[i].layout;
      break;
    }
    // should only occur when the window API is not available (in node during builds)
    else if (width === undefined) {
      device = 'default';
      layout = 'unknown';
    }
  }

  return ({
    width: width,
    device: device,
    layout: layout,
  });
}
