const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize({
    host: 'localhost',
    username : "root",
    password : "123456",
    database : "real_estate",
    dialect: 'mysql',
    timezone : "+05:45"
    
})



try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }




module.exports = sequelize