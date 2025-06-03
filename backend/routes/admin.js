// backend/routes/admin.js
import express from 'express';
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.send('Admin route working');
});

export default router;
