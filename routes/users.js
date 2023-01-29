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
    await UserModel.create(user)
    res.status(201).json({ message: "user created" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.post("/login", authentication, authorization, (req, res) => {
  console.log(req.userDetails)
})

router.use("/user", User)

module.exports = router
