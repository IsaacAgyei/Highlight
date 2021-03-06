import React from 'react'
import {Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#ffe8db',
    width: "168px",
  },
}))

const VideoItem = ({newVideoSelection, video }) => {
  const classes = useStyles()
  return (
    <Box mb={1}>
      <Grid container>
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
                  <CardContent className={classes.root}>
                    <Typography>
                      {video.snippet.title}
                    </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default VideoItem

