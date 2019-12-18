import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const Nav = () => {
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
    <header className="header" role="navigation">
      <h1 className="logo">
        <span className="logo-davids">david's</span>
        <span className="logo-vlog">vlog</span>
      </h1>
      <ul className="nav">
        {navItems
          .map(item => item.node)
          .map(item => (
            <li className="nav-item" key={item.slug}>
              <Link className="nav-link" to={'/' + item.slug}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </header>
  )
}

export default Nav
