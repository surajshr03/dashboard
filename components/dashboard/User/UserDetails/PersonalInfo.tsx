// Importing UserProps at the top of the file
import React from 'react';
import { UserProps } from "@/data/type";

const PersonalInfo: React.FC<UserProps> = ({ device_id, ...rest }) => {
  const { name, email, created, disable, user_status } = rest;
  return (
    <div>
      <h2>Personal Info for Device {device_id}</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Created: {created}</p>
      <p>Disabled: {disable ? 'Yes' : 'No'}</p>
      <p>Status: {user_status ? 'Active' : 'Inactive'}</p>
      {/* Render other relevant content */}
    </div>
  );
};

export default PersonalInfo;
