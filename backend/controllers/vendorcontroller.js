import Vendor from '../models/vendor.js';

export const getVendors = async (req, res, next) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    next(err);
  }
};

export const addVendor = async (req, res, next) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (err) {
    next(err);
  }
};

export const updateVendor = async (req, res, next) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vendor);
  } catch (err) {
    next(err);
  }
};

export const deleteVendor = async (req, res, next) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vendor deleted' });
  } catch (err) {
    next(err);
  }
};
