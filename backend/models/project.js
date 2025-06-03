import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  materials: [String],
  vendors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }]
});

export default mongoose.model('Project', projectSchema);
