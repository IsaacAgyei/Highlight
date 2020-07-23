import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import image from "../assets/studiojq2015_explore_web.jpg"

const VideoDetail = ({clickedVideo}) => {
  const useStyles = makeStyles({
    videoPlayerDimensions: {
      width:'580px',
      height: '450px',
    }
  })
  const classes = useStyles()
  
  if(!clickedVideo) return <div><img alt='video loading' width={600} src={image}/></div>
  const videoSrc = `http://www.youtube.com/embed/${clickedVideo.id.videoId}`

  return (
    <div>
        <iframe className={classes.videoPlayerDimensions}
          frameBorder='0' 
          title='Video Player'
          src={videoSrc}
        />
    </div>
  )
}
export default VideoDetail

