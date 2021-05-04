import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import newIdea from "../assets/svg/undraw_new_ideas_jdea.svg"

export default function Contact() {
  return (
    <Layout>
      <Hero 
        title="Contact" 
        subtitle={
          <span>
            Ask <strong>questions</strong>, make <strong>requests</strong> or share <strong>feedback</strong> with us
          </span>
        } 
      />
      <div className="container">
        <div className="columns">
          <div className="column">
            <Cartoon svg={newIdea}/>
          </div>
          <div className="column">
          </div>
        </div>
      </div>
      <section className="section">
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
