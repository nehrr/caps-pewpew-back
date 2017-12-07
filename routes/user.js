const express = require('express');
const router  = express.Router();

const UserController = require('../controllers/users_controller');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
