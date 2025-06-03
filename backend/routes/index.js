import express from 'express';
import adminRoutes from './admin.js';
import projectRoutes from './projects.js';
import taskRoutes from './tasks.js';
import materialRoutes from './materials.js';
import authRoutes from './auth.js';
import analyticsRoutes from './analytics.js';

const router = express.Router();

router.use(adminRoutes);
router.use(projectRoutes);
router.use(taskRoutes);
router.use(materialRoutes);
router.use(authRoutes);
router.use(analyticsRoutes);

export default router;
