import React from 'react'
import LayoutProvider from "./src/components/LayoutProvider/LayoutProvider"

// wrapped with a LayoutProvider providing screen size updates from resize events
export const wrapRootElement = ({ element }) => {
  return (
    <LayoutProvider>
      {element}
    </LayoutProvider>
  )
}
