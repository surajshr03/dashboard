import React from 'react'
import { UserProps } from "@/data/type";


const Transactions: React.FC<UserProps> = ({ device_id, ...rest }) => {
  const { name, email, created, disable, user_status } = rest;
  return (
    <div className="personalInfoBg">
      <div className="inner-wrpper m-4 wfull">
        <h2 className="text-2xl mb-2 cursor-default hover:underline ">
            Transactions Information for Device {device_id}
        </h2>
        <div className="text-left">
       
        {/* <div>
            All the Transactions made by {device_id} : 
       </div> */}
       ###
        </div>
      </div>
    </div>
  );
};

export default Transactions