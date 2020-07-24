const {createServer} = require('http')
require('dotenv').config()
const axios = require('axios')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const Twit = require('twit')
const cors = require('cors')
const bodyParser = require('body-parser')

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

const app = express()
const dev = app.get('env') !== 'production'

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

if(!dev) {
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

if(dev) {
  app.use(morgan('dev'))
}

let T = new Twit ({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
})

const axiosCreate = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/"
})


app.post('/', (req, res) => {
  let screenName = req.body.userName
  let query = req.body.youtubeSearchQuery
  let arrayUserData = []
  
  if(query) {
    axiosCreate.get('/search', {
      params: {
        key: process.env.YOUTUBE_API_KEY,
        part:'snippet',
        maxResults: 7,
        q: query,
        type: 'video'
      }
    })
    .then(response => {
      res.send(response.data)
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  if (screenName) {
    T.get('users/search', {q: screenName, page: 1, count: 20}, function(err, data, response) {
      data.map(users => arrayUserData.push(users))
      console.log(arrayUserData)
      res.send(arrayUserData)
    })
  }
})

const server = createServer(app)

server.listen(PORT, err => {
  if(err) throw err
  console.log('Server started!')
})