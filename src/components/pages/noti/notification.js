import React from 'react';
function Notification({ notifications }) {
  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <div className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">NOTIFICATION</h2>
        {notifications.map(function (notification) {
          return (
            <div key={notification.id} className="bg-gray-100 p-2 mb-2 rounded-md">
              <p className="text-gray-700">{notification.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notification;
