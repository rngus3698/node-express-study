const express = require('express');
const router = express.Router();
const userValidator = require("../validators/userValidator");
const userController = require('../controllers/userController');

const userMiddleware = (req, res, next) => {
  consoleLog("userMiddleware test : ", req.body);
  next();
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login", userValidator.login, [userMiddleware, ], userController.login);

module.exports = router;
