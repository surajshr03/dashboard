"use client";
import "@/components/dashboard/CSS/dashboard.css";
import { useRouter } from 'next/navigation';
import { Eye, Search, Trash2, UserRoundPen, X } from "lucide-react";
import { ChangeEvent, SetStateAction, useState } from "react";

import { Users } from "@/data/data";
import { UserProps } from "@/data/type";
import Pagination from "../Pagination";

const UserTable = () => {
  const router = useRouter();
  
  const handleViewDetails = (user: UserProps) => {
    try {
      router.push(`/dashboard/users/${user.device_id}`);
    } catch (error) {
      console.error('Error navigating:', error);
      // Handle the error appropriately (e.g., show a toast notification)
    }
  };
  
  //pagination page change
  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

 //filter data before pagination (future) in api call


  
  // pagination 
  
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = Users.slice(startIndex, startIndex + pageSize);


  return (
    <>
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto w-full p-4">
          <thead className="bg-gray-100 text-left">
            <tr>
              <td className="p-2 text-dark-inactive-title">Name</td>
              <td className="p-2 text-dark-inactive-title">E-mail</td>
              <td className="p-2 text-dark-inactive-title">Device ID</td>
              <td className="p-2 text-dark-inactive-title">User Status</td>
              <td className="p-2 text-dark-inactive-title">Disable</td>
              <td className="p-2 text-dark-inactive-title">Created</td>
              <td className="p-2 text-dark-inactive-title">Actions</td>
            </tr>
          </thead>

          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((user) => (
                <tr key={user.device_id} className="border-b">
                  {/* Render user-specific content here */}
                  <td className="p-2 text-dark-inactive-title">{user.name}</td>
                  <td className="p-2 text-dark-inactive-title">{user.email}</td>
                  <td className="p-2 text-dark-inactive-title">
                    {user.device_id}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {user.user_status ? "Active" : "Inactive"}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {user.disable ? "Disabled" : "Enabled"}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {user.created}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    <button
                      onClick={() => {
                        handleViewDetails(user);
                      }}
                      className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                      title="Detail"
                    >
                      <span className="group-hover:text-gray-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                        <Eye />
                      </span>
                      <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out">
                        View Details
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center">No Users found.</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="w-full">
         
        <Pagination
            items={Users.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />

        </div>
        
      </div>
    </>
  );
};

export default UserTable;
