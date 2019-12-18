const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const memberTemplate = path.resolve('./src/templates/member.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
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
        const posts = result.data.allContentfulBlogPost.edges
        const members = result.data.allContentfulCastMember.edges

        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
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
