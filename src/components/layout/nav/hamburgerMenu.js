import React from 'react'
import classnames from 'classnames'
import { Txt, Container } from 'src/components/base/base'

const HamburgerMenu = props => {
  const { overlayActive, navItems } = props
  const overlayClasses = classnames(
    'overlay',
    overlayActive && 'overlay--active'
  )
  return (
    <div className={overlayClasses}>
      <Container>
        <ul className="hamburgerMenu">
          {navItems
            .map(item => item.node)
            .map(item => (
              <li className="hamburgerMenu-item" key={item.slug}>
                <Txt
                  tag="Link"
                  className="hamburgerMenu-link"
                  to={`/${item.slug}`}
                  size="24"
                  color="DarkTeal"
                  content={item.title}
                />
                {item.childItems && (
                  <ul className="secondaryHamburgerMenu">
                    {item.childItems.map(subItem => (
                      <li
                        className="secondaryHamburgerMenu-item"
                        key={subItem.slug}
                      >
                        <Txt
                          tag="Link"
                          className="secondaryHamburgerMenu-link"
                          to={`/${item.slug}/${subItem.slug}`}
                          size="20"
                          color="DarkTeal"
                          content={subItem.title}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </Container>
    </div>
  )
}

export default HamburgerMenu
