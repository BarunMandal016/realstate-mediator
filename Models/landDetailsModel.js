const sequelize = require("../Config/sequelize-config");
const { DataTypes, Model } = require("sequelize");

class landDetailsModel extends Model {}

landDetailsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    zip_code: {
      type: DataTypes.INTEGER,
    },

    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    distance_from_city: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    road_width: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    highway_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    distance_from_highway: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    front_face_length: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    road_direction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "landDetails",
  }
);
// landDetailsModel.sync()
module.exports = landDetailsModel;
