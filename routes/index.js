var express = require('express');
var router = express.Router();

var time = require('../controllers/time');

router.get('/index',time.getCurrentTime());
