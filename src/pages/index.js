import React from "react"
import Layout from "../components/layout/layout"
import lightTheFire from "../assets/svg/undraw_light_the_fire_gt58.svg"

export default function Home() {
  return (
    <Layout>
      <br/>
      {/* Title */}
      <section className="section">
        <div className="container is-justify-content-flex-start">
          <p className="title has-text-primary">
            Greenlight
          </p>
          <p className="subtitle">
            A guerrilla <strong>data portal</strong> for analysts with deadlines.
          </p>
        </div>
      </section>

      <div className="container is-fluid">
        <figure className="image">
          <img className="cartoon-home" src={lightTheFire} alt="logo"/>
        </figure>
      </div>

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
