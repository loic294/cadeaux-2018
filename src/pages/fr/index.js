import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class FrPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="cadeau title">
              <h1>Noël 2018</h1>
            </div>

            {posts
              .map(({ node: cadeau }) => (
                <div
                  className="cadeau"
                  key={cadeau.id}
                >
                  <div className="innerPadding">
                    <h1>{cadeau.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: cadeau.html }} />
                  </div>
                  <div className="list">
                    {cadeau.frontmatter.sites.map(({ link, name, price, desc}) => {
                      return link === "#" ? null : <a key={name} href={link} target="_blank" rel="noopener noreferrer">
                        <div className="site">
                          <span>{name} {price && <b>{price}$</b>} </span>
                          <i className="icon fas fa-long-arrow-alt-right"></i>
                        </div>
                      </a>
                    })}
                  </div>
                  
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query FrQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "cadeaux-fr" } }}
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
