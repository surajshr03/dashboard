"use client";
import { Eye, Trash2, UserRoundPen } from "lucide-react";
import { useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";

const UserTable = () => {
  // Mock data for users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "user@gmail.com",
      date: "2023-05-01",
      role: "admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      date: "2023-05-02",
      role: "superadmin",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@gmail.com",
      date: "2023-05-03",
      role: "customer",
    },
  ]);

  return (
    <div className="wrapper">
      <h5 className="title ">Manage Users</h5>
      <h6 className="sub-title">
        Manage system users and their roles
      </h6>
      {/* Search and Add New User Button */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
        <div className="lg:col-span-3">
          <input
            type="text"
            placeholder="Search Users..."
            className="p-2 border rounded-md w-full bg-gray-100"
          />
        </div>
        <div className="lg:col-span-3 flex justify-end">
          <button className="add-btn">Add New User</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto min-w-full p-4">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">User ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">E-mail</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    <span
                      className={`rounded-full text-white ${
                        user.role.toLowerCase() === "superadmin"
                          ? "bg-btn-confirmed"
                          : user.role.toLowerCase() === "admin"
                          ? "bg-btn-pending"
                          : "bg-btn-canceled"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-2 flex space-x-2 justify-between">
                    <button className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1">
                      <Eye className="group-hover:text-gray-700 group-hover:scale-125 transition-transform duration-200 ease-in-out" />
                      <span className="group-hover:text-gray-700 hidden lg:block">
                        Detail
                      </span>
                    </button>
                    <button className="hover:cursor-pointer text-green-500 group flex items-center space-x-1">
                      <UserRoundPen className="group-hover:text-green-700 group-hover:scale-125 transition-transform duration-200 ease-in-out" />
                      <span className="group-hover:text-green-700 hidden lg:block">
                        Edit
                      </span>
                    </button>

                    <button
                      className={`group flex items-center space-x-1 ${
                        user.role.toLowerCase() === "superadmin"
                          ? "cursor-not-allowed opacity-50"
                          : "hover:cursor-pointer text-red-500"
                      }`}
                      title="Delete"
                      disabled={user.role.toLowerCase() === "superadmin"}
                    >
                      <Trash2 className="group-hover:text-red-700 group-hover:scale-125 transition-transform duration-200 ease-in-out" />
                      <span
                        className={`hidden lg:block ${
                          user.role.toLowerCase() === "superadmin"
                            ? "text-gray-400"
                            : "group-hover:text-red-700"
                        }`}
                      >
                        Delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
