import React from 'react'
import classnames from 'classnames'

const HamburgerMenu = props => {
  const { overlayActive } = props
  const overlayClasses = classnames(
    'overlay',
    overlayActive && 'overlay--active'
  )
  return <div className={overlayClasses}></div>
}

export default HamburgerMenu
