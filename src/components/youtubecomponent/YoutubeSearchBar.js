import React,{ useState } from 'react'
import { Grid, Button, Box, GridList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { axiosCreate } from './apis/youtube.js'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#f2f2f2'
  },
  gridList: {
    width: 200,
    height: 450,
  },
  searchBarDimensions: {
    height: '45px',
    fontSize: '35px',
    display: 'flex',
  },
  searchButtonDimensions: {
    height: '50px',
    display: 'flex',
  },
}))

function SearchBar() {
  const classes = useStyles()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [videos, setVideo] = useState([])
  const [selectedVideo, setSelectedVideos] = useState(null)

  const handleChange = (event) => setSearchTerm(event.target.value)
  const onVideoSelect = (video) => setSelectedVideos(video)

  async function handleClick() {
    const response = await axiosCreate.get('/search',{
      params: {
        key: process.env.YOUTUBE_API_KEY,
        part:'snippet',
        maxResults: 1,
        q: searchTerm,
        type: 'video'
      }
    })
    setVideo(response.data.items)
    setSelectedVideos(response.data.items['0'])
    console.log(response.data.items)
  }

  return (
    <div>
        <Grid container className={classes.root}>
          <Grid item>
            {<input 
              className={classes.searchBarDimensions}
              type='text' 
              value={searchTerm} 
              placeholder='Search Youtube...'
              onChange={handleChange}
            />}
          </Grid>
          <Grid item>
             <Button 
              className={classes.searchButtonDimensions}
              color='primary' 
              variant='contained' 
              onClick={handleClick}>Search</Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-start" className={classes.root}>
          <Grid item>
            <VideoDetail clickedVideo={selectedVideo}/>
          </Grid>
          <Box ml={1}>
            <GridList className={classes.gridList}>
              <VideoList videoWasSelected={onVideoSelect} videoInList={videos}/>
            </GridList>
          </Box>
        </Grid>
    </div>
  )
}
export default SearchBar