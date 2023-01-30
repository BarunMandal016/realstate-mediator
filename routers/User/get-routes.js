const express = require("express")
const router = express.Router()
const UserModel = require("../../Models/UserModel")
const ProductModel = require("../../Models/productModel")
const PostModel = require("../../Models/postModel")
const landDetailsModel = require("../../Models/landDetailsModel")
const wishListModel = require("../../Models/wishListModel")
const userDetailsModel = require("../../Models/UserDetailsModel")
const sequelize = require("../../Config/sequelize-config")

router.get("/fetch_user-details", (req, res)=>{
  res.status(200).json({
    status: true,
    message : "fetch successfully",
    user : req.userDetails
  })
})

router.get("/get-user", async (req, res) => {
  const userss = await UserModel.findAll()
  res.json(userss)
})

router.get("/getland_details", async (req, res) => {
  try {
    const landDetail = await landDetailsModel.findByPk(req.params.id)
    if (!landDetail) {
      return res.status(404).json({ error: "LandDetail not found" })
    }
    res.json(landDetail)
  } catch (error) {
    res.status(400).json({ message: "cannot find land details" })
  }
})

router.get("/get_product", async (req, res) => {
  try {
    const product = await ProductModel.findByPk(req.params.id)
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }
    res.json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get("/get_wishlist", async (req, res) => {
  try {
    const wishlistItems = await wishListModel.findAll({
      where: { user_id: req.params.user_id }
    })
    res.json(wishlistItems)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get("/get_user_details", async (req, res) => {
  try {
    const userDetail = await userDetailsModel.findOne({
      where: { user_id: req.params.user_id }
    })
    if (!userDetail) {
      return res.status(404).json({ error: "User detail not found" })
    }
    res.json(userDetail)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})


module.exports = router;