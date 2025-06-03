import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/users`)
      .then((res) => setMembers(res.data))
      .catch((err) => console.error('Failed to load team members:', err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Team Members</h2>
      <ul className="mt-2">
        {members.map((member) => (
          <li key={member._id} className="border-b py-1">
            {member.name} – {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
