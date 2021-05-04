import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentIndex from "../components/contentIndex/contentIndex"
import Cartoon from "../components/cartoon/cartoon"
import analytics from "../assets/svg/undraw_predictive_analytics_kf9n.svg"

export default function Reports({ data }) {
  const blog = data.allMdx.nodes;

  return (
    <Layout>
      <Hero 
        title="Explore" 
        subtitle={
          <span>
            Search <strong>articles</strong> and <strong>dashboards</strong> published to this site
          </span>
        } 
      />
      <Cartoon svg={analytics}/>
      <ContentIndex
        title="Articles"
        content={blog}
      />
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
