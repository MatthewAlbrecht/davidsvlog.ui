import React from 'react'

import { Txt, Container, Box } from 'src/components/base/base'

const StatList = ({ stats }) => {
  return (
    <div className="statList">
      {stats.map((item, i) => (
        <div className="statList-item" key={i}>
          <Txt
            tag="h1"
            size="40"
            color="DarkTeal"
            align="center"
            bold
            content={item.value}
          />
          <Txt
            tag="span"
            size="14"
            color="Slate"
            align="center"
            classes="block"
            content={item.label}
          />
        </div>
      ))}
    </div>
  )
}

export default StatList
