import React, { useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import * as layoutStyles from "./layout.module.css"
import ModalContext from "../../context/ModalContext"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Seo from "../seo/seo"
import Tableau from "../tableau/tableau"
import Callout from "../callout/callout"
import Card from "../card/card"
import Title from "../title/title"
import VizToolbar from "../vizToolbar/vizToolbar"
import Ext from "../Ext/Ext"

const shortcodes = { Tableau, Callout, Card, Title, VizToolbar, Ext };

export default function Layout({ children }) {
  // when modals are displayed, 'clip' adds a class to <html> to stop scrolling within <SEO/> component
  const [clip, setClip] = useState('');

  // function is shared with modal components via context to control when <html> stops scrolling
  const handleClip = (newClass) => {
    setClip(newClass);
  }

  return (
    <>
      <ModalContext.Provider value={{ clip, handleClip }}>
        <Seo />
        <div className={`site container ${layoutStyles.site}`}>
          <Navbar />
          <main className={`main ${layoutStyles.main}`}>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </main>
          <Footer />
        </div>
      </ModalContext.Provider>
    </>
  )
}
