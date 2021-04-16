import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import analytics from "../assets/svg/undraw_predictive_analytics_kf9n.svg"
import Tableau from "../components/tableau/tableau"

export default function Reports() {
  return (
    <Layout>
      <Hero title="Greenlight" subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} />
      <Cartoon svg={analytics}/>
      <br/>
      <br/>
      <div className="container is-fluid">
        <Tableau
          server="https://public.tableau.com"
          version="tableau-2.7.0.min.js"
          viz="https://public.tableau.com/views/FormStackExamples/SurveyResults"
          options={{
            hideTabs: true,
            hideToolbar: true
          }}
          width={700}
          height={1200}
        />
      </div>
    </Layout>
  )
}
