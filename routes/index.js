const UserController = require('../controllers/userController')

const router = require('express').Router()
const animals = require('./animals')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)
router.use(animals)

module.exports = router 