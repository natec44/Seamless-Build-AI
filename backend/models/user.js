import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'manager', 'worker'], default: 'worker' },
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }]
});

export default mongoose.model('User', userSchema);
