import React from 'react'
import PersonList from '../personList/personList'
import EpisodeHeading from '../episodeHeading/episodeHeading'

const Featuring = props => {
  const { people } = props

  return (
    <>
      <EpisodeHeading title="Featuring" />
      <PersonList people={people} />
    </>
  )
}

export default Featuring
