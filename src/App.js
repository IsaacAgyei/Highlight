import React from 'react';
import Twitter from './components/Twitter'
import Instagram from './components/Instagram'
import YoutubeSearchBar from './components/youtubecomponent/YoutubeSearchBar'
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    height:'600px',
    padding: '10px',
    overflow: 'auto',
  },
  grid: {
    direction: 'row',
    justify: 'space-evenly',
    alignItems:'center'
  }
})

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}spacing={6}>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Instagram/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Twitter/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={0}>
        <YoutubeSearchBar/>
      </Grid>
    </div>
  )
};
