import React from 'react'
import { UserProps } from "@/data/type";


const TransactionsRequest : React.FC<UserProps> = ({ device_id }) => {
  return (
    <div>
      <h2>Transaction Request  Info for Device {device_id}</h2>
      {/* Render the relevant content */}
    </div>
  );
};

export default TransactionsRequest