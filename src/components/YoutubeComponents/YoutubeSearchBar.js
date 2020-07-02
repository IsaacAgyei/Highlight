import React,{useState} from 'react'
import {Grid, Button, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {API_KEY, axiosCreate} from '../apis/youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  cardImageDimensions: {
    maxWidth: '345px',
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
  videoPlayerDimensions: {
    width:'500px',
    height: '400px',
  }
})

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
        key: API_KEY,
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
    <React.Fragment>
      <React.Fragment>
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={0}className={classes.root}>
          <Grid item>
            {<input 
              className={classes.searchBarDimensions}
              type='text' 
              value={searchTerm} 
              placeholder='Search...'
              onChange={handleChange}
            />}
          </Grid>
          <Grid item>
             <Button 
              className={classes.searchButtonDimensions}
              color='primary' 
              variant='outlined' 
              onClick={handleClick}>Search</Button>
          </Grid>
        </Grid>
      </React.Fragment>
      <React.Fragment>
        <Grid container container direction="row" justify="flex-start" className={classes.root} spacing={2}>
          <Grid item xs={0}>
            <VideoDetail clickedVideo={selectedVideo}/>
          </Grid>
          <Grid item xs={0}>
            <VideoList videoWasSelected={onVideoSelect} videoInList={videos}/>
          </Grid>
        </Grid>
      </React.Fragment>
    </React.Fragment>
  )
}
export default SearchBar