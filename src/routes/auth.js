const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ServiceFactory = require('../services')

const secretAuthKey = process.env.SECRET_AUTH_KEY

const router = express.Router()
router.post('/login', async (req, res, next) => {
  try {
    const payload = req.body
    const userService = ServiceFactory.getUserService()
    const userFound = await userService.find(
      { username: payload.username }
    )
    if (!userFound) {
      next(new Error('User not found'))
      return
    }

    const authorize = await bcrypt.compare(payload.password, userFound.password)
    if (!authorize) {
      next(new Error('Invalid credentials'))
      return
    }

    console.log('UserFound:', userFound)
    const token = jwt.sign({ userId: userFound.id }, secretAuthKey, {
      expiresIn: '12h'
    })
    res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
