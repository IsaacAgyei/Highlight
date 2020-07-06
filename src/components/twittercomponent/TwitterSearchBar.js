import React from 'react'
import axios from 'axios'


function TwitterSearchBar() {
  const twitterUsers = axios.create({
    baseURL: "https://api.twitter.com/1.1/users/search.json"
  })

  let users = twitterUsers.get("https://api.twitter.com/1.1/users/search.json", {
    params: {
      q: "Drake",
      page: 1,
      count: 10,
      include_entities: false,
      key: process.env.TWITTER_API_KEY
    }
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

  return (
    <div>
      <p>{users}</p>
    </div>
  )
}

export default TwitterSearchBar