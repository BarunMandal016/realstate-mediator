const bcrypt = require("bcrypt");
const UserModel = require("../../Models/UserModel");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const { json } = require("sequelize");

const tokenExpireTime = 1000

async function authentication(req, res, next) {

  const email = req.body.email;
  const password = req.body.password;

  if (!req || !password){
    res.status(403).json({status : false, message: "bad request."})
    return
  }
  try {
    const User = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    console.log(User);
    if (!User) {
      res.status(403).json({status : false, message: "email not found"})
    }

    bcrypt.compare(password, User.password, (err, result) => {
      if (result) {
        console.log("authenticate successfully.");
        req.userDetails = User.dataValues;
        next();
      } else {
        console.log("password doesn't matched.");
        res.status(403).json({status : false, message: "password doesn't matched."})
      }
    });
  } catch (err) {
    console.log("error: " + err.message);
  }
}

async function authorization(req, res, next) {
  const user = req.userDetails;
  await jwt.sign(user, process.env.SECRET_TOKEN_KEY, { expiresIn: tokenExpireTime }, (err, token) => {
    res.json({
      status: true,
      message: "authorized successfully",
      users: user,
      token: token,
    });
  });
}

async function verifyToken(req, res, next) {

  if (req.header("Authorization") == null){
    res.status(403).json({status : false, message: "token not found."})

  }
  const token = req.header("Authorization").split(" ")[1]

  try {
    await jwt.verify(token, process.env.SECRET_TOKEN_KEY, { expiresIn: tokenExpireTime }, (err, data) => {
      if (data) {
        req.userDetails = data;
        next();
      } else {
        throw err;
      }
    });

  } catch (e) {
    if (e.message === "jwt expired") {
      res.status(403).json({status : false, message: "session expired."})
    } else if (e.message === "invalid token") {
      res.status(403).json({status : false, message: "invalid token."})
    }
  }
}

module.exports = { authentication, authorization, verifyToken };
