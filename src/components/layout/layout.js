import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Seo from "../seo/seo"
import Callout from "../callout/callout"
import Tableau from "../tableau/tableau"
import * as layoutStyles from "./layout.module.css"

const shortcodes = { Callout, Tableau };

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
