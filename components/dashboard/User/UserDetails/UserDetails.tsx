"use client";
// import { useParams } from "next/navigation";
import { useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";

import PersonalInfo from "./PersonalInfo";
import Transactions from "./Transactions";
import TransactionsRequest from "./TransactionsRequest";
import LoadRequests from "./LoadRequests";

type UserDetailsProps = {
    device_id: number;
  };

const UserDetails: React.FC<UserDetailsProps> = ({ device_id }) =>  {
  const [selectedTab, setSelectedTab] = useState(1);
  console.log(device_id);

  const renderContent = () => {
    switch (selectedTab) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Transactions />;
      case 3:
        return <TransactionsRequest />;
      case 4:
        return <LoadRequests />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="p-20">
      <h1>User Detail </h1>
      <div className="flex gap-10 mb-20">
        {[1, 2, 3, 4].map((current_tab) => (
          <button
            key={current_tab}
            onClick={() => {
              setSelectedTab(current_tab);
            }}
            className={`tab-button ${
              selectedTab === current_tab ? "active" : ""
            } `}
          >
            Component {current_tab}
          </button>
        ))}
      </div>
      {/* Display the Selected Component */}
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDetails;
