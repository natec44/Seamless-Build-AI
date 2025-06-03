import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
  startDate: Date,
  endDate: Date,
  estimatedHours: Number,
  actualHours: Number,
  cost: Number
});

export default mongoose.model('Task', taskSchema);
