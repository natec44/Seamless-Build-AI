import express from 'express';

const router = express.Router();

// Analytics routes
router.get('/analytics', (req, res) => {
  res.json({ usage: 'Analytics Data' });
});

export default router;
