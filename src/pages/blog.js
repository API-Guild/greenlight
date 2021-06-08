import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentIndex from "../components/contentIndex/contentIndex"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as Posts} from "../assets/svg/posts.svg"

export default function Blog({ data }) {
  const blog = data.allMdx.nodes;

  return (
    <Layout>
      <Hero 
        title="Blog" 
        subtitle={
          <span>
            Search for <strong>articles</strong> published on this site
          </span>
        } 
      />
      <div className="container">
        <div className="column is-hidden-desktop">
          <Cartoon>
            <Posts/>
          </Cartoon>
        </div>
        <div className="columns">
          <div className="column">
            <ContentIndex
              title="Articles"
              content={blog}
            />
          </div>
          <div className="column is-hidden-touch is-two-fifths">
            <Cartoon>
              <Posts/>
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