import React from "react"
import { Link, navigate } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import Box from "../components/box/box"
import Title from "../components/title/title"
import { ReactComponent as Articles } from "../assets/svg/articles.svg"
import { ReactComponent as PostChart } from "../assets/svg/postChart.svg"
import { ReactComponent as StackedAreaChart } from "../assets/svg/stackedAreaChart.svg"
import { ReactComponent as Builds } from "../assets/svg/builds.svg"
import { ReactComponent as Security } from "../assets/svg/security.svg"
import { ReactComponent as Pwa } from "../assets/svg/pwa.svg"
import { ReactComponent as Chilling } from "../assets/svg/chilling.svg"

export default function Home() {
  return (
    <Layout>
      <Hero
        title="Greenlight"
        titleColor="primary"
        titleSize={1} 
        subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} 
        subtitleSize={4}
      />
      <Cartoon>
        <PostChart/>
      </Cartoon>
      <section className="section">
        <p className="has-text-centered has-text-left-mobile has-text-primary is-size-4-mobile is-size-3-tablet">
          The <strong>Tableau</strong> blog you've always wanted
        </p>
        <p className="has-text-centered has-text-left-mobile is-size-6-mobile is-size-5-tablet">
          Leverage the modern web to build a site that's fast, secure, and low maintenance. 
          Forget about deploying servers and dealing with malware. You don't need hundreds 
          of hours of work to learn these techniques either. Instead, focus on your content and let
          <Link to="/"> Greenlight</Link> take care of the rest.
        </p>        
      </section>
  
      <button 
        class="button is-primary is-outlined is-large is-rounded" 
        style={{margin: "auto", display: "block"}}
        onClick={()=>{navigate("/docs/quick-start")}}
      >
        <strong>
          <FontAwesomeIcon icon={faRocket}/> Get Started
        </strong>
      </button>

      <section className="section">
        {/* columns for tablets and above */}
        <div className="columns">
          <div className="column is-half is-flex">
            <Box hoverBox={true}>
              <div className="columns">
                <div className="column is-flex is-align-self-center">
                  <Cartoon>
                    <StackedAreaChart/>
                  </Cartoon>
                </div>
                <div className="column is-flex is-align-self-center">
                  <Title
                    title="Embedded Analytics"
                    titleColor="primary"
                    titleSize={4}
                    subtitle={
                      <p>
                        has never been easier. Adding dashboards to your blog is almost as 
                        straightforward as <i className="has-text-primary">'drag & drop'</i>. 
                        More like, embed and forget. It just works.
                      </p>
                    }
                    subtitleColor="grey lighter"
                    subtitleSize={6}
                  />
                </div>
              </div>
            </Box>
          </div>
          <div className="column is-half is-flex">
            <Box hoverBox={true}>
              <div className="columns">
                <div className="column is-flex is-align-self-center">
                  <Cartoon>
                    <Articles/>
                  </Cartoon>
                </div>
                <div className="column is-flex is-align-self-center">
                  <Title
                    title="Compelling Content"
                    titleColor="primary"
                    titleSize={4}
                    subtitle={
                      <p>
                        is empowered by data. Help the world see what matters to you.
                        Knowledge is power and it's measured in bytes.
                      </p>
                    }
                    subtitleColor="grey lighter"
                    subtitleSize={6}
                  />
                </div>
              </div>
            </Box> 
          </div>
        </div>

        <div className="columns">
          <div className="column is-half is-flex">
            <Box hoverBox={true}>
              <div className="columns">
                <div className="column is-flex is-hidden-tablet is-align-self-center">
                  <Cartoon>
                    <Builds/>
                  </Cartoon>
                </div>
                <div className="column is-flex is-align-self-center">
                  <Title
                    title="Static Site Generator"
                    titleColor="primary"
                    titleSize={4}
                    subtitle={
                      <p>
                        Create a dynamic and optimized website using a modern stack that frees 
                        you from deploying and maintaining servers.
                      </p>
                    }
                    subtitleColor="grey lighter"
                    subtitleSize={6}
                  />
                </div>
                <div className="column is-flex is-hidden-mobile is-align-self-center">
                  <Cartoon>
                    <Builds/>
                  </Cartoon>
                </div>
              </div>
            </Box>
          </div>
          <div className="column is-half is-flex">
            <Box hoverBox={true}>
              <div className="columns">
                <div className="column is-flex is-hidden-tablet is-align-self-center">
                  <Cartoon>
                    <Security/>
                  </Cartoon>
                </div>
                <div className="column is-flex is-align-self-center">
                  <Title
                    title="Secure"
                    titleColor="primary"
                    titleSize={4}
                    subtitle={
                      <p>
                        Going serverless means that you can forget about malware, malicious requests & DDOS
                        attacks. It also makes hosting much cheaper.
                      </p>
                    }
                    subtitleColor="grey lighter"
                    subtitleSize={6}
                  />
                </div>
                <div className="column is-flex is-hidden-mobile is-align-self-center">
                  <Cartoon>
                    <Security/>
                  </Cartoon>
                </div>
              </div>
            </Box>
          </div>
        </div>

        <div className="columns">
          <div className="column is-half is-flex">
            <Box hoverBox={true}>
              <div className="columns">
                <div className="column is-flex is-align-self-center">
                  <Cartoon>
                    <Pwa/>
                  </Cartoon>
                </div>
                <div className="column is-flex is-align-self-center">
                  <Title
                    title="Responsive UI"
                    titleColor="primary"
                    titleSize={4}
                    subtitle={
                      <p>
                        Readers can enjoy your blog on any device. Everything from charts
                        down to text is responsive.
                      </p>
                    }
                    subtitleColor="grey lighter"
                    subtitleSize={6}
                  />
                </div>
              </div>
            </Box>
          </div>
          <div className="column is-half is-flex">
            <Box hoverBox={true}>
              <div className="columns">
                <div className="column is-flex is-align-self-center">
                  <Cartoon>
                    <Chilling/>
                  </Cartoon>
                </div>
                <div className="column is-flex is-align-self-center">
                  <Title
                    title="Stress Free"
                    titleColor="primary"
                    titleSize={4}
                    subtitle={
                      <p>
                        Follow the <Link to="/docs/quick-start">Quick Start</Link> guide. Host the site for
                        cheap. Forget about servers. Dashboards just work. Opensource license.
                      </p>
                    }
                    subtitleColor="grey lighter"
                    subtitleSize={6}
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
      </section>
    </Layout>
  )
}
