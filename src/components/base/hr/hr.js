import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function Hr(props) {
  function getClasses() {
    return (
      props.classes && props.classes.split(' ').map(hrClass => `hr_${hrClass}`)
    )
  }

  function getSizeClasses() {
    return (
      props.size && props.size.split(' ').map(sizeClass => `hr_${sizeClass}`)
    )
  }

  function getColorClasses() {
    return (
      props.color &&
      props.color.split(' ').map(colorClass => `hr_color${colorClass}`)
    )
  }

  function getClassName() {
    return classnames(
      'hr',
      getClasses(),
      getSizeClasses(),
      getColorClasses(),
      props.className
    )
  }

  return <div className={getClassName()}>{props.children}</div>
}

Hr.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}
