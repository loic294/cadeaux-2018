import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import './all.sass'

let SnowStorm = null
try {
  /*eslint-disable */
  navigator
  SnowStorm = require('react-snowstorm')
  /*eslint-enable */
} catch (error) {}



const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/logo.png" />
	        <link rel="icon" type="image/png" href="/img/logo.png" />
	
	        <link rel="mask-icon" href="/img/logo.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Monoton|Quicksand:300,400,500,700|Roboto:100,300,400" rel="stylesheet" />
        </Helmet>
        <div className="mountains"></div>
        {SnowStorm && <SnowStorm />}
        <div className="content">{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
