import React from 'react'
import { UserProps } from "@/data/type";


const TransactionsRequest : React.FC<UserProps> = ({ device_id, ...rest }) => {
  const { name, email, created, disable, user_status } = rest;
  return (
    <div className="personalInfoBg">
      <div className="inner-wrpper m-4 wfull">
        <h2 className="text-2xl mb-2 cursor-default hover:underline ">
            Transactions Request Information for Device {device_id}
        </h2>
        <div className="text-left">
       {/* <div>
            Pending Transactions of {device_id} : 
       </div> */}
       ###
       
        {/* Render other relevant content */}
        </div>
      </div>
    </div>
  );
};

export default TransactionsRequest