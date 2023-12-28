import React, { useState } from 'react';

const Donate = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
     
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Donate</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Product Details</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter product details"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1 font-semibold">Upload Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
