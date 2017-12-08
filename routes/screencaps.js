const express = require('express');
const router  = express.Router();

const ScreencapsController = require('../controllers/screencaps_controller');

router.get('/', ScreencapsController.index);
router.get('/random', ScreencapsController.random);

module.exports = router;
