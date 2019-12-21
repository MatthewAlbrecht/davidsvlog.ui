export function videoIdFromUrl(url) {
  let videoId = url.split('v=')[1]
  let ampersandPosition = videoId.indexOf('&')
  if (ampersandPosition != -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
  return videoId
}
