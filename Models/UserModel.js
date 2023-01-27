    const sequelize = require('../Config/sequelize-config')
    const {DataTypes , Model } = require('sequelize')


    class UserModel extends Model{}

    UserModel.init(
    {   
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
    } ,
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
    
    UserModel.init(
    {
    id :{ 
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        unique : true,
        allowNull: false

    },
    userID:{
        type : DataTypes.STRING,
        unique : true,
        allowNull : false
    },
    phone :{
        type : DataTypes.INTEGER,
        unique : true,
        allowNull : false
    },
    state :{
        type : DataTypes.INTEGER,
        unique : false,
        allowNull : false
    },
    district :{
        type : DataTypes.INTEGER,
        unique : false,
        allowNull : false
    },
    zone :{
        type : DataTypes.INTEGER,
        unique : false,
        allowNull : false
    },
    city :{
        type : DataTypes.STRING,
        allowNull : false,
        unique : false
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }


    },
    {
    sequelize,
    modelName : "userDetails"
    }
    )

    UserModel.init(
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
    allowNull: false
    },
    district_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    zone_id: {
    type: DataTypes.INTEGER,
    allowNull: false
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
    allowNull: false
    },
    road_width: {
    type: DataTypes.FLOAT,
    allowNull: false
    },
    highway_name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    distance_from_highway: {
    type: DataTypes.FLOAT,
    allowNull: false
    },
    front_face_length: {
    type: DataTypes.FLOAT,
    allowNull: false
    },
    road_direction: {
    type: DataTypes.STRING,
    allowNull: false
    },
    longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
    },
    latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
    }
    },
    {
    sequelize,
    modelName : "landDetails"
    }

    )


    UserModel.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique : true,
        allowNull: false
    },
    product_type: {
        type: DataTypes.STRING,
        allowNull: false

    },
    property_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
    },
    {
    sequelize,
    modelName : "product"
    }

    )

    UserModel.init(
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_type: {
        type: DataTypes.ENUM,
        values: ['sell', 'rent', 'other'],
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    },
    {
    sequelize,
    modelName : "posts"
    }
    )

    UserModel.init(
    {
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

    // UserModel.sync({force : true})

    module.exports = UserModel