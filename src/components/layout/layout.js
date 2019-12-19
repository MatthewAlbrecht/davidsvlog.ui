import React from 'react'
import Helmet from 'react-helmet'
import Nav from './nav/nav'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.typekit.net/jdb0mpf.css"
          ></link>
        </Helmet>
        <Nav />
        {children}
      </>
    )
  }
}

export default Template
