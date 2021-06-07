import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Seo from "../seo/seo"
import Tableau from "../tableau/tableau"
import Callout from "../callout/callout"
import Card from "../card/card"
import Title from "../title/title"
import * as layoutStyles from "./layout.module.css"

const shortcodes = { Tableau, Callout, Card, Title };

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <div className={`site container ${layoutStyles.site}`}>
        <Navbar />
        <main className={`main ${layoutStyles.main}`}>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </main>
        <Footer />
      </div>
    </>
  )
}
