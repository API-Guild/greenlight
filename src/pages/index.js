import React from "react"
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
import { ReactComponent as PredictiveAnalytics } from "../assets/svg/chilling.svg"

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
        {/* columns for tablets and above */}
        <div className="columns is-hidden-mobile">
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <StackedAreaChart/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 1"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Articles/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 2"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
        </div>

        <div className="columns is-hidden-mobile">
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 3"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Builds/>
                </Cartoon>
              </div>
            </div>
          </Box>
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 4"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Security/>
                </Cartoon>
              </div>
            </div>
          </Box>
        </div>

        <div className="columns is-hidden-mobile">
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Pwa/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 5"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <PredictiveAnalytics/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 6"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
        </div>

        {/* columns for mobile */}
        <div className="columns is-hidden-tablet">
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <StackedAreaChart/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 1"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Articles/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 2"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
        </div>

        <div className="columns is-hidden-tablet">
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Builds/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 3"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Security/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 4"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
        </div>

        <div className="columns is-hidden-tablet">
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <Pwa/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 5"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
          <Box>
            <div className="columns">
              <div className="column is-flex is-align-self-center">
                <Cartoon>
                  <PredictiveAnalytics/>
                </Cartoon>
              </div>
              <div className="column is-flex is-align-self-center">
                <Title
                  title="Feature 6"
                  titleColor="primary"
                  titleSize={3}
                  subtitle={
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      et dolore magna aliqua.
                    </p>
                  }
                  subtitleColor="grey lighter"
                  subtitleSize={6}
                />
              </div>
            </div>
          </Box>
        </div>
      </section>
    </Layout>
  )
}
