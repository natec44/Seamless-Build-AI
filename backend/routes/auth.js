import express from 'express';

const router = express.Router();

// Auth routes
router.post('/auth/login', (req, res) => {
  res.json({ token: 'mock-token' });
});

export default router;
