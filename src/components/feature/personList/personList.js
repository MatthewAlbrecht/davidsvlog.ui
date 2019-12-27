import React from 'react'
import { Txt, Box, Img as Image } from 'src/components/base/base'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const PersonList = props => {
  const { people } = props
  function renderImg(person) {
    console.log(person.image)

    if (person.image) {
      return (
        <img className="personList-image" src={person.image.file.url} alt="" />
        // <Img
        //   className="personList-image"
        //   alt={
        //     person.nickname || `${person.firstName} ${person.lastName || ''}`
        //   }
        //   fluid={person.image.fluid}
        // ></Img>
      )
    }
    return <Image className="personList-image" name="avatarMale" />
  }
  return (
    <ul className="personList">
      {people.map(person => (
        <li key={person.slug} className="personList-item">
          <Link to={`/member/${person.slug}`}>
            <div className="personList-imageOuterBox">
              <div
                className={`personList-imageInnerBox personList-imageInnerBox--${person.slug}`}
              >
                {renderImg(person)}
              </div>
            </div>
            <Box classes="top2">
              <Txt
                tag="p"
                size="14"
                color="Slate"
                classes="center"
                className="personList-name"
                content={
                  person.nickname ||
                  `${person.firstName} ${person.lastName || ''}`
                }
              />
            </Box>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PersonList
