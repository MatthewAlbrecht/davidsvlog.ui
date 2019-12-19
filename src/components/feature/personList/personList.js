import React from 'react'
import { Txt, Box, Img } from 'src/components/base/base'

const PersonList = props => {
  const { people } = props

  return (
    <div className="personList">
      {people.map(person => (
        <div key={person.slug}>
          <Box classes="bottom2">
            <Img name="user" />
          </Box>
          <Txt
            tag="p"
            size="14"
            color="Slate"
            classes="center"
            content={
              person.nickname || `${person.firstName} ${person.lastName || ''}`
            }
          />
        </div>
      ))}
    </div>
  )
}

export default PersonList
