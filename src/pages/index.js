import React from "react"
import "./global.scss"
import Layout from "../components/layout/layout"

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <p className="title">
            Greenlight
          </p>
          <p className="subtitle">
            A guerrilla <strong>data portal</strong> for people with deadlines.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="notification is-primary">
            <h1 className="title">Section</h1>
            <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}
