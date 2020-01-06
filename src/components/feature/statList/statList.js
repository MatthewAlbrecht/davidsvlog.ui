import React from 'react'

import { Txt, Container, Box } from 'src/components/base/base'

const StatList = props => {
  return (
    <div className="statList">
      {[1, 2, 3, 4].map(item => (
        <div className="statList-item" key={item}>
          <Txt
            tag="h1"
            size="30 40Md"
            color="DarkTeal"
            align="center"
            bold
            content="625"
          />
          <Txt
            tag="span"
            size="12"
            color="Slate"
            align="center"
            classes="block"
            content="First Vlog"
          />
        </div>
      ))}
    </div>
  )
}

export default StatList
