import React from 'react';
import TwitterSearchBar from './components/twittercomponent/TwitterSearchBar'
import YoutubeSearchBar from './components/youtubecomponent/YoutubeSearchBar'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '10px',
    overflow: 'auto',
  },
  grid: {
    direction: 'row',
    justify: 'space-around',
    alignItems:'flex-start'
  }
})

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item className={classes.root} xs={12}>
          <YoutubeSearchBar/>
        </Grid>
      </Grid>
      <Grid container className={classes.grid}>
        <Grid item className={classes.root}xs={12}>
          <TwitterSearchBar/>
        </Grid>
      </Grid>
    </div>
  )
};
