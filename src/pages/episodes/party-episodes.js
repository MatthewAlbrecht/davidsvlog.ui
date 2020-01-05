import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from 'src/components/layout/layout'
import { Container, Box } from 'src/components/base/base'
import HomepageRecentVideos from 'src/components/feature/homepageRecentVideos/homepageRecentVideos'

export default function PartyEpisodes(props) {
  const mostRecentEpisodes = get(props, 'data.allContentfulEpisode.edges')
  return (
    <Layout location={props.location}>
      <Container classes="content">
        <Box classes="flats4 flats6Md">
          <h1>Party Episodes Page</h1>
          <HomepageRecentVideos episodes={mostRecentEpisodes} />
        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PartyEpisodesQuery {
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
