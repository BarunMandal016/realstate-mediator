const sequelize = require('../Config/sequelize-config')
const {DataTypes , Model } = require('sequelize')


class wishListModel extends Model{}

wishListModel.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        land_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName : "wishlist"
    }
    
)
// wishListModel.sync()
module.exports = wishListModel