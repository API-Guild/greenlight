import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import Callout from "../components/callout/callout"
import { ReactComponent as VizBuilders } from "../assets/svg/vizBuilders.svg"


export default function Home() {

  return (
    <Layout>
      <Hero title="Greenlight" subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} />
      <Cartoon>
        <VizBuilders/>
      </Cartoon>
      <section className="section">
        <Callout
          type={"primary"}
          title={"Callout"}
          subtitle={
            <div>
              A simple container to make <strong>callouts</strong>, using styles
              as defined for the component.
            </div>
          }
        />
      </section>
    </Layout>
  )
}
