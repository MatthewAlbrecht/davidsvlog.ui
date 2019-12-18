import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function Container(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes
        .split(' ')
        .map(containerClass => `container_${containerClass}`)
    )
  }

  function getClassName() {
    return classnames('container', getClasses(), props.className)
  }

  return <div className={getClassName()}>{props.children}</div>
}

Container.propTypes = {
  classes: PropTypes.string,
}
