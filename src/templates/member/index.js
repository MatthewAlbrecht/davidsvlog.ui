import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { getDisplayName } from 'src/utils/naming'
import { getMemberStats } from 'src/utils/normalizers/member.normalizer'

import Helmet from 'react-helmet'
import Layout from 'src/components/layout/layout'
import { Txt, Container, Box } from 'src/components/base/base'
import PersonImage from 'src/components/feature/personImage/personImage'
import StatList from 'src/components/feature/statList/statList'

class MemberTemplate extends React.Component {
  render() {
    const person = get(this.props, 'data.contentfulCastMember')
    const episodes = get(this.props, 'data.recentEpisodes.edges')
    const stats = getMemberStats(this.props.data)
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${getDisplayName(person)} | ${siteTitle}`} />
        <Container classes="content">
          <div className="memberHeader">
            <Box classes="top4 top8Md bottom_5">
              <PersonImage person={person} className="memberHeader-image" />
              <Box classes="top3">
                <Txt
                  tag="h1"
                  size="30 40Md"
                  color="Slate"
                  align="center"
                  bold
                  content={getDisplayName(person)}
                />
                <Txt
                  tag="span"
                  size="12 14Md"
                  space="25"
                  color="LightSlate"
                  align="center"
                  classes="block"
                  content={person.memberRank[0]}
                  uppercase
                  semibold
                />
              </Box>
            </Box>
          </div>
          <Box classes="top6 top8Md">
            <StatList stats={stats} />
          </Box>
        </Container>
      </Layout>
    )
  }
}

export default MemberTemplate

export const pageQuery = graphql`
  query MemberBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    firstEpisode: allContentfulEpisode(
      filter: { people: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: releaseDate, order: ASC }
      limit: 1
    ) {
      edges {
        node {
          number
        }
      }
    }
    mostRecentEpisode: allContentfulEpisode(
      sort: { fields: releaseDate, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          number
        }
      }
    }
    recentEpisodes: allContentfulEpisode(
      filter: { people: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: releaseDate, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          title
          releaseDate
          slug
          number
          link
        }
      }
      totalCount
    }
    contentfulCastMember(slug: { eq: $slug }) {
      birthday(difference: "years")
      nickname
      lastName
      firstName
      memberRank
      socialLinks {
        url
        platform
        handle
      }
      image {
        file {
          url
        }
        description
      }
    }
  }
`
