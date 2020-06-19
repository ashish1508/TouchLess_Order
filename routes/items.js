const express=require('express')
const router=express.Router()

const itemController=require('../controller/items')

router.get('/all',itemController.getCategories)

router.get('/all/:itemId', itemController.getItems)

module.exports=router