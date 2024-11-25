"use client";
import { Eye, Trash2, UserRoundPen } from "lucide-react";
import { useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";

const BookingTable = () => {
  // Mock data for bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "John Doe",
      book: "The Great Gatsby",
      date: "2023-05-01",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      book: "To Kill a Mockingbird",
      date: "2023-05-02",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      book: "1984",
      date: "2023-05-03",
      status: "Canceled",
    },
  ]);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg text-black mb-4">
      <h5 className="title">Manage Bookings</h5>
      <h6 className="sub-title text-inactive-title">
        Manage and view bookings
      </h6>

      {/* Search and Add New Booking Button */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
        <div className="lg:col-span-3">
          <input
            type="text"
            placeholder="Search bookings..."
            className="p-2 border rounded-md w-full bg-gray-100"
          />
        </div>
        <div className="lg:col-span-3 flex justify-end">
          <button className="add-btn">Add New Booking</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto w-full p-4">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Customer</th>
              <th className="p-2">Book</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-2">{booking.customer}</td>
                  <td className="p-2">{booking.book}</td>
                  <td className="p-2">{booking.date}</td>
                  <td className="p-2">
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
                      <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out">
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
                      <span className="hidden lg:block group-hover:text-green-700 transition-colors duration-200 ease-in-out">
                        Edit
                      </span>
                    </button>

                    <button
                      className="hover:cursor-pointer text-red-500 group flex items-center space-x-1"
                      title="Delete"
                    >
                      <span className="group-hover:text-red-700 group-hover:scale-125 transition-transform duration-200 ease-in-out">
                        <Trash2 />
                      </span>
                      <span className="hidden lg:block group-hover:text-red-700 transition-colors duration-200 ease-in-out">
                        Delete
                      </span>
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
