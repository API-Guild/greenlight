import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Seo from "../seo/seo"


export default function Layout({ children }) {
  return (
    <>
      <Seo/>
      <div className="site">
        <Navbar/>
        <main className="main">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}
