import express from 'express';

const router = express.Router();

// Define material-related routes
router.get('/materials', (req, res) => {
  res.json({ message: 'All Materials' });
});

export default router;
