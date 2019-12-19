import React from 'react'
import classnames from 'classnames'

import Cheeseburger from './icons/cheeseburger'
import Hamburger from './icons/hamburger'
import Location from './icons/location'
import DollarSign from './icons/dollarSign'

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
    location: <Location />,
    dollarSign: <DollarSign />,
  }

  return <i className={getClassName()}>{iconMap[props.type]}</i>
}
