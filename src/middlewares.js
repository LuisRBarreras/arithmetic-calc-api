const jwt = require('jsonwebtoken')
const { SECRET_AUTH_KEY } = require('./constants')

const logger = function (req, res, next) {
  // Add a Logger Library
  const requestInfo = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: req.body,
    path: req.path,
    query: req.query,
    hostname: req.hostname,
    params: req.params
  }
  console.log(`Request: ${JSON.stringify(requestInfo)}`)
  next()
}

function authToken (req, res, next) {
  const token = req.header('Authorization')
  if (!token) {
    return res.status(401).json({ error: 'Token not valid' })
  }

  try {
    const decoded = jwt.verify(token, SECRET_AUTH_KEY)
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

function pagination (req, res, next) {
  req.query.size = Number.parseInt(req.query.size) || 10
  req.query.page = Number.parseInt(req.query.page) || 0

  return next()
}

module.exports = {
  logger,
  authToken,
  pagination
}
