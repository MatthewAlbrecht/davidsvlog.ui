import React from 'react'
import classnames from 'classnames'

import Cheeseburger from './icons/cheeseburger'
import Hamburger from './icons/hamburger'

export default function Icon(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(iconClass => `icon_${iconClass}`)
    )
  }

  function getClassName() {
    return classnames(!props.notIcon && 'icon', getClasses(), props.className)
  }

  const iconMap = {
    cheeseburger: <Cheeseburger />,
    hamburger: <Hamburger />,
  }

  return <i className={getClassName()}>{iconMap[props.type]}</i>
}
