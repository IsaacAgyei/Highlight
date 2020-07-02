import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import image from "../assets/studiojq2015_explore_web.jpg"

const VideoDetail = ({clickedVideo}) => {
  const useStyles = makeStyles({
    videoPlayerDimensions: {
      width:'800px',
      height: '400px',
    }
  })
  const classes = useStyles()
  
  if(!clickedVideo) return <div><img alt='video loading' src={image}/></div>
  const videoSrc = `http://www.youtube.com/embed/${clickedVideo.id.videoId}`

  return (
    <React.Fragment>
        <iframe className={classes.videoPlayerDimensions}
          frameBorder='0' 
          title='Video Player'
          src={videoSrc}
        />
    </React.Fragment>
  )
}
export default VideoDetail

