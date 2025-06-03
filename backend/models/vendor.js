import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: String,
  materialsSupplied: [String],
  email: String,
  phone: String
});

export default mongoose.model('Vendor', vendorSchema);
