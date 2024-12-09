"use client";
import "@/components/dashboard/CSS/dashboard.css";
import { Eye, Search, Trash2, UserRoundPen, X } from "lucide-react"; // Import the Search icon
import { ChangeEvent, SetStateAction, useState } from "react";

import { Users } from "@/data/data";
import { UserProps } from "@/data/type";
import Pagination from "../Pagination";

const UserTable = () => {
  // State for filter dropdown visibility
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filterRole, setFilterRole] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);

  //when user clicks edit btn -----------------
  const [editDetails, setEditDetails] = useState<UserProps | null>(null);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  const handleEditDetails = (user: UserProps) => {
    setEditDetails(user);
  };
  // close pop when user clicks X
  const closeEditPopup = () => {
    setEditDetails(null);
  };

  const handleEditInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    field: string
  ) => {
    if (editDetails) {
      setEditDetails({
        ...editDetails,
        [field]: e.target.value,
      });
    }
  };

  //save changes btn clicked
  const handleUpdated = () => {
    // Perform update logic here (e.g., API call or state update)
    setIsUserUpdated(true);
  };

  const closeUpdated = () => {
    setIsUserUpdated(false);
    setEditDetails(null);
  };

  //-----------------------
  //delete btn
  const [deleteSelected,setDeleteSelected]=useState<UserProps | null>(null);
  const handleDelete = (user: UserProps)=>{
    setDeleteSelected(user);
  }
  const closeDeletePopup = () => {
    setDeleteSelected(null);
  }
 
  //-----------------

  // Toggle filter dropdown
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  // Function to handle filter change
  const handleFilterChange = (role: SetStateAction<string>) => {
    setFilterRole(role);
    setFilterOpen(false); // Close the dropdown after selection
  };

  // Function to handle search input change
  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter users based on selected filter (role) and search query
  const filteredUsers = Users.filter((user) => {
    const matchesRole = filterRole === "All" || user.role === filterRole;

    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesRole && matchesSearch;
  });

  //function to show popUp overlay for user details and close it
  const handleViewDetails = (user: UserProps) => {
    setSelectedUser(user);
  };
  const closePopup = () => {
    setSelectedUser(null);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = filteredUsers.slice(startIndex, startIndex + pageSize);

  return (
    <>
      {/* <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 mb-6">
        <div>
          <p className="text-3xl font-bold">
            User List
          </p>
        </div>
        <div>
          <Breadcrumbs />
        </div>
      </div> */}
      <div className="wrapper my-4">
        <div>
          <p className="text-xl font-semibold mb-2">Manage Users</p>
          <p className="sub-title">Manage system users and their roles</p>
        </div>
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
                  a
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
                {/* <th className="p-2">User ID</th> */}
                <th className="p-2">Name</th>
                <th className="p-2">E-mail</th>
                <th className="p-2">Role</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((user) => (
                  <tr key={user.id} className="border-b">
                    {/* <td className="p-2">{user.id}</td> */}
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">
                      <span
                        className={`rounded-full ${
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
                      <button
                        onClick={() => {
                          handleViewDetails(user);
                        }}
                        className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                        title="Detail"
                      >
                        <Eye className="group-hover:text-gray-700 group-hover:scale-125 transition-transform duration-200 ease-in-out" />
                        {/* <span className="group-hover:text-gray-700 hidden lg:block">
                        Detail
                      </span> */}
                      </button>
                      <button
                        className="hover:cursor-pointer text-green-500 group flex items-center space-x-1"
                        title="Edit"
                        onClick={() => handleEditDetails(user)}
                      >
                        <UserRoundPen className="group-hover:text-green-700 group-hover:scale-125 transition-transform duration-200 ease-in-out" />
                        {/* <span className="group-hover:text-green-700 hidden lg:block">
                        Edit
                      </span> */}
                      </button>

                      <button
                        className={`group flex items-center space-x-1 ${
                          user.role.toLowerCase() === "superadmin"
                            ? "cursor-not-allowed opacity-50"
                            : "hover:cursor-pointer text-red-500"
                        }`}
                        title="Delete"
                        disabled={user.role.toLowerCase() === "superadmin"}
                        onClick={()=>{handleDelete(user)}}
                      >
                        <Trash2 className="group-hover:text-red-700 group-hover:scale-125 transition-transform duration-200 ease-in-out" />
                        {/* <span
                        className={`hidden lg:block ${
                          user.role.toLowerCase() === "superadmin"
                            ? "text-gray-400"
                            : "group-hover:text-red-700"
                        }`}
                      >
                        Delete
                      </span> */}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 text-center">No users found</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="w-full ">
            <Pagination
              items={filteredUsers.length} // 100
              currentPage={currentPage} // 1
              pageSize={pageSize} // 10
              onPageChange={onPageChange}
            />
          </div>
        </div>
        {/* POP UP OVERLAY */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-4">
              <h2 className="text-2xl font-bold mb-4 text-center">
                User Details
              </h2>
              <div className="flex flex-col">
                <strong className="text-lg">ID:</strong>
                <p>{selectedUser.id}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-lg">Name:</strong>
                <p> {selectedUser.name}</p>
              </div>

              <div className="flex flex-col">
                <strong className="text-lg">Email:</strong>
                <p>{selectedUser.email}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-lg">Date:</strong>
                <p>{selectedUser.date}</p>
              </div>
              <div className="flex flex-col">
                <strong className="text-lg">Role:</strong>
                <p>{selectedUser.role}</p>
              </div>

              <div className="mt-6 flex flex-col justify-center items-center">
                <button
                  className=" px-4 py-2  bg-gray-300 text-gray-800 rounded-md"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Popup */}
        {editDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-4 mx-2">
              {isUserUpdated ? (
                <>
                  <div className="flex flex-col bg-white items-center gap-2 justify-center">
                    <p className="w-full text-xl font-bold text-center">
                      Updated Successfully.
                    </p>
                  </div>

                  {/* Displays additional information like the book title or a button to add another book */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <button
                      onClick={() => closeUpdated()}
                      className="Delbtn w-full bg-inactive-title text-white"
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex bg-white items-center justify-between">
                    <h2 className="text-2xl font-bold  text-center">
                      Edit User
                    </h2>
                    <h2
                      className="text-2xl  text-center cursor-pointer justify-end flex text-inactive-title font-semibold"
                      onClick={closeEditPopup}
                    >
                      <X />
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <label className="p-2 text-sm"> User Name :</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={editDetails.name}
                      onChange={(e) => {
                        handleEditInputChange(e, "name");
                      }} //'name': It tells the function that we want to update the name field of editDetails based on this new input value.
                      className="border-2 text-sm rounded-md p-2"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="p-2 text-sm"> User Email :</label>
                    <input
                      type="text"
                      placeholder="Book"
                      value={editDetails.email}
                      onChange={(e) => handleEditInputChange(e, "email")}
                      className="border-2 text-sm rounded-md p-2"
                    ></input>
                  </div>

                  <div className="flex flex-col">
                    <label className="p-2 text-sm">User Role :</label>
                    <select
                      value={editDetails.role}
                      onChange={(e) => handleEditInputChange(e, "role")}
                      className="border-2 text-sm rounded-md p-2"
                    >
                      <option value={editDetails.role}>
                        {editDetails.role}
                      </option>
                      {editDetails.role !== "customer" && (
                        <option value="customer">customer</option>
                      )}
                      {editDetails.role !== "admin" && (
                        <option value="admin">admin</option>
                      )}
                      {editDetails.role !== "superadmin" && (
                        <option value="superadmin">superadmin</option>
                      )}
                    </select>
                  </div>

                  <button
                    className="btn bg-metricsGreen flex items-center justify-center px-4 py-2 border w-full"
                    onClick={() => {}}
                  >
                    <p
                      className="font-bold text-base text-white"
                      onClick={() => handleUpdated()}
                    >
                      Update Changes
                    </p>
                  </button>
                </>
              )}
            </div>
          </div>
        )}

         {/* Delete Popup */}
      {deleteSelected &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-3">
            <h2 className="text-2xl  text-center cursor-pointer justify-end flex text-inactive-title font-semibold" onClick={closeDeletePopup}><X /></h2>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Are you sure you want to delete this entry?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center mb-2 gap-5">
              <button onClick={closeDeletePopup} className="Delbtn Delbtn-delete w-full text-base">Delete</button>
              <button onClick={closeDeletePopup} className="Delbtn Delbtn-cancel w-full text-base">Cancel</button>
            </div>


          </div>
        </div>
      }
      </div>
    </>
  );
};

export default UserTable;
