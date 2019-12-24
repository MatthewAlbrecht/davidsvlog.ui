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
          <script>
            {typeof document !== `undefined` &&
              (function(d) {
                var config = {
                    kitId: 'jdb0mpf',
                    scriptTimeout: 3000,
                    async: true,
                  },
                  h = d.documentElement,
                  t = setTimeout(function() {
                    h.className =
                      h.className.replace(/\bwf-loading\b/g, '') +
                      ' wf-inactive'
                  }, config.scriptTimeout),
                  tk = d.createElement('script'),
                  f = false,
                  s = d.getElementsByTagName('script')[0],
                  a
                h.className += ' wf-loading'
                tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
                tk.async = true
                tk.onload = tk.onreadystatechange = function() {
                  a = this.readyState
                  if (f || (a && a != 'complete' && a != 'loaded')) return
                  f = true
                  clearTimeout(t)
                  try {
                    Typekit.load(config)
                  } catch (e) {}
                }
                s.parentNode.insertBefore(tk, s)
              })(document)}
          </script>
        </Helmet>
        <Nav />
        <main className="main">{children}</main>
      </>
    )
  }
}

export default Template
