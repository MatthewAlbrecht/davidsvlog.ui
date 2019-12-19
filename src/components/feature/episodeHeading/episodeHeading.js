import React from 'react'
import { Txt, Box, Hr } from 'src/components/base/base'

const EpisodeHeading = props => {
  return (
    <>
      <Txt
        classes="center"
        tag="h3"
        size="14"
        space="15"
        color="Slate"
        content={props.title}
        italic
        semibold
        uppercase
      />
      <Box classes="top1 bottom5">
        <Hr color="Flamingo" size="small" classes="center"></Hr>
      </Box>
    </>
  )
}

export default EpisodeHeading
