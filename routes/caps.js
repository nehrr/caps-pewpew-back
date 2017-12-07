const express = require('express');
const router  = express.Router();

const CapsController = require('../controllers/caps_controller');

router.get('/', CapsController.index);
router.get('/random', CapsController.random);

module.exports = router;
