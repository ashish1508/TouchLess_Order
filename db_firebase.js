const  admin=require('firebase-admin')
const serviceAccount=require('./serviceAcc.json')
admin.initializeApp({
    databaseURL:'https://appstore-8276c.firebaseio.com/',
    credential:admin.credential.cert(serviceAccount)
})

const db=admin.database();  

module.exports.d_b=db
module.exports.admin=admin