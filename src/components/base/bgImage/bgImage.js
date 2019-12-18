import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function BgImage(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(bgImageClass => `bgImage_${bgImageClass}`)
    )
  }

  function getClassName() {
    return classnames('bgImage', getClasses(), props.className)
  }

  return (
    <div
      className={getClassName()}
      style={{ backgroundImage: `url("${props.url}")` }}
    >
      {props.children}
    </div>
  )
}

BgImage.propTypes = {
  classes: PropTypes.string,
  url: PropTypes.string.isRequired,
}
