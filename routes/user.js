const express = require('express');
const router  = express.Router();

const UserController = require('../controllers/users_controller');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
// router.put('/user/:id', );
// router.delete('/user/:id', );

module.exports = router;
