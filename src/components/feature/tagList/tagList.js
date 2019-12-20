import React from 'react'
import classnames from 'classnames'
import { Txt, Icon } from 'src/components/base/base'

const TagList = props => {
  const { tags, name, iconType } = props
  const txtClasses = classnames(`tag`, `tag--${name}`)

  if (!tags) return null
  return (
    <>
      {tags.map(tag => (
        <Txt
          className={txtClasses}
          tag="span"
          size="12 14Md"
          color="Slate"
          key={tag}
        >
          {iconType && (
            <Icon className={`tag-${name}Icon`} type={iconType} classes="10" />
          )}
          {tag}
        </Txt>
      ))}
    </>
  )
}

export default TagList
