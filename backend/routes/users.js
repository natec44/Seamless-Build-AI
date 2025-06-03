const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, userController.getAllUsers);
router.put('/:id', authenticate, userController.updateUserRole);
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;
