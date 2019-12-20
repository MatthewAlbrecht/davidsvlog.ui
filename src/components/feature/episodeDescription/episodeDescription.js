import React from 'react'
import { Txt, Hr, Box } from 'src/components/base/base'
import EpisodeHeading from '../episodeHeading/episodeHeading'

const EpisodeDescription = props => {
  const paragraphComponents = props.data.children
    .filter(child => child.type === 'element')
    .map(createParagraphComponent)

  function createParagraphComponent(data, i) {
    // console.log(data)
    return (
      <p
        className="episodeDescription-paragraph txt txt_18 txt_21Md txt_line158 txt_secondary txt_colorSlate"
        key={i}
      >
        {data.children.map(childData => {
          // console.log(childData)
          switch (childData.type) {
            case 'text':
              return childData.value
              break
            case 'element':
              return (
                <a
                  className="episodeDescription-link"
                  href={childData.properties.href}
                  key={childData.properties.href}
                >
                  {childData.children
                    .map(grandChild => grandChild.value)
                    .join(' ')}
                </a>
              )
              break

            default:
              break
          }
          return ''
        })}
      </p>
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
