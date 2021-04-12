import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import stakeholder from "../assets/svg/undraw_design_data_khdb.svg"

export default function About() {
  return (
    <Layout>
      <Hero/>
      <Cartoon svg={stakeholder}/>
    </Layout>
  )
}
