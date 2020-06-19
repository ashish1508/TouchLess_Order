const d_b=require('../db_firebase').d_b
let id=1
exports.postOrder=(req,res,next)=>{
    
    const order=req.body.order
    console.log(order)
    const ordRef=d_b.ref('Orders')
    ordRef.push({
        [id]:order
    }).then(result=>{
        console.log('pushed')
        id=id+1
        res.status(200).json({mesage:"success!"})
    })
    .catch(err => console.log(err))
}