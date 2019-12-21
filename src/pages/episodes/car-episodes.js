import React from 'react'
import get from 'lodash/get'
import Layout from 'src/components/layout/layout'
import { Container, Box } from 'src/components/base/base'
import HomepageRecentVideos from 'src/components/feature/homepageRecentVideos/homepageRecentVideos'

export default function CarEpisodes(props) {
  const mostRecentEpisodes = get(props, 'data.allContentfulEpisode.edges')

  return (
    <Layout location={props.location}>
      <Container classes="content">
        <Box classes="flats4 flats6Md">
          <h1>Car Episodes Page</h1>
          <HomepageRecentVideos episodes={mostRecentEpisodes} />
        </Box>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query CarEpisodesQuery {
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
