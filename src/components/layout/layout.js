import React from "react"
import "../../pages/global.scss"
import Header from "../header/header"


export default function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
