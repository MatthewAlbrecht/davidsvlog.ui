import React from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import classnames from './node_modules/classnames'

export default function Row(props) {
  function getClasses() {
    return (
      props.classes &&
      props.classes.split(' ').map(rowClass => `row_${rowClass}`)
    )
  }

  function getClassName() {
    return classnames('row', getClasses(), props.className)
  }

  const Tag = props.isList ? 'ul' : 'div'

  return <Tag className={getClassName()}>{props.children}</Tag>
}

Row.propTypes = {
  classes: PropTypes.string,
}
