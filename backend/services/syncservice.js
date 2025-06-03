import Project from '../models/project.js';
import Task from '../models/task.js';

export const syncOfflineChanges = async (changes, userId) => {
  const results = [];

  for (const change of changes) {
    const { type, model, data } = change;

    try {
      let result;

      switch (model) {
        case 'Project':
          if (type === 'create') {
            result = await Project.create({ ...data, team: [userId] });
          } else if (type === 'update') {
            result = await Project.findByIdAndUpdate(data._id, data, { new: true });
          }
          break;

        case 'Task':
          if (type === 'create') {
            result = await Task.create({ ...data, assignedTo: userId });
          } else if (type === 'update') {
            result = await Task.findByIdAndUpdate(data._id, data, { new: true });
          }
          break;

        default:
          throw new Error(`Unsupported model: ${model}`);
      }

      results.push({ status: 'success', data: result });
    } catch (err) {
      results.push({ status: 'error', message: err.message });
    }
  }

  return results;
};
