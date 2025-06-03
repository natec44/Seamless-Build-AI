import express from 'express';

const router = express.Router();

// Define project-related routes
router.get('/projects', (req, res) => {
  res.json({ message: 'All Projects' });
});

export default router;
