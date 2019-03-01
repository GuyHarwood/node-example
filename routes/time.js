'use strict';
const express = require('express');
const router = express.Router();
const timeController = require('../controllers/time');

router.get('/', (req, res) => {
  res.json({ time: timeController.get(req.query.offset) });
});

module.exports = router;
