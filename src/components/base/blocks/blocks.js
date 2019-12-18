import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function Blocks(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(listClasses => `blocks_${listClasses}`)
    )
  }

  function getClassName() {
    return classnames('blocks', getClasses(), props.className)
  }

  return <ul className={getClassName()}>{props.children}</ul>
}

Blocks.propTypes = {
  classes: PropTypes.string,
}
