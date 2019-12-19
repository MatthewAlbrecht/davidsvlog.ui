import React from 'react'
import classnames from 'classnames'
import { Txt, Icon } from 'src/components/base/base'

const TagList = props => {
  const { tags, name, iconType } = props
  const txtClasses = classnames(`tag`, `tag--${name}`)
  console.log(tags)
  if (!tags) return null
  return (
    <>
      {tags.map(tag => (
        <Txt
          className={txtClasses}
          tag="span"
          size="10"
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
