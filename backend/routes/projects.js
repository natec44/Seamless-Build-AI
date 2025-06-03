const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { authenticate } = require('../middleware/auth');

router.get('/', authenticate, projectController.getAllProjects);
router.post('/', authenticate, projectController.createProject);
router.get('/:id', authenticate, projectController.getProjectById);
router.put('/:id', authenticate, projectController.updateProject);
router.delete('/:id', authenticate, projectController.deleteProject);

module.exports = router;
