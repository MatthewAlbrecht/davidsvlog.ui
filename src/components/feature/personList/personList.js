import React from 'react'
import { getDisplayName } from 'src/utils/naming'

import { Link } from 'gatsby'
import PersonImage from 'src/components/feature/personImage/personImage'
import { Txt, Box } from 'src/components/base/base'

const PersonList = ({ people }) => {
  if (!people) return null;

  return (
    <ul className="personList">
      {people.map(person => (
        <li key={person.slug} className="personList-item">
          <Link to={`/member/${person.slug}`}>
            <div className="personList-imageOuterBox">
              <div
                className={`personList-imageInnerBox personList-imageInnerBox--${person.slug}`}
              >
                <PersonImage person={person} className="personList-image" />
              </div>
            </div>
            <Box classes="top2">
              <Txt
                tag="p"
                size="14"
                color="Slate"
                classes="center"
                className="personList-name"
                content={getDisplayName(person)}
              />
            </Box>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PersonList
