import React from 'react';
import { Grid} from '@mui/material';

const Settings = () =>{
return (
    <div  className="mt-16 item-center w-48">
      <Grid item lg={5} sm={7} xs={12}>
      <h1 className="text-3xl font-semibold mb-4">Settings</h1>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Language
        </label>
        <select className="block w-full p-2 border border-gray-300 rounded-md">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dark Mode
        </label>
        <input type="checkbox" className="mr-2 leading-tight" />
        <span className="text-sm">Enable dark mode</span>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          About us
        </label>
        <select className="block w-full p-2 border border-gray-300 rounded-md">
          <option value="english">Mission</option>
          <option value="spanish">Vision</option>
          <option value="french">Team</option>
        </select>
      </div>
      </Grid>
    </div>
  );
};

export default Settings;
