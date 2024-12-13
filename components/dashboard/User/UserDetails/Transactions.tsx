import React from 'react'
import { UserProps } from "@/data/type";


const Transactions: React.FC<UserProps> = ({ device_id }) => {
  return (
    <div>
      <h2>Transactions Info for Device {device_id}</h2>
      {/* Render the relevant content */}
    </div>
  );
};

export default Transactions