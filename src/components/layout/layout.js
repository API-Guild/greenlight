import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"


export default function Layout({ children }) {
  return (
    <div className="site">
      <Navbar/>
      <main className="main">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
