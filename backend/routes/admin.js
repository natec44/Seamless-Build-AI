import express from 'express';

const router = express.Router();

// Define your admin-related routes
router.get('/admin/dashboard', (req, res) => {
  res.json({ message: 'Admin Dashboard' });
});

export default router;
