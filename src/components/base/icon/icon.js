import React from 'react'
import classnames from 'classnames'

import Info from './icons/info'
import FooterSwoosh from './icons/footerSwoosh'
import Underline from './icons/underline'

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
    Info: <Info />,
    FooterSwoosh: <FooterSwoosh />,
    Underline: <Underline />,
  }

  return <i className={getClassName()}>{iconMap[props.type]}</i>
}
