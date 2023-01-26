const express = require('express')
const router = express.Router()
const UserModel = require('../../Models/UserModel')

const sequelize = require("../../Config/sequelize-config")



router.post('/post', async(req,res) =>{
  try{
    const user = req.body

    console.log(user)

      const userData = await UserModel.create(user)
      .catch((e)=>{
        console.log(e.message)
        res.json({status: false, message: e.message})
      });

      await userData.save()
        res.json({data : userData});

  }catch(e){
    console.log(e)
  }
  
})


router.get("/getUser", async(req, res)=>{
  const userss = await UserModel.findAll()
  res.json(userss)
})

router.put('/update' , async(req, res)=>{
 await UserModel.update({email : "barun123@gmail.com"} , {
  where : {
    username : "Barun"
  }
 })
 res.send("Updated")
})

router.delete('/Delete' , async(req , res ) => {
  await UserModel.destroy({
    where: {
      email: "barun123@gmail.com"
    }
  })
  res.send("Deleted")
})


module.exports = router