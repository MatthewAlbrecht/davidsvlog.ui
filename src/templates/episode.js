import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from 'src/components/layout/layout'
import { Txt, Container, Box } from 'src/components/base/base'

class EpisdoeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const episodeTypes = get(this.props, 'data.contentfulEpisode.episodeTypes')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Container>
          <Helmet title={`${episode.number} | ${siteTitle}`} />
          <Box classes="flats5">
            <Txt
              classes="tertiary"
              tag="h2"
              size="44"
              color="Slate"
              content={`${episode.number}.`}
            />
          </Box>
          <Txt tag="h1" size="22" color="Slate" content={episode.title} />
          <Box classes="top1 bottom5">
            {episodeTypes.map(type => (
              <Txt
                className="episode-type"
                tag="span"
                size="10"
                color="slate"
                content={type}
                key={type}
              />
            ))}
          </Box>
          <Box>
            <div className="episode-videoContainer">
              <iframe
                className="episode-video"
                src="https://www.youtube-nocookie.com/embed/brQEnKsMvB0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Box>
        </Container>
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
      number
      title
      link
      episodeTypes
    }
  }
`
