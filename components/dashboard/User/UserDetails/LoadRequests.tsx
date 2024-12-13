import React from 'react'
import { UserProps } from "@/data/type";

const LoadRequests: React.FC<UserProps> = ({ device_id }) => {
  return (
    <div>
      <h2>Load Request Info for Device {device_id}</h2>
      {/* Render the relevant content */}
    </div>
  );
};

export default LoadRequests