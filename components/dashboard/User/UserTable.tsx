"use client";
import "@/components/dashboard/CSS/dashboard.css";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Users } from "@/data/data";
import { UserProps } from "@/data/type";
import Pagination from "../Pagination";

const UserTable = () => {
  const router = useRouter();

  const handleViewDetails = (user: UserProps) => {
    try {
      router.push(`/dashboard/users/${user.device_id}`);
    } catch (error) {
      console.error("Error navigating:", error);
      // Handle the error appropriately (e.g., show a toast notification)
    }
  };

  //pagination page change
  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  //filter data before pagination (future) in api call

  // pagination

  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = Users.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className="wrapper my-4">
        <h5 className="title">Manage Users</h5>
        <h6 className="sub-title">Manage and view users list</h6>

        <div className="overflow-x-auto max-w-full custom-scrollbar">
          <table className="table-auto w-full p-4">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 text-dark-inactive-title">Name</th>
                <th className="p-2 text-dark-inactive-title">E-mail</th>
                <th className="p-2 text-dark-inactive-title">Device ID</th>
                <th className="p-2 text-dark-inactive-title">User Status</th>
                <th className="p-2 text-dark-inactive-title">Created</th>
                <th className="p-2 text-dark-inactive-title">Disable</th>
                <th className="p-2 text-dark-inactive-title">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((user) => (
                  <tr key={user.device_id} className="border-b">
                    {/* Render user-specific content here */}
                    <td className="p-2 text-dark-inactive-title">
                      {user.name}
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      {user.email}
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      {user.device_id}
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      <span
                        className={`rounded-full w-full text-sm ${
                          user.user_status
                            ? "bg-btn-confirmed"
                            : "bg-btn-canceled"
                        }`}
                      >
                        {user.user_status ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      {user.created}
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      <span
                        className={`rounded-full w-full text-sm ${
                          user.disable ? "bg-btn-pending" : "bg-btn-confirmed"
                        }`}
                      >
                        {user.disable ? "Disabled" : "Enabled"}
                      </span>
                    </td>
                    <td className="p-2 text-dark-inactive-title view-detail">
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
                        <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out ">
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
      </div>
    </>
  );
};

export default UserTable;
