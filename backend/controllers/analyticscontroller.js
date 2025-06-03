import Task from '../models/task.js';
import Project from '../models/project.js';

export const getAnalytics = async (req, res, next) => {
  try {
    const projectCount = await Project.countDocuments();
    const taskCount = await Task.countDocuments();
    const completedTasks = await Task.countDocuments({ status: 'completed' });

    const completionRate = taskCount > 0 ? (completedTasks / taskCount) * 100 : 0;

    res.json({
      projectCount,
      taskCount,
      completedTasks,
      completionRate: completionRate.toFixed(2)
    });
  } catch (err) {
    next(err);
  }
};
