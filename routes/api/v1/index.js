const router = require('express').Router();
const root = process.cwd() + '/controllers/api/v1';
const DateApiController = require(root + '/DateApiController');

router.get('/time', DateApiController.get);

module.exports = router;