import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"


export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}
