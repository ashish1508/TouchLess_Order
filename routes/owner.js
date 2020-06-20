const express=require('express')
const router=express.Router()

const ownerController=require('../controller/owner')

router.get('/allOrders',ownerController.getOrders)

module.exports=router