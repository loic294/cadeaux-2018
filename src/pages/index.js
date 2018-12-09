import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            {posts
              .map(({ node: cadeau }) => (
                <div
                  className="content"
                  key={cadeau.id}
                >
                  <p>
                      {cadeau.frontmatter.title}
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: cadeau.html }} />
                </div>
              ))}
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
          }
        }
      }
    }
  }
`
