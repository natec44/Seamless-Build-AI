import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectSelector = ({ onChange }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Failed to load projects:', err));
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)} className="p-2 rounded border">
      <option value="">Select a Project</option>
      {projects.map((project) => (
        <option key={project._id} value={project._id}>
          {project.name}
        </option>
      ))}
    </select>
  );
};

export default ProjectSelector;
