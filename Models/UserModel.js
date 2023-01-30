    const sequelize = require('../Config/sequelize-config')
    const {DataTypes , Model } = require('sequelize')


    class UserModel extends Model{}

    UserModel.init({
        id :{
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            unique : true,
            allowNull: false

        },
        name :{
            type : DataTypes.STRING,
            allowNull : false
        },

        username :{
            type : DataTypes.STRING,
            unique: true,
            allowNull : false
        },
        email:{
            type : DataTypes.STRING,
            allowNull : false,
            unique: true,
            validate:{
                isEmail : true
            }
        },
        password :{
            type : DataTypes.STRING,
            allowNull : false
            }
        },
        {
        sequelize,
        modelName : "users"
        }
    )
    


// UserModel.sync()

module.exports = UserModel