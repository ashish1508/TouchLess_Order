const express=require('express')
const router=express.Router()

const orderController=require('../controller/order')

router.post('/all',orderController.postOrder)

module.exports=router