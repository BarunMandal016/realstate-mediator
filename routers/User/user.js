const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const postRouter = require('../../routers/User/post-routes')
const UserModel = require('../../Models/UserModel')
const jwt = require("jsonwebtoken");
const { token } = require('morgan');
const {authentication ,authorization,verifyToken} = require('../User/userCommands')




const time = 10000

router.post('/signup' , async (req , res ) =>{
    try {
        const user = req.body
        user.password = await bcrypt.hash(user.password, 10)
        await UserModel.create(user)
        res.status(201).json({message : 'user created'})
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
    
})


router.post('/login',authentication, authorization,(req , res) =>{
  console.log(req.userDetails)

})


router.post("/token", (req, res)=>{
    const token = req.body.token
    console.log(Verify(token))

    if(Verify(token)){
        res.send("verified")
    }else{
        res.send("not verified")

    }

})


function Verify(token){
   try{
    const isVerified =  jwt.verify(token, "secret",{expiresIn:time},(err, data)=>{
        console.log({value : data})
    })
    
   return true
}
    
   catch(err){
    console.log(err.message)
    return false
   }
  
}

router.use(verifyToken)
router.use(postRouter)

module.exports = router