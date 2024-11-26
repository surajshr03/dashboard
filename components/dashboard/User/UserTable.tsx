"use client";
import { Eye, Trash2, UserRoundPen, Search } from "lucide-react"; // Import the Search icon
import { useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";

const UserTable = () => {
  // State for filter dropdown visibility
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filterRole, setFilterRole] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  // Mock data for users
  const [users] = useState([
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
    {
      id: 4,
      name: "John Doe",
      email: "user@gmail.com",
      date: "2023-05-01",
      role: "admin",
    },
    {
      id: 5,
      name: "Jane Smith",
      email: "jane@gmail.com",
      date: "2023-05-02",
      role: "customer",
    },
    {
      id: 6,
      name: "Bob Johnson",
      email: "bob@gmail.com",
      date: "2023-05-03",
      role: "customer",
    },
  ]);

  // Toggle filter dropdown
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  // Function to handle filter change
  const handleFilterChange = (role) => {
    setFilterRole(role);
    setFilterOpen(false); // Close the dropdown after selection
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter users based on selected filter (role) and search query
  const filteredUsers = users.filter((user) => {
    const matchesRole = filterRole === "All" || user.role === filterRole;

    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesRole && matchesSearch;
  });

  return (
    <div className="wrapper">
      <h5 className="title ">Manage Users</h5>
      <h6 className="sub-title">
        Manage system users and their roles
      </h6>
      {/* Search and Filter Section */}
      <div className="grid grid-cols-6 gap-4 my-6">

        {/* Search Input */}
        <div className="col-span-6 lg:col-span-4 relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 pl-10 pr-4 border rounded-md w-full bg-gray-100"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search />
          </span>
        </div>

        {/* Role Filter Button */}
        <div className="col-span-6 md:col-start-4 md:col-span-3 lg:col-start-6 lg:col-span-1 flex justify-end relative">
          <button
            className="filter-btn flex items-center justify-start px-4 py-2 border w-full"
            onClick={toggleFilter}
          >
            {/* Filter label */}
            <p className="font-bold text-white">Filter</p>
            {/* Selected role */}
            <p className="ml-2 text-sm font-light text-white">
              (&nbsp;{filterRole}&nbsp;)
            </p>
          </button>

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
              <ul className="py-2">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleFilterChange("All")}
                >
                  All
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleFilterChange("admin")}
                >
                  Admin
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleFilterChange("superadmin")}
                >
                  Superadmin
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleFilterChange("customer")}
                >
                  Customer
                </li>
              </ul>
            </div>
          )}
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
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
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
                <td colSpan="5" className="p-2 text-center">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
