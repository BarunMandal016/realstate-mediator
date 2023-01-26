var express = require('express');
var router = express.Router();
const User = require('../routers/User/user')

router.use('/user',User)


module.exports = router;
