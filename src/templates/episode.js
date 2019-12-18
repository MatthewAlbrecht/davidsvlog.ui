import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from 'src/components/layout/layout'
import { Txt, Container } from 'src/components/base/base'

class EpisdoeTemplate extends React.Component {
  render() {
    const episode = get(this.props, 'data.contentfulEpisode')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Container>
          <Helmet
            title={`${(episode.nickName || episode.firstName) +
              episode.lastName} | ${siteTitle}`}
          />
          <Txt
            tag="h2"
            size="16"
            color="Slate"
            content={episode.episodeNumber}
          />
          <Txt tag="h1" size="24" color="Slate" content={episode.title} />
          <Txt
            tag="p"
            size="12"
            color="DarkSlate"
            content="I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive."
          />
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
      episodeNumber
      title
      link
    }
  }
`
