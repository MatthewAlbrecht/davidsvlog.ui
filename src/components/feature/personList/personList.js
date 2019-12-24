import React from 'react'
import { Txt, Box, Img as Image } from 'src/components/base/base'
import Img from 'gatsby-image'

const PersonList = props => {
  const { people } = props
  function renderImg(person) {
    if (person.image) {
      return (
        <Img
          className="personList-image"
          alt={
            person.nickname || `${person.firstName} ${person.lastName || ''}`
          }
          fluid={person.image.fluid}
        ></Img>
      )
    }
    return <Image name="user" />
  }
  return (
    <div className="personList">
      {people.map(person => (
        <div key={person.slug}>
          <Box classes="bottom2">{renderImg(person)}</Box>
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
