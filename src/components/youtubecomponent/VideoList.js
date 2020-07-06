import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videoInList, videoWasSelected}) => {
  const listOfVideos = videoInList.map((video) => <VideoItem video={video} newVideoSelection={videoWasSelected} key={video.etag}/>)
  return (
    listOfVideos
  )
}
export default VideoList