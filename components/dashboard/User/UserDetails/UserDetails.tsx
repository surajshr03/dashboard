"use client";
import LoadRequests from "@/components/dashboard/User/UserDetails/LoadRequests";
import PersonalInfo from "@/components/dashboard/User/UserDetails/PersonalInfo";
import Transactions from "@/components/dashboard/User/UserDetails/Transactions";
import TransactionsRequest from "@/components/dashboard/User/UserDetails/TransactionsRequest";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "@/components/dashboard/CSS/dashboard.css";
import { Users } from "@/data/data";
import { UserProps } from "@/data/type";


const UserDetails = () => {
  const params = useParams();
  const device_id = params.device_id;
  console.log(`Device Id : ${device_id}`);

  const [selectedTab, setSelectedTab] = useState("personalInfo");
  const userProps: UserProps = {
    device_id: Number(device_id), // Ensure it's a number
    // Add other user information if available
    //get data via api in futute and replace below data with actaul data
    name: "John Doe", 
    email: "john.doe@example.com", 
    created: "2024-01-01", 
    disable: true, 
    user_status: true, 
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "personalInfo":
        return <PersonalInfo  {...userProps} />;
      case "transactions":
        return <Transactions {...userProps}  />;
      case "transactionsRequest":
        return <TransactionsRequest {...userProps} />;
      case "loadRequests":
        return <LoadRequests {...userProps}  />;
      default:
        return <PersonalInfo {...userProps}  />;
    }
  };

  const capitalizeWords = (str: string) => {
    return str
      .split(/(?=[A-Z])/)
      .join(" ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <div className="wrapper my-4">
        <h5 className="title">User Details : {device_id} </h5>
        <h6 className="sub-title">View User Details and Transactions</h6>

        <div className="overflow-x-auto max-w-full custom-scrollbar my-6">
          <table className="table-auto w-full p-4 border border-gray-300">
            <thead className="bg-gray-100 text-left">
              <tr className="">
                {[
                  "personalInfo",
                  "transactions",
                  "transactionsRequest",
                  "loadRequests",
                ].map((tab, index, arr) => (
                  <th
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`tab-button tracking-wide ${
                      selectedTab === tab ? "active" : ""
                    } p-2 text-dark-inactive-title ${
                      index !== 0 && index !== arr.length - 1
                        ? "border-x-4"
                        : ""
                    } cursor-default `}
                  >
                    {capitalizeWords(tab)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="text-center" colSpan={4}>
                  {renderContent()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
