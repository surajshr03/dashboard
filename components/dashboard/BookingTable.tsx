"use client";
import { Eye, Search, Trash2, UserRoundPen } from "lucide-react";
import { useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";

const BookingTable = () => {
  // State for filter dropdown visibility
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [filterDateRange, setFilterDateRange] = useState("All"); // State for selected date range filter

  // Mock data for bookings
  const [bookings] = useState([
    {
      id: 1,
      customer: "John Doe",
      book: "The Great Gatsby",
      date: "2005-05-01",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      book: "To Kill a Mockingbird",
      date: "2012-05-02",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      book: "1984",
      date: "2018-05-03",
      status: "Canceled",
    },
    {
      id: 4,
      customer: "Emilia",
      book: "The Awakening",
      date: "2020-05-01",
      status: "Confirmed",
    },
    {
      id: 5,
      customer: "Suraj",
      book: "Fifty Shades Of Gray",
      date: "2015-05-02",
      status: "Pending",
    },
    {
      id: 6,
      customer: "Paulo",
      book: "In Winter",
      date: "2022-05-03",
      status: "Canceled",
    },
  ]);

  // Toggle filter dropdown
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  // Function to handle filter change
  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setFilterOpen(false); // Close the dropdown after selection
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle date range filter change
  const handleDateRangeChange = (e) => {
    setFilterDateRange(e.target.value);
  };

  // Function to filter bookings based on selected filter (status, date range) and search query
  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      filterStatus === "All" || booking.status === filterStatus;

    const matchesSearch = booking.book
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesDateRange =
      filterDateRange === "All" ||
      (filterDateRange === "Before 2010" &&
        new Date(booking.date).getFullYear() < 2010) ||
      (filterDateRange === "2011-2015" &&
        new Date(booking.date).getFullYear() >= 2011 &&
        new Date(booking.date).getFullYear() <= 2015) ||
      (filterDateRange === "2016-2020" &&
        new Date(booking.date).getFullYear() >= 2016 &&
        new Date(booking.date).getFullYear() <= 2020) ||
      (filterDateRange === "2021-2025" &&
        new Date(booking.date).getFullYear() >= 2021 &&
        new Date(booking.date).getFullYear() <= 2025) ||
      (filterDateRange === "2026-2030" &&
        new Date(booking.date).getFullYear() >= 2026 &&
        new Date(booking.date).getFullYear() <= 2030);

    return matchesStatus && matchesSearch && matchesDateRange;
  });

  return (
    <div className="wrapper">
      <h5 className="title">Manage Bookings</h5>
      <h6 className="sub-title">Manage and view bookings</h6>

     
      {/* Search and Filter Section */}
        <div className="grid grid-cols-6 gap-4 my-6">

          {/* Search Input */}
          <div className="col-span-6 lg:col-span-4 relative">
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 pl-10 pr-4 border rounded-md w-full bg-gray-100"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search />
            </span>
          </div>

          {/* Date Range Filter */}
          <div className="col-span-6 md:col-span-3 lg:col-span-1  relative">
            <select
              value={filterDateRange}
              onChange={handleDateRangeChange}
              className="p-2 border rounded-md w-full bg-gray-100"
            >
              <option value="All">All Dates</option>
              <option value="Before 2010">Before 2010</option>
              <option value="2011-2015">2011-2015</option>
              <option value="2016-2020">2016-2020</option>
              <option value="2021-2025">2021-2025</option>
              <option value="2026-2030">2026-2030</option>
            </select>
          </div>

          {/* Filter Button */}
          <div className="col-span-6 md:col-span-3 lg:col-span-1 flex justify-end relative">
            <button
              className="filter-btn flex items-center justify-start px-4 py-2 border w-full"
              onClick={toggleFilter}
            >
              {/* Filter label */}
              <p className="font-bold text-white">Filter</p>
              {/* Selected status */}
              <p className="ml-2 text-sm font-light text-white">
                (&nbsp;{filterStatus}&nbsp;)
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
                    onClick={() => handleFilterChange("Confirmed")}
                  >
                    Confirmed
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleFilterChange("Pending")}
                  >
                    Pending
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleFilterChange("Canceled")}
                  >
                    Canceled
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto w-full p-4">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 text-dark-inactive-title">Customer</th>
              <th className="p-2 text-dark-inactive-title">Book</th>
              <th className="p-2 text-dark-inactive-title">Date</th>
              <th className="p-2 text-dark-inactive-title">Status</th>
              <th className="p-2 text-dark-inactive-title">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-2 text-dark-inactive-title">
                    {booking.customer}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {booking.book}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {booking.date}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    <span
                      className={`rounded-full text-white ${
                        booking.status.toLowerCase() === "confirmed"
                          ? "bg-btn-confirmed"
                          : booking.status.toLowerCase() === "pending"
                          ? "bg-btn-pending"
                          : "bg-btn-canceled"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-2 flex space-x-2 justify-between">
                    <button
                      className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                      title="Detail"
                    >
                      <span className="group-hover:text-gray-700 group-hover:scale-125 transition-transform duration-200 ease-in-out">
                        <Eye />
                      </span>
                      {/* <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out">
                        View
                      </span> */}
                    </button>
                    <button
                      className="hover:cursor-pointer text-green-500 group flex items-center space-x-1"
                      title="Edit"
                    >
                      <span className="group-hover:text-green-700 group-hover:scale-125 transition-transform duration-200 ease-in-out">
                        <UserRoundPen />
                      </span>
                      {/* <span className="hidden lg:block group-hover:text-green-700 transition-colors duration-200 ease-in-out">
                        Edit
                      </span> */}
                    </button>

                    <button
                      className="hover:cursor-pointer text-red-500 group flex items-center space-x-1"
                      title="Delete"
                    >
                      <span className="group-hover:text-red-700 group-hover:scale-125 transition-transform duration-200 ease-in-out">
                        <Trash2 />
                      </span>
                      {/* <span className="hidden lg:block group-hover:text-red-700 transition-colors duration-200 ease-in-out">
                        Delete
                      </span> */}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2 text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
