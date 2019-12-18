const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve('./src/templates/episode.js')
    const memberTemplate = path.resolve('./src/templates/member.js')
    resolve(
      graphql(
        `
          {
            allContentfulEpisode {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulCastMember {
              edges {
                node {
                  firstName
                  lastName
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const episodes = result.data.allContentfulEpisode.edges
        const members = result.data.allContentfulCastMember.edges

        episodes.forEach((episode, index) => {
          createPage({
            path: `/episode/${episode.node.slug}/`,
            component: episodeTemplate,
            context: {
              slug: episode.node.slug,
            },
          })
        })

        members.forEach((member, index) => {
          createPage({
            path: `/member/${member.node.slug}/`,
            component: memberTemplate,
            context: {
              slug: member.node.slug,
            },
          })
        })
      })
    )
  })
}
