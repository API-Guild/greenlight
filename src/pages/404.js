import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as Startled404 } from "../assets/svg/startled404.svg"

// used for when a page is not found or unavailable
export default function FourOFour() {
  return (
    <Layout>
      <Hero 
        title="404 - Woops!" 
        subtitle={<span>This is <strong>probably not</strong> what you are looking for...</span>} 
      />
      <Cartoon>
        <Startled404 />
      </Cartoon>
    </Layout>
  )
}
