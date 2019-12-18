import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function HList(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(listClasses => `hList_${listClasses}`)
    )
  }

  function getClassName() {
    return classnames('hList', getClasses(), props.className)
  }

  return <ul className={getClassName()}>{props.children}</ul>
}

HList.propTypes = {
  classes: PropTypes.string,
}
