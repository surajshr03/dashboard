'use client';
import LoadRequests from '@/components/dashboard/User/UserDetails/LoadRequests';
import PersonalInfo from '@/components/dashboard/User/UserDetails/PersonalInfo';
import Transactions from '@/components/dashboard/User/UserDetails/Transactions';
import TransactionsRequest from '@/components/dashboard/User/UserDetails/TransactionsRequest';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import "@/components/dashboard/CSS/dashboard.css";

const UserDetails = () => {
  const params = useParams();
  const device_id = params.device_id;
  console.log(`Device Id : ${device_id}`);

  const [selectedTab, setSelectedTab] = useState('personalInfo');

  useEffect(() => {
    // Optionally, you can handle side effects when selectedTab changes.
  }, [selectedTab]);

  const renderContent = () => {
    switch (selectedTab) {
      case 'personalInfo':
        return <PersonalInfo />;
      case 'transactions':
        return <Transactions />;
      case 'transactionsRequest':
        return <TransactionsRequest />;
      case 'loadRequests':
        return <LoadRequests />;
      default:
        return <PersonalInfo />;
    }
  };

  const capitalizeWords = (str: string) => {
    return str
      .split(/(?=[A-Z])/)
      .join(' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div>
      <h1>User Details</h1>
      <p>Device ID: {device_id}</p>

      <div className="p-20">
        <h1>User Detail </h1>
        <div className="flex gap-10 mb-20">
          {['personalInfo', 'transactions', 'transactionsRequest', 'loadRequests'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`tab-button ${selectedTab === tab ? "active" : ""}`}
            >
              {capitalizeWords(tab)}
            </button>
          ))}
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
