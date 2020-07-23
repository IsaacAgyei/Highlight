import React from 'react'
import TwitterItem from './TwitterItem'

function TwitterList({profileWasSelected, profilesInList}) {
  
  const listOfProfiles = profilesInList.map((profile) => <TwitterItem profile={profile} newUserSelection={profileWasSelected}  key={profile.id} />)

  return (
    listOfProfiles
  ) 
}

export default TwitterList