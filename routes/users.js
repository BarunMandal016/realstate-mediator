var express = require("express")
var router = express.Router()
const User = require("../routers/User/user")
const bcrypt = require("bcrypt")
const UserModel = require("../Models/UserModel")
const {
  authentication,
  authorization
} = require("../routers/User/userCommands")

router.post("/signup", async (req, res) => {
  try {
    const user = req.body
    user.password = await bcrypt.hash(user.password, 10)
    const userResult = await UserModel.create(user).then(()=>{
      res.status(201).json({ message: "user created" })

    }).catch((e)=>{
      throw e;
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({ status: false, message: error.original.sqlMessage })
  }
})

router.post("/login", authentication, authorization, (req, res) => {
  console.log(req.userDetails)
})

router.use("/user", User)

router.use((req, res)=>{
  res.status(404).json({status : false, message: "url not found."})

})
module.exports = router
