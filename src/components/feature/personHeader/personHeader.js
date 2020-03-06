import React from 'react'
import { getDisplayName } from 'src/utils/naming'

import { Txt, Box } from 'src/components/base/base'
import PersonImage from 'src/components/feature/personImage/personImage'

const PersonHeader = ({ person }) => {
  return (
    <div className="personHeader">
      <PersonImage person={person} className="personHeader-image" />
      <Box classes="top3">
        <Txt
          tag="h1"
          size="30 40Md"
          color="Slate"
          align="center"
          bold
          content={getDisplayName(person)}
        />
        <Txt
          tag="span"
          size="12 14Md"
          space="25"
          color="LightSlate"
          align="center"
          classes="block"
          content={person.memberRank[0]}
          uppercase
          semibold
        />
      </Box>
    </div>
  )
}

export default PersonHeader
