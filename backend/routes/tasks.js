import express from 'express';

const router = express.Router();

// Define task-related routes
router.get('/tasks', (req, res) => {
  res.json({ message: 'All Tasks' });
});

export default router;
