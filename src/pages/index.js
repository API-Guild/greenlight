import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import Callout from "../components/callout/callout"
import lightTheFire from "../assets/svg/undraw_light_the_fire_gt58.svg"

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Cartoon svg={lightTheFire}/>
      <section className="section">
        <Callout
          type={"primary"} 
          title={"Callout"} 
          subtitle={<div>A simple container to make <strong>callouts</strong>, 
          using styles as defined for the component.</div>}
        />
      </section>
    </Layout>
  )
}
