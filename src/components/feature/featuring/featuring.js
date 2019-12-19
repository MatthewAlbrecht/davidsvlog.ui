import React from 'react'
import { Txt, Box, Hr } from 'src/components/base/base'
import PersonList from '../PersonList/PersonList'
const Featuring = props => {
  const { people } = props

  return (
    <>
      <Txt
        classes="center"
        tag="h3"
        size="14"
        space="15"
        color="Slate"
        content="Featuring"
        italic
        semibold
        uppercase
      />
      <Box classes="top1">
        <Box classes="bottom5">
          <Hr color="Flamingo" size="small" classes="center"></Hr>
        </Box>
        <PersonList people={people} />
      </Box>
    </>
  )
}

export default Featuring
