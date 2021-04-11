import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import lightTheFire from "../assets/svg/undraw_light_the_fire_gt58.svg"

export default function Home() {
  return (
    <Layout>
      <br/>
      <Hero/>
      <Cartoon svg={lightTheFire}/>
      <section className="section">
        <div className="container">
          <div className="notification is-primary">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}
