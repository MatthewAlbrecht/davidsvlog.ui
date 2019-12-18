import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function Col(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(colClass => `col_${colClass}`)
    )
  }

  function getClassName() {
    return classnames('col', getClasses(), props.className)
  }

  const Tag = props.isList ? 'li' : 'div'

  return <Tag className={getClassName()}>{props.children}</Tag>
}

Col.propTypes = {
  classes: PropTypes.string,
}
