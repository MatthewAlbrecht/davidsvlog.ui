import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from 'src/components/layout/layout'
import { Txt, Container, Box, Icon, Hr, Img } from 'src/components/base/base'

class EpisdoeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const episodeTypes = get(this.props, 'data.contentfulEpisode.episodeTypes')
    const locations = get(this.props, 'data.contentfulEpisode.locations')
    const people = get(this.props, 'data.contentfulEpisode.people')
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
                className="episode-tag episode-tag--type"
                tag="span"
                size="10"
                color="slate"
                content={type}
                key={type}
              />
            ))}
            {locations.map(type => (
              <Txt
                className="episode-tag episode-tag--location"
                tag="span"
                size="10"
                color="slate"
                key={type}
              >
                <Icon
                  className="episode-locationIcon"
                  type="location"
                  classes="10"
                />
                {type}
              </Txt>
            ))}
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
            <Txt
              classes="center"
              tag="h3"
              size="14"
              space="15"
              color="Slate"
              content="Featuring"
              italic
              semibold
              uppercase
            />
            <Box classes="top1">
              <Box classes="bottom5">
                <Hr color="Flamingo" size="small" classes="center"></Hr>
              </Box>
              <div className="episode-featuring">
                {people.map(person => (
                  <div key={person.slug}>
                    <Box classes="bottom2">
                      <Img name="user" />
                    </Box>
                    <Txt
                      tag="p"
                      size="14"
                      color="Slate"
                      classes="center"
                      content={
                        person.nickname ||
                        `${person.firstName} ${person.lastName || ''}`
                      }
                    />
                  </div>
                ))}
              </div>
            </Box>
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
      people {
        firstName
        nickname
        lastName
        slug
      }
    }
  }
`
