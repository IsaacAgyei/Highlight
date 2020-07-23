import React, { useState } from 'react';
import { Grid, Button, Box, GridList } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TwitterList from './TwitterList'
import axios from 'axios'
import TwitterDetail from './TwitterDetail';

const useStyles = makeStyles( () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-even',
    overflow: 'hidden',
    backgroundColor: '#cbfafa'
  },
  gridList: {
    width: 200,
    height: 500,
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
}));


function TwitterSearchBar() {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState('')
  const [userList, setUserList] = useState([])

  const [selectedProfile, setselectedProfile] = useState(null)

  const handleChange = (event) => setSearchTerm(event.target.value)
  const onProfileSelect = (profile) => setselectedProfile(profile)

  function handleClick() {
    axios.post('http://localhost:5000/', {
      userName: searchTerm
    })
    .then(res => {
      setUserList(res.data.map(users => users))
      setselectedProfile(res.data[0])
      })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Grid container className={classes.root}>
          <Grid item>
            {<input 
              className={classes.searchBarDimensions}
              type='text' 
              value={searchTerm} 
              placeholder='Search Twitter...'
              onChange={handleChange}
            />}
          </Grid>
          <Grid item>
             <Button 
              className={classes.searchButtonDimensions}
              color='secondary' 
              variant='contained' 
              onClick={handleClick}>Search</Button>
          </Grid>
        </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={5}>
          <TwitterDetail clickedProfile={selectedProfile}/>
        </Grid>
        <Box ml={1}>
          <GridList className={classes.gridList}> 
            <TwitterList profileWasSelected={onProfileSelect} profilesInList={userList} />
          </GridList>
        </Box> 
      </Grid>
  </div>
  )
}

export default TwitterSearchBar;