const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const { authenticate } = require('../middleware/auth');

router.get('/:projectId', authenticate, vendorController.getVendorsByProject);
router.post('/', authenticate, vendorController.createVendor);
router.put('/:id', authenticate, vendorController.updateVendor);
router.delete('/:id', authenticate, vendorController.deleteVendor);

module.exports = router;
