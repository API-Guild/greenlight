import React from "react"
import "./src/assets/styles/global.scss"
import LayoutProvider from "./src/components/LayoutProvider/LayoutProvider"

// caches static files for offline functionality
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload()
  }
}

// wrapped with a LayoutProvider providing screen size updates from resize events
export const wrapRootElement = ({ element }) => {
  return (
    <LayoutProvider>
      {element}
    </LayoutProvider>
  )
}
