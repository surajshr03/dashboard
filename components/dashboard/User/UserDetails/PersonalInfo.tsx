// Importing UserProps at the top of the file
import React from "react";
import { UserProps } from "@/data/type";

const PersonalInfo: React.FC<UserProps> = ({ device_id, ...rest }) => {
  const { name, email, created, disable, user_status } = rest;
  return (
    <div className="personalInfoBg">
      <div className="inner-wrpper m-4 wfull">
        <h2 className="md:text-2xl mb-2 cursor-default hover:underline ">
            Personal Info for Device {device_id}
        </h2>
        <div className="text-left">
       
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p  className={`rounded-full w-fit text-sm ${
                          disable ? "bg-btn-pending" : "bg-btn-confirmed"
                        }`}>Disabled: {disable ? "Yes" : "No"}</p>
        <p>Created: {created}</p>
        <p  className={`rounded-full w-fit text-sm ${
                         user_status
                            ? "bg-btn-confirmed"
                            : "bg-btn-canceled"
                        }`}>Status: {user_status ? "Active" : "Inactive"}</p>
        {/* Render other relevant content */}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
