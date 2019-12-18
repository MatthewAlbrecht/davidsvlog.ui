import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styles from './navigation.module.css'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulNavItems(filter: { isPrimaryNavItem: { eq: true } }) {
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

  return (
    <nav role="navigation">
      <ul className={styles.navigation}>
        {navItems
          .map(item => item.node)
          .map(item => (
            <li className={styles.navigationItem} key={item.slug}>
              <Link to={'/' + item.slug}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
