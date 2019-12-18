import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class MemberTemplate extends React.Component {
  render() {
    const member = get(this.props, 'data.contentfulCastMember')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet
            title={`${(member.nickName || member.firstName) +
              member.lastName} | ${siteTitle}`}
          />
          {member.firstName}
          {member.nickName}
          {member.lastName}
        </div>
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
    contentfulCastMember(slug: { eq: $slug }) {
      firstName
      nickname
      lastName
    }
  }
`
