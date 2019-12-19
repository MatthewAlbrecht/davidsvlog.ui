import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from 'src/components/layout/layout'
import TagList from 'src/components/feature/tagList/tagList'
import Featuring from 'src/components/feature/featuring/featuring'
import { Txt, Container, Box, Icon, Hr, Img } from 'src/components/base/base'

class EpisdoeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const episodeTypes = get(this.props, 'data.contentfulEpisode.episodeTypes')
    const locations = get(this.props, 'data.contentfulEpisode.locations')
    const people = get(this.props, 'data.contentfulEpisode.people')
    const sponsor = get(this.props, 'data.contentfulEpisode.sponsor')
    const releaseDate = get(this.props, 'data.contentfulEpisode.releaseDate')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Container>
          <Helmet title={`${episode.number} | ${siteTitle}`} />
          <Box classes="flats5">
            <Txt
              tag="h2"
              size="44"
              color="Slate"
              content={`${episode.number}.`}
              tertiary
            />
          </Box>
          <Box classes="bottom_5">
            <Txt
              tag="span"
              size="10"
              space="25"
              color="LightSlate"
              content={releaseDate}
              uppercase
              semibold
            />
          </Box>
          <Txt
            tag="h1"
            size="22"
            color="Slate"
            semibold
            content={episode.title}
          />
          <Box classes="top2 bottom5">
            <TagList tags={episodeTypes} name="type" />
            <TagList tags={locations} name="location" iconType="location" />
            <TagList tags={sponsor} name="sponsor" iconType="dollarSign" />
          </Box>
          <div className="episode-videoContainer">
            <iframe
              className="episode-video"
              src="https://www.youtube-nocookie.com/embed/brQEnKsMvB0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Box classes="top4">
            <Featuring people={people} />
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
      locations
      sponsor
      releaseDate(formatString: "MMMM DD, YYYY")
      people {
        firstName
        nickname
        lastName
        slug
      }
    }
  }
`
