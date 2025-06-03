import React, { useState } from 'react';

const BlueprintUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('blueprint', file);
    // Upload logic here
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Upload Blueprint</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mt-2" />
      <button onClick={handleUpload} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
};

export default BlueprintUpload;
