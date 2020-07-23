const {createServer} = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const { normalize } = require('path')
const Twit = require('twit')
const Twitter = require('twitter')
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


app.post('/', (req, res) => {
  let screenName = req.body.userName
  let arrayUserData = []
  if (screenName !== "" || screenName !== undefined) {
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