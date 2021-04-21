import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import analytics from "../assets/svg/undraw_predictive_analytics_kf9n.svg"

export default function Reports() {
  return (
    <Layout>
      <Hero title="Greenlight" subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} />
      <Cartoon svg={analytics}/>
    </Layout>
  )
}
