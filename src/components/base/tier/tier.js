import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function Tier(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(tierClass => `tier_${tierClass}`)
    )
  }

  function getClassName() {
    return classnames('tier', getClasses(), props.className)
  }

  return <section className={getClassName()}>{props.children}</section>
}

Tier.propTypes = {
  classes: PropTypes.string,
}
