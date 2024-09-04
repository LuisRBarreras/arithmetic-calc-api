const serverless = require('serverless-http')
const express = require('express')
const authRouter = require('./routes/auth')
const calcOperation = require('./routes/calc-operation')
const records = require('./routes/records')
const bodyParser = require('body-parser')
const { logger, authToken, pagination } = require('./middlewares')
const { API_VERSIONS } = require('./constants')
const cors = require('cors')

const version = API_VERSIONS.V1
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!!!')
})

app.get('/health-check', (req, res, next) => {
  return res.status(200).json({
    message: 'health-check path!'
  })
})

app.use(`/${version}/auth`, authRouter)

app.use(`/${version}/operation`, authToken, calcOperation)
app.use(`/${version}/records`, authToken, pagination, records)

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not found'
  })
})

module.exports.handler = serverless(app)
