import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from 'src/components/layout/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const mostRecentEpisode = get(
      this,
      'props.data.allContentfulEpisode.edges.node'
    )
    console.log(siteTitle)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulEpisode(limit: 5, sort: { fields: releaseDate, order: DESC }) {
      edges {
        node {
          id
          number
        }
      }
    }
  }
`
