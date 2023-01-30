const sequelize = require("../Config/sequelize-config");
const { DataTypes, Model } = require("sequelize");

class PostModel extends Model {}

PostModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    post_type: {
      type: DataTypes.ENUM,
      values: ["sell", "rent"],
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "posts",
  }
)

// PostModel.sync()

module.exports = PostModel;
