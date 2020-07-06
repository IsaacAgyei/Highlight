import React from 'react'
import {Grid, Typography, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core'


const VideoItem = ({newVideoSelection, video }) => {
  return (
    <div>
        <Grid item xs={12}>
          <Card>
              <CardActionArea>
                  <CardMedia 
                    component= 'img'
                    height='100px'
                    title={video.snippet.title} 
                    src={video.snippet.thumbnails.medium.url}
                    onClick={() => newVideoSelection(video)} 
                    alt='Thumbnails of videos in video search'
                    />
                  <CardContent>
                    <Typography>
                      {video.snippet.title}
                    </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
        </Grid>
    </div>
  )
}

export default VideoItem

