import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import List from '../components/List'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log(posts)

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="cadeau title">
              <h1>Noël 2018</h1>
            </div>

            <List cadeaux={posts} />
            
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "cadeaux" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          frontmatter {
            title
            templateKey
            achete
            sites {
              link
              name
              price
              desc
            }
          }
        }
      }
    }
  }
`
