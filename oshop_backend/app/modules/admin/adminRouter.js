var express = require('express')
var router  = express.Router()
var adminController = require('./controllers/adminController')
var adminValidation = require('./validations/adminValidations')
/* PROUDUCT FUNCTIONS */
router.post('/product/create',adminValidation.addproduct,adminController.addproduct)
router.put('/product/update',adminValidation.updateproduct,adminController.updateproduct)
router.get('/product/list',adminController.list)
router.delete('/product/delete/:id',adminController.deleteProduct)
router.get('/product/get/:id',adminController.getbyId)
/*CART FUNCTIONS */
router.post('/addCart/create',adminController.addCart)

module.exports =router