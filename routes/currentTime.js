const router = require('express').Router();
const time = require('../controllers/current-time-request');


 router.get('/time/:offset', time.curentTimeRequest);

module.exports = router;
