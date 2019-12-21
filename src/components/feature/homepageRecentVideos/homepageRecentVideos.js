import React from 'react'
import { Txt, Box } from 'src/components/base/base'
import { Link } from 'gatsby'

const HomepageRecentVideos = props => {
  return (
    <div className="homepageRecentVideos">
      <Txt tag="h2" size="22" color="Slate" content="Recent Videos" />
      {props.episodes
        .map(episode => episode.node)
        .map(episode => (
          <Box key={episode.slug} classes="top2">
            <Link to={`/episode/${episode.slug}`}>
              {episode.number} | {episode.title}
            </Link>
          </Box>
        ))}
    </div>
  )
}

export default HomepageRecentVideos
