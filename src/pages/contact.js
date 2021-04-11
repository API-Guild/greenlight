import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"

export default function Contact() {
  return (
    <Layout>
      <Hero/>
      <section>
        <div className="container">
          <h1>If you have any questions or suggestions regarding this data portal, contact us via the following email:</h1>
          <p>
            <a href="mailto:me@example.com">me@example.com</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
