import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as Stakeholder } from "../assets/svg/stakeholder.svg"


export default function About() {
  return (
    <Layout>
      <Hero title="About Greenlight" subtitle={<span><strong>Why</strong> and <strong>how</strong> it was built</span>} />
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths-tablet">
            <div className="container is-fluid">
              <p>
                Solving a business's needs for insights and analysis can be a Sisyphean task. 
                Multiple solutions ranging from low-code, no-code, artificial intelligence, and 
                NLP are all gaining traction as they allow business users to bridge the gap between 
                technology and value. However, the demand is always ongoing and never entirely satisfied.
                Technologies that scale are the best positioned to make an impact, especially if they allow
                a large user base to complement their domain knowledge with the ability to visualize and understand 
                data.
              </p>
              <br/>
              <p>
                As an organization succeeds at answering long-held questions, new inquiries inevitably arise. One is 
                reminded of the unreachable green light motif found in the 
                <a href="https://gutenberg.org/ebooks/64317" target="_blank" rel="noreferrer"> <cite>Great Gatsby</cite></a>, 
                by F. Scott Fitzgerald:
              </p>
              <br/>
              <div className="content">
                <blockquote>
                  Gatsby believed in the green light, the orgiastic future that year by year recedes before us. 
                  It eluded us then, but that’s no matter—tomorrow we will run faster, stretch out our arms farther…. 
                  And one fine morning— So we beat on, boats against the current, borne back ceaselessly into the past.
                </blockquote>
              </div>       
            </div>
          </div>
          <div className="column is-two-fifths-tablet">
            <Cartoon>
              <Stakeholder/>
            </Cartoon>
          </div>
        </div>
        <div className="container is-fluid"> 
          <p>
            <strong><a href="https://api-guild.github.io/greenlight/" target="_blank" rel="noreferrer">Greenlight </a></strong> 
            is a template to jumpstart <a className="has-text-tableau" href="https://www.tableau.com/" target="_blank" rel="noreferrer"> Tableau </a> 
            data portals at organizations or to set up data-driven blogs for personal needs. 
            Its architecture allows users to build a website while avoiding server maintenance and deployment. 
            This approach is both accessible and very powerful. 
            <strong><a href="https://api-guild.github.io/greenlight/" target="_blank" rel="noreferrer"> Greenlight </a></strong> 
            is an accelerator that discovers value as use cases are tested with greater ease and it helps decision makers invest 
            in the right opportunities for their analytics endeavors.
          </p>
          <br/>
          <p>
            This application has been designed with <a href="https://jamstack.org/" target="_blank" rel="noreferrer"> JAMstack </a> 
            development patterns and built with the <a className="has-text-gatsby" href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby </a> 
            frontend framework. It relies on a component-based UI built with <a className="has-text-react" href="https://reactjs.org/" target="_blank" rel="noreferrer">React </a> 
            and generates blazing-fast static files with <a className="has-text-node" href="https://nodejs.dev/" target="_blank" rel="noreferrer">Node</a> at build time. 
            <a className="has-text-graphql" href="https://graphql.org/" target="_blank" rel="noreferrer"> GraphQL</a> is used to query data and
            styles are defined with <a className="has-text-bulma" href="https://bulma.io/" target="_blank" rel="noreferrer">Bulma</a>.
            Users can generate content solely relying on <a className="has-text-mdx" href="https://mdxjs.com/getting-started/" target="_blank" rel="noreferrer">MDX</a>,
            a superset of <a className="has-text-md" href="https://www.markdownguide.org/" target="_blank" rel="noreferrer">Markdown</a>.
          </p>
          <br/>
          <p>
            This may sound complex at first, but we built this starter template for you. If you want, you can keep most of the complexity safely under the hood 
            so you can focus on writing captivating content and embedding engaging visual analytics. Check out the 
            <Link to="/blog/quick-start"> Quick Start</Link> guide. You will have a working site in no time.
          </p>
        </div>
      </div>
    </Layout>
  )
}
