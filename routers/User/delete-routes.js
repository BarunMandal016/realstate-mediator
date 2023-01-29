const express = require("express")
const router = express.Router()
const UserModel = require("../../Models/UserModel")
const ProductModel = require("../../Models/productModel")
const PostModel = require("../../Models/postModel")
const landDetailsModel = require("../../Models/landDetailsModel")
const wishListModel = require("../../Models/wishListModel")
const userDetailsModel = require("../../Models/UserDetailsModel")
const sequelize = require("../../Config/sequelize-config")

router.delete("/Delete", async (req, res) => {
  await UserModel.destroy({
    where: {
      email: "barun123@gmail.com"
    }
  })
  res.send("Deleted")
})

router.delete("delete_land", async (req, res) => {
  try {
    const landDetail = await landDetailsModel.findByPk(req.params.id)
    if (!landDetail) {
      return res.status(404).json({ error: "LandDetail not found" })
    }
    await landDetail.destroy()
    res.json({ message: "LandDetail deleted successfully" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete("/delete_products", async (req, res) => {
  try {
    const product = await ProductModel.findByPk(req.params.id)
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }
    await product.destroy()
    res.json({ message: "Product deleted" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete("/delete_wishlist", async (req, res) => {
  try {
    const deletedWishlistItem = await wishListModel.destroy({
      where: { id: req.params.id }
    })
    res.json(deletedWishlistItem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete("/delete_user_details", async (req, res) => {
  try {
    const userDetail = await userDetailsModel.findOne({
      where: {
        user_id: req.params.user_id
      }
    })
    if (!userDetail) {
      return res.status(404).json({ error: "User detail not found" })
    }
    await userDetail.destroy()
    res.json({ message: "User detail deleted" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
