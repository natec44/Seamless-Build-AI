import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MaterialsVendorPanel = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/vendors`)
      .then((res) => setVendors(res.data))
      .catch((err) => console.error('Error fetching vendors:', err));
  }, []);

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-2">Vendors & Materials</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor._id} className="border-b py-1">
            {vendor.name} – {vendor.materials.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialsVendorPanel;
