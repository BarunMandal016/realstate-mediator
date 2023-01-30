const express = require("express")
const router = express.Router()
const UserModel = require("../../Models/UserModel")
const ProductModel = require("../../Models/productModel")
const PostModel = require("../../Models/postModel")
const landDetailsModel = require("../../Models/landDetailsModel")
const wishListModel = require("../../Models/wishListModel")
const userDetailsModel = require("../../Models/UserDetailsModel")
const sequelize = require("../../Config/sequelize-config")

router.put("/update", async (req, res) => {
  await UserModel.update(
    { email: "barun123@gmail.com" },
    {
      where: {
        username: "Barun"
      }
    }
  )
  res.send("Updated")
})

router.put("/update_land_details", async (req, res) => {
  try {
    const landDetail = await landDetailsModel.findByPk(req.params.id)
    if (!landDetail) {
      return res.status(404).json({ error: "LandDetail not found" })
    }
    await landDetail.update(req.body)
    res.json({ message: "LandDetail updated successfully" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.put("/update_products", async (req, res) => {
  try {
    const product = await ProductModel.findByPk(req.params.id)
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }
    await product.update(req.body)
    res.json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.put("/update_wishlist", async (req, res) => {
  try {
    const updatedWishlistItem = await wishListModel.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updatedWishlistItem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.put("/update_user_details", async (req, res) => {
  try {
    const userDetail = await userDetailsModel.findOne({
      where: {
        user_id: req.params.user_id
      }
    })
    if (!userDetail) {
      return res.status(404).json({ error: "User detail not found" })
    }
    await userDetail.update(req.body)
    res.json(userDetail)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})


module.exports = router