const express = require("express")
const router = express.Router()
const UserModel = require("../../Models/UserModel")
const ProductModel = require("../../Models/productModel")
const PostModel = require("../../Models/postModel")
const landDetailsModel = require("../../Models/landDetailsModel")
const wishListModel = require("../../Models/wishListModel")
const userDetailsModel = require("../../Models/UserDetailsModel")
const sequelize = require("../../Config/sequelize-config")

router.post("/add-land", async (req, res) => {
  try {
    const landDetails = await landDetailsModel.create(req.body)
    res.status(200).json(newLandDetail)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post("/post_product", async (req, res) => {
  try {
    const product = await ProductModel.create(req.body)
    res.json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post("/post_wishlist", async (req, res) => {
  try {
    const { user_id, land_id, post_id } = req.body
    const newWishlistItem = await wishListModel.create(req.body)
    res.json(newWishlistItem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.post("/post_user_details", async (req, res) => {
  try {
    const newUserDetail = await userDetailsModel.create(req.body)
    res.status(201).json(newUserDetail)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
