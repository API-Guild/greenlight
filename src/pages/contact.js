import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import newIdea from "../assets/svg/undraw_new_ideas_jdea.svg"
import ContactForm from "../components/contactForm/contactForm"

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
            <ContactForm/>
          </div>
          <div className="column">
            <br/>
            <Cartoon svg={newIdea}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
