import React, { useRef } from 'react';
import ReactDOM from 'react-dom';   

const myList = ['Account Name', 'Setting & Privacy', 'Help & Support', 'Display', 'Logout'];   
const listItems = myList.map((myList)=>{   
    return <li>{myList}</li>;   
}); 
const Account= ({onClose}) => {
  
  const modalRef= useRef();
  const closeAccount =(e) =>{
  if(modalRef.current===e.target){
    onClose();
  }
}
ReactDOM.render(   
    <ul> {listItems} </ul>,   
    document.getElementById('app')   
); 
  return (
    <div ref={modalRef} onClick={closeAccount} className="mt-8 fixed inset-0 bf-opacity-30 backdrop-blur-sm flex justify-end item-center">
      <div  className=" mt-10 flex flex-col gap-5 item-center mx-4">
      <div className=" round-xl shadow-lg px-20 py-10 flex flex-col gap-5 item-center mx-4">
        
      </div>
      </div>
    </div>
  );
};

export default Account;
