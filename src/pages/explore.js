import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentIndex from "../components/contentIndex/contentIndex"
import Cartoon from "../components/cartoon/cartoon"
import analytics from "../assets/svg/undraw_predictive_analytics_kf9n.svg"

export default function Reports() {
  return (
    <Layout>
      <Hero 
        title="Explore" 
        subtitle={
          <span>A list of <strong>articles</strong> and 
          <strong> dashboards</strong> available on this site</span>
        } 
      />
      <Cartoon svg={analytics}/>
      <ContentIndex
        title="Articles"
      />
    </Layout>
  )
}
