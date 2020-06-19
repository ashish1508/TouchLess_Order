const  Firebase=require('firebase')

Firebase.initializeApp({
    databaseURL:'https://appstore-8276c.firebaseio.com/',
    serviceAccount:'../serviceAcc.json'
})

const db=Firebase.database();  

module.exports.d_b=db