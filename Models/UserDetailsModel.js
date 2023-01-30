const sequelize = require("../Config/sequelize-config");
const { DataTypes, Model } = require("sequelize");

class userDetailsModel extends Model {}

userDetailsModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    district: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    zone: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user_details",
  }
);

// userDetailsModel.sync()
module.exports = userDetailsModel;
