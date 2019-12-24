import React from 'react'
import { Txt, Hr, Box } from 'src/components/base/base'
import EpisodeHeading from '../episodeHeading/episodeHeading'

const EpisodeDescription = props => {
  const paragraphComponents = props.data.children
    .filter(child => child.type === 'element')
    .map(createParentComponent)

  function createParentComponent(data, i) {
    switch (data.tagName) {
      case 'p':
        return createParagraphComponent(data, i)

      case 'ul':
        return createUlComponent(data, i)

      case 'ol':
        return createOlComponent(data, i)

      default:
        break
    }
  }

  function createParagraphComponent(data, i) {
    // console.log('createParagraphComponent', data)
    return (
      <Txt
        tag="p"
        size="18 21Md"
        line="158"
        color="Slate"
        secondary
        className="episodeDescription-paragraph"
        key={i}
      >
        {data.children.map(createParagraphContent)}
      </Txt>
    )
  }

  function createUlComponent(data, i) {
    // console.log('createUlComponent', data)

    return null
  }

  function createOlComponent(data, i) {
    // console.log('createOlComponent', data)

    return null
  }

  function createParagraphContent(data) {
    switch (data.type) {
      case 'text':
        return data.value
      case 'element':
        return createChildComponent(data)

      default:
        return ''
    }
  }

  function createChildComponent(data) {
    switch (data.tagName) {
      case 'a':
        return createLinkComponent(data)

      default:
        console.warn('new tagName has no handler:', data.tagName)

        return null
    }
  }

  function createLinkComponent(data) {
    const isInternal = data.properties.href.slice(0, 1) === '/'
    return (
      <Txt
        tag={isInternal ? 'Link' : 'a'}
        className="episodeDescription-link"
        to={data.properties.href}
        href={data.properties.href}
        key={data.properties.href}
        size="18 21Md"
        line="158"
        color="Slate"
        secondary
      >
        {data.children.map(grandChild => grandChild.value).join(' ')}
      </Txt>
    )
  }

  return (
    <div>
      <EpisodeHeading title="Episode Synopsis" />
      {paragraphComponents}
    </div>
  )
}

export default EpisodeDescription
