"use client";
import { Eye, Trash2, UserRoundPen } from "lucide-react";
import { useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";

const UserTable = () => {
  // Mock data for bookings
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
    
    <div className="w-full bg-white p-6 rounded-lg shadow-lg text-black">
    <h5 className="title ">Manage Users</h5>
      <h6 className="sub-title text-inactive-title">
        Manage system users and their roles
      </h6>
      {/* Search and Add New Booking Button */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search bookings..."
          className="p-2 border rounded-md w-1/2 bg-gray-100"
        />
        <button className="px-4 bg-black text-white">Add New User</button>
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse p-4">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">E-mail</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 rounded-lg text-white ${
                      user.role.toLowerCase() === "superadmin"
                        ? "bg-btn-confirmed bg-opacity-80"
                        : user.role.toLowerCase() === "admin"
                        ? "bg-btn-pending bg-opacity-80"
                        : "bg-btn-canceled bg-opacity-80"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="border p-2 flex space-x-2 justify-between">
                  <button
                    className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                    title="Detail"
                  >
                    <span className="group-hover:text-gray-700 group-hover:scale-125 transition-transform duration-200 ease-in-out">
                      <Eye />
                    </span>
                    <span className="group-hover:text-gray-700 transition-colors duration-200 ease-in-out">
                      Detail
                    </span>
                  </button>
                  <button
                    className="hover:cursor-pointer text-green-500 group flex items-center space-x-1"
                    title="Edit"
                  >
                    <span className="group-hover:text-green-700 group-hover:scale-125 transition-transform duration-200 ease-in-out">
                      <UserRoundPen />
                    </span>
                    <span className="group-hover:text-green-700 transition-colors duration-200 ease-in-out">
                      Edit
                    </span>
                  </button>

                  {/* Delete Button */}
                  <button
                    className={`group flex items-center space-x-1 ${
                      user.role.toLowerCase() === "superadmin"
                        ? "cursor-not-allowed opacity-100 blur-xs"
                        : "hover:cursor-pointer text-red-500"
                    }`}
                    title="Delete"
                    disabled={user.role.toLowerCase() === "superadmin"}
                  >
                    <span
                      className={`${
                        user.role.toLowerCase() === "superadmin"
                          ? "text-gray-400"
                          : "group-hover:text-red-700 group-hover:scale-125"
                      } transition-transform duration-200 ease-in-out`}
                    >
                      <Trash2 />
                    </span>
                    <span
                      className={`${
                        user.role.toLowerCase() === "superadmin"
                          ? "text-gray-400"
                          : "group-hover:text-red-700"
                      } transition-colors duration-200 ease-in-out`}
                    >
                      Delete
                    </span>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    

  );
};

export default UserTable;
