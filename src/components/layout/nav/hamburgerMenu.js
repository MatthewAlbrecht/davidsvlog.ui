import React from 'react'
import classnames from 'classnames'
import { Txt } from 'src/components/base/base'

const HamburgerMenu = props => {
  const { overlayActive } = props
  const overlayClasses = classnames(
    'overlay',
    overlayActive && 'overlay--active'
  )
  return (
    <div className={overlayClasses}>
      <div className="hamburgerMenu">
        <Txt
          tag="Link"
          className="hamburgerMenu-link"
          to="/episodes"
          size="30"
          color="DarkTeal"
          content="Episodes"
        />
        <Txt
          tag="Link"
          className="hamburgerMenu-link"
          to="/members"
          size="30"
          color="DarkTeal"
          content="Members"
        />
        <Txt
          tag="Link"
          className="hamburgerMenu-link"
          to="/merch"
          size="30"
          color="DarkTeal"
          content="Merch"
        />
      </div>
    </div>
  )
}

export default HamburgerMenu
