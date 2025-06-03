const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const { authenticate } = require('../middleware/auth');

router.get('/overview/:projectId', authenticate, analyticsController.getProjectOverview);
router.get('/report/:projectId', authenticate, analyticsController.getDetailedReport);

module.exports = router;
