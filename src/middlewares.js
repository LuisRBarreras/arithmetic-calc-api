const jwt = require('jsonwebtoken')

const secretAuthKey = process.env.SECRET_AUTH_KEY

const logger = function (req, res, next) {
  // Add a Logger Library
  console.log(`Request: ${req}`)
  next()
}

// TODO Delete if not needed
// const addUser = async function (req, res, next) {
//   console.log('ADD USER')
//   if (req.query.userId) {
//     const userService = ServiceFactory.getUserService()
//     const foundUser = await userService.find({id: req.query.userId})
//   }
//   next()
// }

function authToken (req, res, next) {
  const token = req.header('Authorization')
  if (!token) {
    return res.status(401).json({ error: 'Token not valid' })
  }

  try {
    const decoded = jwt.verify(token, secretAuthKey)
    console.log({decoded})
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = {
  logger,
  authToken
}
