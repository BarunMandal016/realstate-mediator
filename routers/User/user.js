const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const getRouter = require("../../routers/User/get-routes")
const postRouter = require("../../routers/User/post-routes")
const deleteRouter = require("../../routers/User/delete-routes")
const updateRoter = require("../../routers/User/update-routes")
const UserModel = require("../../Models/UserModel")

const jwt = require("jsonwebtoken")
const { verifyToken } = require("../User/userCommands")



router.use(verifyToken)
router.use(getRouter)
router.use(postRouter)
router.use(deleteRouter)
router.use(updateRoter)

module.exports = router
