import React from 'react'
import { Img } from 'src/components/base/base'

const PersonImage = ({ person, className }) => {
  if (person.image) {
    return <img className={className} src={person.image.file.url} alt="" />
  }

  return <Img className={className} name="avatarMale" />
}

export default PersonImage
