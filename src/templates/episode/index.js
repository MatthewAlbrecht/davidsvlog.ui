import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from 'src/components/layout/layout'
import TagList from 'src/components/feature/tagList/tagList'
import Featuring from 'src/components/feature/featuring/featuring'
import EpisodeDescription from 'src/components/feature/episodeDescription/episodeDescription'
import { Txt, Container, Box } from 'src/components/base/base'

class EpisdoeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const episodeTypes = get(this.props, 'data.contentfulEpisode.episodeTypes')
    const locations = get(this.props, 'data.contentfulEpisode.locations')
    const people = get(this.props, 'data.contentfulEpisode.people')
    const sponsor = get(this.props, 'data.contentfulEpisode.sponsor')
    const releaseDate = get(this.props, 'data.contentfulEpisode.releaseDate')
    const descriptionObject = get(
      this.props,
      'data.contentfulEpisode.childContentfulEpisodeSummaryTextNode.childMarkdownRemark.htmlAst'
    )
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Container classes="content">
          <Helmet title={`${episode.number} | ${siteTitle}`} />
          <Box classes="top4 top8Md bottom_5">
            <Txt
              tag="span"
              size="12 14Md"
              space="25"
              color="LightSlate"
              content={`Episode ${episode.number} | ${releaseDate}`}
              uppercase
              semibold
            />
          </Box>
          <Txt
            tag="h1"
            size="30 40Md"
            color="Slate"
            semibold
            secondary
            content={episode.title}
          />
          <Box classes="top2 bottom4">
            <TagList tags={episodeTypes} name="type" />
            <TagList tags={locations} name="location" iconType="location" />
            <TagList tags={sponsor} name="sponsor" iconType="dollarSign" />
          </Box>
        </Container>
        <Container>
          <Box classes="flats5">
            <div className="episode-videoAspectRatioContainer">
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
        <Container classes="content">
          <Box classes="flats6">
            <Featuring people={people} />
          </Box>
        </Container>
        {descriptionObject && (
          <div className="episode-description">
            <Box classes="flats8">
              <Container classes="content">
                <EpisodeDescription data={descriptionObject} />
              </Container>
            </Box>
          </div>
        )}
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
      childContentfulEpisodeSummaryTextNode {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`
