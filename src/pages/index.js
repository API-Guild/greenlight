import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Card from "../components/card/card"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as VizBuilders } from "../assets/svg/vizBuilders.svg"


export default function Home() {

  return (
    <Layout>
      <Hero 
        title="Greenlight" 
        subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} 
      />
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <Card
                    header={'Sample Card Component'}
                    image={'https://bulma.io/images/placeholders/1280x960.png'}
                    content={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus nec iaculis mauris.
                            <a href="/"> @bulmaio</a><a href="/"> #css </a><a href="/">
                            #responsive</a></span>}
                    footer={[
                      <a href="/" className="card-footer-item">Save</a>, 
                      <a href="/" className="card-footer-item">Edit</a>, 
                      <a href="/" className="card-footer-item">Delete</a>,
                    ]}
                  />
                </article>
              </div>
              <div className="tile is-7 is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title has-text-primary">Two</p>
                      <p className="subtitle has-text-grey-light">Subtitle</p>
                      <Cartoon>
                        <VizBuilders/>
                      </Cartoon>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title has-text-primary">Three</p>
                      <p className="subtitle has-text-grey-light">Subtitle</p>
                      <Cartoon>
                        <VizBuilders/>
                      </Cartoon>
                    </article>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title has-text-primary">Four</p>
                      <p className="subtitle has-text-grey-light">Subtitle</p>
                      <Cartoon>
                        <VizBuilders/>
                      </Cartoon>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title has-text-primary">Five</p>
                      <p className="subtitle has-text-grey-light">Subtitle</p>
                      <Cartoon>
                        <VizBuilders/>
                      </Cartoon>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile">
              <div className="tile is-8 is-parent">
                <article className="tile is-child box">
                  <p className="title has-text-primary">Six</p>
                  <p className="subtitle has-text-grey-light">Subtitle</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    <Cartoon>
                      <VizBuilders/>
                    </Cartoon>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title has-text-primary">Seven</p>
                  <p className="subtitle has-text-grey-light">Subtitle</p>
                  <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    <Cartoon>
                      <VizBuilders/>
                    </Cartoon>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
