import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Seo from "../seo/seo"
import Callout from "../callout/callout"
import { MDXProvider } from "@mdx-js/react"

const shortcodes = { Callout }

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <div className="site">
        <Navbar />
        <main className="main">
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </main>
        <Footer />
      </div>
    </>
  )
}
