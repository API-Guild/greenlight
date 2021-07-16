import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ContentIndex from "../components/contentIndex/contentIndex"
import Cartoon from "../components/cartoon/cartoon"
import { ReactComponent as Posts} from "../assets/svg/posts.svg"
import { docsColumns } from "./pages.module.scss"

export default function Docs({ data }) {
  const docs = data.allMdx.nodes;

  return (
    <Layout>
      <Hero 
        title="Documentation"
        titleColor="primary"
        titleSize={1}  
        subtitle={
          <span>
            Search for <strong>articles</strong> published on this site
          </span>
        }
        subtitleSize={4} 
      />
      <div className="section">
        <div className={`columns ${docsColumns}`}>
          <div className="column is-three-fifths">
            <ContentIndex
              title="Articles"
              content={docs}
            />
          </div>
          <div className="column is-two-fifths">
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
