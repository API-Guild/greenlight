import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as Articles } from "../assets/svg/articles.svg"
import { ReactComponent as PostChart } from "../assets/svg/postChart.svg"
import { ReactComponent as StackedAreaChart } from "../assets/svg/stackedAreaChart.svg"
import { ReactComponent as Builds } from "../assets/svg/builds.svg"
import { ReactComponent as Security } from "../assets/svg/security.svg"
import { ReactComponent as PWA } from "../assets/svg/pwa.svg"
import { ReactComponent as PredictiveAnalytics } from "../assets/svg/predictiveAnalytics.svg"
import { ReactComponent as CohortAnalysis } from "../assets/svg/cohortAnalysis.svg"






export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Greenlight" 
        subtitle={<span>A guerrilla <strong>data portal</strong> for analysts with deadlines.</span>} 
      />
      <section className="section">
        <div className="columns">
          <div className="column">
            <Cartoon>
              <PostChart/>
            </Cartoon>
          </div>
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
          <div className="column">
            <Cartoon>
              <Articles/>
            </Cartoon>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Cartoon>
              <Builds/>
            </Cartoon>
          </div>
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
          <div className="column">
            <Cartoon>
              <Security/>
            </Cartoon>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Cartoon>
              <PWA/>
            </Cartoon>
          </div>
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
          <div className="column">
            <Cartoon>
              <StackedAreaChart/>
            </Cartoon>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Cartoon>
              <PredictiveAnalytics/>
            </Cartoon>
          </div>
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-flex is-align-self-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
          </div>
          <div className="column">
            <Cartoon>
              <CohortAnalysis/>
            </Cartoon>
          </div>
        </div>
      </section>
    </Layout>
  )
}
