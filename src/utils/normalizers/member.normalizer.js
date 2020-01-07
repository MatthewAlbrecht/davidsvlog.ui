import get from 'lodash/get'

export const getMemberStats = data => {
  const person = get(data, 'contentfulCastMember')
  const mostRecentAppearance = get(data, 'recentEpisodes.edges[0].node.number')
  const totalEpisodes = get(data, 'recentEpisodes.totalCount')
  const mostRecentEpisode = get(data, 'mostRecentEpisode.edges[0].node.number')
  const firstEpisode = get(data, 'firstEpisode.edges[0].node.number')

  let episodesSince

  if (mostRecentAppearance && mostRecentEpisode) {
    episodesSince = (mostRecentEpisode - mostRecentAppearance).toString()
  } else {
    episodesSince = '?'
  }

  return [
    {
      value: firstEpisode || '?',
      label: 'First Vlog',
    },
    {
      value: totalEpisodes || '?',
      label: 'Total Appearances',
    },
    {
      value: episodesSince,
      label: 'Vlogs Since Last Appearance',
    },
    {
      value: person.birthday || '?',
      label: 'Years Old',
    },
  ]
}
