import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentIndex from "../components/contentIndex/contentIndex"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as PredictiveAnalytics} from "../assets/svg/predictiveAnalytics.svg"

export default function Reports({ data }) {
  const blog = data.allMdx.nodes;

  return (
    <Layout>
      <Hero 
        title="Explore" 
        subtitle={
          <span>
            Search <strong>articles</strong> and <strong>dashboards</strong> published on this site
          </span>
        } 
      />
      <div className="container">
        <div className="columns">
          <div className="column">
            <ContentIndex
              title="Articles"
              content={blog}
            />
          </div>
          <div className="column">
            <Cartoon>
              <PredictiveAnalytics/>
            </Cartoon>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {
        fields: [frontmatter___date, frontmatter___title] 
        order: DESC
      }
    ) {
      nodes {
        frontmatter {
          title
          description
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
