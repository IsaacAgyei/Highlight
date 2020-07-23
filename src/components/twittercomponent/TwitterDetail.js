import React from 'react'
import image from '../assets/twitterBird.jpg'
import { Timeline } from 'react-twitter-widgets'
import {Grid} from '@material-ui/core'


const TwitterDetail = ({clickedProfile}) => {

  if (!clickedProfile) return (
    <div>
      <img alt="loading page"src={image} width={600} height={500}/>
    </div>
  ) 
  const profileScreenName = JSON.stringify(clickedProfile.screen_name)

  return (
      <div className='twitterFeed'>
        <Grid>
          <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: JSON.parse(profileScreenName)
              }}
              options={{
                height: '500'
              }}
            />
        </Grid>
      </div>
  )
}
export default TwitterDetail