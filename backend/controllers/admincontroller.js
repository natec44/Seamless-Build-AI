import User from '../models/user.js';
import Project from '../models/project.js';

export const getDashboardStats = async (req, res, next) => {
  try {
    const users = await User.countDocuments();
    const admins = await User.countDocuments({ role: 'admin' });
    const projects = await Project.countDocuments();

    res.json({
      totalUsers: users,
      totalAdmins: admins,
      totalProjects: projects,
    });
  } catch (err) {
    next(err);
  }
};
