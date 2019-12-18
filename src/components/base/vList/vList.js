import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function VList(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(listClasses => `vList_${listClasses}`)
    )
  }

  function getClassName() {
    return classnames('vList', getClasses(), props.className)
  }

  return <ul className={getClassName()}>{props.children}</ul>
}

VList.propTypes = {
  classes: PropTypes.string,
}
