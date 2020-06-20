const express=require('express')
const router=express.Router()

const tokenController=require('../controller/token')

router.post('/post',tokenController.postToken)

module.exports=router