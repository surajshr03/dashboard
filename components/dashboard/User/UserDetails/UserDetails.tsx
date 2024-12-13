"use client";
import LoadRequests from "@/components/dashboard/User/UserDetails/LoadRequests";
import PersonalInfo from "@/components/dashboard/User/UserDetails/PersonalInfo";
import Transactions from "@/components/dashboard/User/UserDetails/Transactions";
import TransactionsRequest from "@/components/dashboard/User/UserDetails/TransactionsRequest";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import "@/components/dashboard/CSS/dashboard.css";

const UserDetails = () => {
  const params = useParams();
  const device_id = params.device_id;
  console.log(`Device Id : ${device_id}`);

  const [selectedTab, setSelectedTab] = useState("personalInfo");

  const renderContent = () => {
    switch (selectedTab) {
      case "personalInfo":
        return <PersonalInfo />;
      case "transactions":
        return <Transactions />;
      case "transactionsRequest":
        return <TransactionsRequest />;
      case "loadRequests":
        return <LoadRequests />;
      default:
        return <PersonalInfo />;
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
        <h5 className="title">User Details</h5>
        <h6 className="sub-title">View User Details and Transactions</h6>

        <div className="overflow-x-auto max-w-full custom-scrollbar my-6">
          <table className="table-auto w-full p-4">
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
                    className={`tab-button ${
                      selectedTab === tab ? "active" : ""
                    } p-2 text-dark-inactive-title ${
                      index !== 0 && index !== arr.length - 1
                        ? "border-x-4"
                        : ""
                    } text-center cursor-default`}
                  >
                    {capitalizeWords(tab)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border border-gray-300">
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
