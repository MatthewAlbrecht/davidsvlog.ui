import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulNavItems(
          filter: { isPrimaryNavItem: { eq: true } }
          sort: { fields: order, order: DESC }
        ) {
          edges {
            node {
              childItems {
                title
                slug
              }
              title
              slug
            }
          }
        }
      }
    `
  )
  let navItems = data.allContentfulNavItems.edges
  console.log(navItems)
  return (
    <nav role="navigation">
      <ul>
        {navItems
          .map(item => item.node)
          .map(item => (
            <li key={item.slug}>
              <Link to={'/' + item.slug}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
