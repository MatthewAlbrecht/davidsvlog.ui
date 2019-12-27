import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import classnames from 'classnames'
import useToggle from 'src/hooks/useToggle'
import { Container, Icon, Txt } from 'src/components/base/base'
import HamburgerMenu from './hamburgerMenu'

const Nav = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulNavItems(
          filter: { isPrimaryNavItem: { eq: true } }
          sort: { fields: order, order: ASC }
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

  const [overlayActive, toggle] = useToggle(false)
  const navItems = data.allContentfulNavItems.edges
  const hamburgerIconClasses = classnames(
    'hamburger-button',
    overlayActive && 'hamburger-button--overlayActive'
  )

  return (
    <header className="header" role="navigation">
      <HamburgerMenu overlayActive={overlayActive} navItems={navItems} />
      <Container classes="fullHeight">
        <nav className="navBar">
          <Link to="/">
            <h1 className="logo">
              <span className="logo-vlog">vlog</span>
              <span className="logo-squad">squad</span>
            </h1>
          </Link>
          <div className="hamburger">
            <button className={hamburgerIconClasses} onClick={toggle}>
              <Icon
                className="hamburger-icon"
                type="hamburger"
                classes="24"
              ></Icon>
              <Icon
                className="hamburger-activeIcon"
                type="cheeseburger"
                classes="24"
              ></Icon>
              <span className="visuallyHidden">Menu</span>
            </button>
          </div>
          <ul className="mainNav">
            {navItems
              .map(item => item.node)
              .map(item => (
                <li className="mainNav-item" key={item.slug}>
                  <Txt
                    tag="Link"
                    color="DarkestTeal"
                    size="16"
                    line="10"
                    className="mainNav-link"
                    to={`/${item.slug}`}
                  >
                    {item.title}
                  </Txt>
                  {item.childItems && (
                    <ul className={`secondaryNav secondaryNav--${item.slug}`}>
                      {item.childItems.map(childItem => (
                        <li className="secondaryNav-item" key={childItem.slug}>
                          <Txt
                            tag="Link"
                            color="DarkestTeal"
                            size="14"
                            className="secondaryNav-link"
                            to={`/${item.slug}/${childItem.slug}`}
                          >
                            {childItem.title}
                          </Txt>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Nav
