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
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                      {post.frontmatter.title}
                  </p>
                  <p>
                    {post.html}
                  </p>
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
      sort: { order: DESC, fields: [frontmatter___date] },
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
