import React, { useState, useRef } from 'react';
import {X} from 'lucide-react'

const Donate = ({onClose}) => {
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
  const modalRef= useRef();
  const closeModal =(e) =>{
  if(modalRef.current===e.target){
    onClose();
  }
}

  return (
    <div ref={modalRef} onClick={closeModal} className="mt-8  fixed inset-0 bf-opacity-30 backdrop-blur-sm flex justify-center item-center">
      <div  className=" mt-10 flex flex-col gap-5 item-center mx-4">
      <button onClick={onClose} className="place-self-end"><X size={30}/></button>
      <div className=" round-xl shadow-lg px-20 py-10 flex flex-col gap-5 item-center mx-4">
        <h1 className="text-3xl text-black font-semibold mb-4">Donate</h1>
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
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Donate
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Donate;
