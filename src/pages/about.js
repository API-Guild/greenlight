import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import stakeholder from "../assets/svg/undraw_design_data_khdb.svg"

export default function About() {
  return (
    <Layout>
      <Hero title="Greenlight" subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} />
      <Cartoon svg={stakeholder}/>
    </Layout>
  )
}
