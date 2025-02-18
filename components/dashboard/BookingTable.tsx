"use client";
import { Eye, Search, Trash2, UserRoundPen, X } from "lucide-react";

import "@/components/dashboard/CSS/dashboard.css";
import { Bookings } from "@/data/data";
import { BookingProps } from "@/data/type";
import { SetStateAction, useEffect, useState } from "react";
import Pagination from "./Pagination";

const BookingTable = () => {
  // State for filter dropdown visibility
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [filterDateRange, setFilterDateRange] = useState("All"); // State for selected date range filter

  const [editDetails, setEditDetails] = useState<BookingProps | null>(null);
  const [isBookingUpdated, setIsBookingUpdated] = useState(false);

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const [deleteSelected, setDeleteSelected] = useState<BookingProps | null>(null);
  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const [selectedBooking, setSelectedBooking] = useState<BookingProps | null>(
    null
  );
  // EDIT DETAILS
  const handleEditDetails = (Booking: BookingProps) => {
    setEditDetails(Booking);
  };
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    if (editDetails) {
      setEditDetails({
        ...editDetails,
        [field]: e.target.value, // Dynamically update the specific field
      });
    }
  };
  const closeEditPopup = () => {
    setEditDetails(null);
  }
  // After UPDATED

  const handleUpdated = () => {
    setIsBookingUpdated(true);
  };
  const closeUpdated = () => {
    setIsBookingUpdated(false);
    setEditDetails(null);

  };

  // Toggle filter dropdown
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  // // Function to handle filter change
  // const handleFilterChange = (status: SetStateAction<string>) => {
  //   setFilterStatus(status);
  //   setFilterOpen(false); // Close the dropdown after selection
  // };

  // Function to handle search input change
  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle date range filter change
  const handleDateRangeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterDateRange(e.target.value);
  };

  //function for popup detail display and close it
  const handleViewDetails = (booking: BookingProps) => {
    setSelectedBooking(booking);
  };
  const handleDelete = (booking: BookingProps) => {
    setDeleteSelected(booking);
  };
  const closeDeletePopup = () => {
    setDeleteSelected(null);
  }
  const closePopup = () => {
    setSelectedBooking(null);
  }
  // Close popup on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
        closeDeletePopup();
      }
    };
    if (deleteSelected) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [deleteSelected]);


  // Function to filter bookings based on selected filter (status, date range) and search query
  const filteredBookings = Bookings.filter((booking) => {
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

  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = filteredBookings.slice(startIndex, startIndex + pageSize);

  // Close popup on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
        closeEditPopup();
      }
    };
    if (filteredBookings) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredBookings]);

  return (
    <div className="wrapper my-4">
      <h5 className="title">Manage Bookings</h5>
      <h6 className="sub-title">Manage and view bookings</h6>


      {/* Search and Filter Section */}
      <div className="grid grid-cols-6 gap-4 my-6">
        {/* Search Input */}
        <div className="col-span-6 lg:col-span-4 relative">
          <input
            type="text"
            placeholder="Search Book Title ..."
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

          {/* Filter Dropdown */}{" "}
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
              {" "}
              <ul className="py-2">
                {" "}
                {["All", "Confirmed", "Pending", "Canceled"].map((status) => (
                  <li
                    key={status}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setFilterStatus(status);
                      setFilterOpen(false);
                    }}
                  >
                    {" "}
                    {status}{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>
          )}
        </div>
      </div>


      {/* Table */}
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto w-full p-4">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 text-dark-inactive-title">Customer Name</th>
              <th className="p-2 text-dark-inactive-title">Book Title</th>
              <th className="p-2 text-dark-inactive-title">Status</th>
              <th className="p-2 text-dark-inactive-title">Date</th>
              <th className="p-2 text-dark-inactive-title">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-2 text-dark-inactive-title">
                    {booking.name}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {booking.book}
                  </td>
                  <td className="p-2 text-dark-inactive-title">

                    <span
                      className={`rounded-full w-full text-sm ${booking.status.toLowerCase() === "confirmed"
                        ? "bg-btn-confirmed"
                        : booking.status.toLowerCase() === "pending"
                          ? "bg-btn-pending"
                          : "bg-btn-canceled"
                        }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {booking.date}
                  </td>
                  <td className="p-2 flex space-x-2 justify-between">
                    <button
                      onClick={() => {
                        handleViewDetails(booking)

                      }}
                      className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                      title="Detail"
                    >
                      <span className="group-hover:text-gray-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                        <Eye />
                      </span>
                      {/* <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out">
                        View
                      </span> */}
                    </button>
                    <button
                      className="hover:cursor-pointer text-green-500 group flex items-center space-x-1"
                      title="Edit"
                      onClick={() => handleEditDetails(booking)}
                    >
                      <span className="group-hover:text-green-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                        <UserRoundPen />
                      </span>
                      {/* <span className="hidden lg:block group-hover:text-green-700 transition-colors duration-200 ease-in-out">
                        Edit
                      </span> */}
                    </button>

                    <button
                      className="hover:cursor-pointer text-red-500 group flex items-center space-x-1"
                      title="Delete"
                      onClick={() => handleDelete(booking)}
                    >
                      <span className="group-hover:text-red-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
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
                <td className="p-2 text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="w-full ">
          <Pagination
            items={filteredBookings.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>
      </div>

      {/* View Detail PopUp */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-2">
            <h2 className="text-2xl font-bold mb-3 text-left">
              User Details
            </h2>
            <div className="flex flex-col">
              <strong className="text-lg">Customer Name:</strong>
              <p> {selectedBooking.name}</p>
            </div>

            <div className="flex flex-col">
              <strong className="text-lg">Book:</strong>
              <p>{selectedBooking.book}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-lg">Date:</strong>
              <p>{selectedBooking.date}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-lg">Status:</strong>
              <p>{selectedBooking.status}</p>
            </div>

            <div className="mt-3 flex flex-col justify-center items-center">
              <button
                className=" px-4 py-2 w-full bg-gray-300 text-gray-800 rounded-md"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Popup */}
      {editDetails &&
        (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-4">
              {/* Check if new book has been added */}
              {isBookingUpdated ? (
                // Show  message after new book added
                <>
                  <div className="flex flex-col bg-white items-center gap-2 justify-center">
                    <p className="w-full text-xl font-bold text-center">Updated Successfully.</p>
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
                // Show form to add new book before it's added
                <>
                  <div className="flex bg-white items-center justify-between">
                    <h2 className="text-2xl font-bold  text-center">
                      Edit book
                    </h2>
                    <h2 className="text-2xl  text-center cursor-pointer justify-end flex text-inactive-title font-semibold" onClick={closeEditPopup}><X /></h2>
                  </div>
                  <div className="flex flex-col">
                    <input type="text"
                      placeholder="Name"
                      value={editDetails.name}
                      onChange={(e) => handleEditInputChange(e, 'name')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>
                  <div
                    className="flex flex-col">
                    <input type="text"
                      placeholder="Book"
                      value={editDetails.book}
                      onChange={(e) => handleEditInputChange(e, 'book')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>

                  <div className="flex flex-col">
                    <select
                      value={editDetails.status}
                      onChange={(e) => handleEditInputChange(e, 'status')}
                      className="border-2 text-sm rounded-md p-2"
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </div>

                  <button
                    className="btn bg-metricsGreen flex items-center justify-center px-4 py-2 border w-full"
                    onClick={() => handleUpdated()}
                  >
                    <p className="font-bold text-base text-white">Update Changes</p>

                  </button>

                </>
              )}




            </div>
          </div>
        )
      }

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
  );
};

export default BookingTable;
