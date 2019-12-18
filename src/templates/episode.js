import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class EpisdoeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet
            title={`${(episode.nickName || episode.firstName) +
              episode.lastName} | ${siteTitle}`}
          />

          <h1>{episode.title}</h1>
          <h3>{episode.episodeNumber}</h3>
          <h3>{episode.link}</h3>
        </div>
      </Layout>
    )
  }
}

export default EpisdoeTemplate

export const pageQuery = graphql`
  query EpisodeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulEpisode(slug: { eq: $slug }) {
      episodeNumber
      title
      link
    }
  }
`
