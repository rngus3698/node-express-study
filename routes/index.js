const express = require('express');
const router = express.Router();
const eventEmitter = require("../event/event");
const testService = require("../controllers/testControllers");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
