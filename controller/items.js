const d_b=require('../db_firebase').d_b

const mapping={
    "1":"Burgers",
    "2":"Noodles",
    "3":"Pizza",
    "4":"Puffs"
}

exports.getCategories=(req,res,next)=>{
     
    const catRef=d_b.ref('Categories')

    catRef.once('value',snap=>{
        const categories=snap.val()
        const all_Categories=Object.keys(categories)
        res.status(200).json({categories:all_Categories})
    })
}

exports.getItems=(req,res,next)=>{
    const itemId=req.params.itemId
    const itemName=mapping[itemId]

    const itemref=d_b.ref('Categories').child(itemName)
    itemref.once('value',(snap,err)=>{
        if(err){
            console.log(err)
        }
        else{
            const items=Object.values(snap.val())
            res.status(200).json({items:items})
        }
    })
}


