import React, { useRef } from 'react';
import {X} from 'lucide-react'
const Notification = ({onClose}) => {
  
  const modalRef= useRef();
  const closeModal =(e) =>{
  if(modalRef.current===e.target){
    onClose();
  }
}

  return (
    <div ref={modalRef} onClick={closeModal} dataset='Modal' className="mt-8 fixed inset-0 bf-opacity-30 backdrop-blur-sm flex justify-end item-center">
      <div  className=" mt-10 flex flex-col gap-5 item-center mx-4">
      <button onClick={onClose} className="place-self-end"><X size={30}/></button>
      <div className=" round-xl shadow-lg px-20 py-10 flex flex-col gap-5 item-center mx-4">
        <h1 className="text-3xl text-black font-semibold mb-4">Notification</h1>
      </div>
      </div>
    </div>
  );
};

export default Notification;
