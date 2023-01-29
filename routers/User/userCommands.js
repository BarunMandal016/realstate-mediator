const bcrypt = require("bcrypt");
const UserModel = require("../../Models/UserModel");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const { json } = require("sequelize");

async function authentication(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const User = await UserModel.findOne({
      where: {
        email: email,
      },
    });

    console.log(User);
    if (!User) {
      res.send("Email not found");
    }

    bcrypt.compare(password, User.password, (err, result) => {
      if (result) {
        console.log("Authenticate sucessfully.");
        req.userDetails = User.dataValues;
        next();
      } else {
        console.log("Not Authenticate pass");
        res.send("Not Authenticate pass");
      }
    });
  } catch (err) {
    console.log("Error + err.message" + err.message);
  }
}
async function authorization(req, res, next) {
  const user = req.userDetails;
  await jwt.sign(user, "sec", { expiresIn: 1000 }, (err, token) => {
    res.json({
      status: true,
      message: "Authorized Sucessfully",
      users: user,
      token: token,
    });
  });
}
async function verifyToken(req, res, next) {
  console.log("here");
  const token = req.header("Authorization").split(" ")[1];

  try {
    await jwt.verify(token, "sec", { expiresIn: 1000 }, (err, data) => {
      if (data) {
        req.userDetails = data;
        next();
      } else {
        throw err;
      }
    });
  } catch (e) {
    if (e.message == "jwt expired") {
      res.send("session expired");
    } else if (e.message == "invalid token") {
      res.send("invalid token");
    }
  }
}

module.exports = { authentication, authorization, verifyToken };
