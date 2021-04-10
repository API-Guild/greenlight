import React from "react"
import "../styles/global.scss"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            Greenlight
          </p>
          <p class="subtitle">
            A guerrilla <strong>data portal</strong> for people with deadlines.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="notification is-primary">
            <h1 class="title">Section</h1>
            <h2 class="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}
