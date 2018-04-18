var express = require('express')
var router  = express.Router()
var userController = require('./controllers/userController')
var userValidation = require('./validations/userValidation')
router.post('/login',userValidation.login,userController.login)
router.post('/signup/create',userValidation.signup,userController.signup)
module.exports =router