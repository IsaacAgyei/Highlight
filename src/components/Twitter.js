import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';


function Twitter() {
  return (
      <div className='twitterFeed'>
       <TwitterTimelineEmbed
          sourceType="profile"
          screenName="abdashsoul"
          options={{height: 650}}
        /> 
      </div>
  )
}
export default Twitter