import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Seo from "../seo/seo"
import Callout from "../callout/callout"
import Tableau from "../tableau/tableau"

const shortcodes = { Callout, Tableau };
const tableauApi = "https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Helmet>
        <script type="text/javascript" src={tableauApi} />
      </Helmet>
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
