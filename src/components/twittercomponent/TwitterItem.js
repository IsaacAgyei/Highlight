import React from 'react'
import {Grid, Box, Typography, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#82cdff',
    width: "168px",
  },
}))


function TwitterItem({newUserSelection, profile}) {
  const classes = useStyles()
  return (
    <Box mb={1}>
      <Grid container>
        <Grid item xs={12}>
          <Card> 
              <CardActionArea>
                  <CardMedia 
                    component= 'img'
                    height='150px'
                    title={profile.screen_name} 
                    src={profile.profile_image_url_https.replace('_normal', '')}
                    onClick={() => newUserSelection(profile)} //need to pass the full profile object
                    alt={profile.screen_name}
                    />
                  <CardContent className={classes.root}>
                    <Typography>
                      {profile.screen_name}
                    </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TwitterItem