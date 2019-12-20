import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { Container, Icon } from 'src/components/base/base'

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
      <Container classes="fullHeight">
        <nav className="navBar">
          <Link to="/">
            <h1 className="logo">
              <span className="logo-davids">david's</span>
              <span className="logo-vlog">vlog</span>
            </h1>
          </Link>
          <div className="hamburgerMenu">
            <button className="hamburgerMenu-button">
              <Icon
                className="hamburgerMenu-icon"
                type="hamburger"
                classes="24"
              ></Icon>
              <Icon
                className="hamburgerMenu-activeIcon"
                type="cheeseburger"
                classes="24"
              ></Icon>
            </button>
          </div>
          <ul className="mainNav">
            {navItems
              .map(item => item.node)
              .map(item => (
                <li className="mainNav-item" key={item.slug}>
                  <Link className="mainNav-link" to={`/${item.slug}`}>
                    {item.title}
                  </Link>
                  <ul className="secondaryNav">
                    {item.childItems.map(childItem => (
                      <li className="secondaryNav-item" key={childItem.slug}>
                        <Link
                          className="secondaryNav-link"
                          to={`/${item.slug}/${childItem.slug}`}
                        >
                          {childItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Nav
