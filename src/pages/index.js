import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import Callout from "../components/callout/callout"
import vizBuilders from "../assets/svg/undraw_Data_re_80ws.svg"

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Cartoon svg={vizBuilders}/>
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
