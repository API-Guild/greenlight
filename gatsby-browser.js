import React, { useState, useEffect } from "react"
import "./src/assets/styles/global.scss"
import LayoutContext from "./src/context/LayoutContext"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload()
  }
}

export const LayoutProvider = (props) => {
  const [width, setWidth] = useState(undefined);
  const [layout, setLayout] = useState(undefined);

  useEffect(() => {
    setWidth(getWidth());

    window.addEventListener('resize', () => {
      setWidth(getWidth());
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(getWidth());
      });
    };
  },[])

  const getWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
    else {
      return null;
    }
  }


  return (
    <LayoutContext.Provider value={{ width, getWidth, layout }}>
      {props.children}
    </LayoutContext.Provider>
  )
}


export const wrapRootElement = ({ element }) => {

  return (
    <LayoutProvider>
      {element}
    </LayoutProvider>
  )
}
