import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL, // Ensure this is set in your .env
  credentials: true
}));
app.use(express.json());

// Route imports
import adminRoutes from './routes/admin.js';
import projectRoutes from './routes/projects.js';
import taskRoutes from './routes/tasks.js';
import materialRoutes from './routes/materials.js';
import authRoutes from './routes/auth.js';
import analyticsRoutes from './routes/analytics.js';

// Register routes with prefix
app.use('/api', adminRoutes);
app.use('/api', projectRoutes);
app.use('/api', taskRoutes);
app.use('/api', materialRoutes);
app.use('/api', authRoutes);
app.use('/api', analyticsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('SeamlessBuild Backend API is running');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
