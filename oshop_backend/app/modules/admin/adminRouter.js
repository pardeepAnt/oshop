var express = require('express')
var router  = express.Router()
var adminController = require('./controllers/adminController')
var adminValidation = require('./validations/adminValidations')
router.post('/product/create',adminValidation.addproduct,adminController.addproduct)
router.get('/product/list',adminController.list)
router.get('/product/get/:id',adminController.getbyId)
module.exports =router