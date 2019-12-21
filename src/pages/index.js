import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from 'src/components/layout/layout'
import HomepageRecentVideos from 'src/components/feature/homepageRecentVideos/homepageRecentVideos'
import { Container, Box } from 'src/components/base/base'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const mostRecentEpisodes = get(
      this,
      'props.data.allContentfulEpisode.edges'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Container classes="content">
          <Box classes="flats4 flats6Md">
            <HomepageRecentVideos episodes={mostRecentEpisodes} />
          </Box>
        </Container>
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
          slug
          title
        }
      }
    }
  }
`
