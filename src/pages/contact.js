import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as NewIdea } from "../assets/svg/newIdea.svg"
import ContactForm from "../components/contactForm/contactForm"

export default function Contact() {
  return (
    <Layout>
      <Hero 
        title="Contact" 
        titleColor="primary"
        titleSize={1} 
        subtitle={
          <span>
            Ask <strong>questions</strong>, make <strong>requests</strong> or share <strong>feedback</strong> with us
          </span>
        } 
        subtitleSize={4}
      />
      <div className="section">
        <div className="columns">
          <div className="column">
            <ContactForm/>
          </div>
          <div className="column is-two-fifths">
            <Cartoon>
              <NewIdea/>
            </Cartoon>
          </div>
        </div>
      </div>
    </Layout>
  )
}
