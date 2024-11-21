"use client";
import { ContactRound, Trash2, UserRoundPen } from "lucide-react";
import { useState } from "react";
// import { Button } from "lucid-react"; // Import Button component from lucid-react

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
    <div className="w-full bg-white p-6 rounded-lg shadow-lg text-black">
      {/* Search and Add New Booking Button */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search bookings..."
          className="p-2 border rounded-md w-1/2"
        />
        {/* <Button className="bg-blue-500 text-white">Add New Booking</Button> */}
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse p-4">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Book</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="border p-2">{booking.customer}</td>
                <td className="border p-2">{booking.book}</td>
                <td className="border p-2">{booking.date}</td>
                <td className="border p-2">{booking.status}</td>
                <td className="border p-2 flex space-x-2 justify-between">
                  {/* <Button onClick={() => handleEdit(booking.id)} className="bg-yellow-500 text-white">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleConfirm(booking.id)}
                    className="bg-green-500 text-white"
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() => handleCancel(booking.id)}
                    className="bg-red-500 text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleDelete(booking.id)}
                    className="bg-red-500 text-white"
                  >
                    Delete
                  </Button> */}
                  <button className="hover:cursor-pointer"><ContactRound/>Detail</button>
                  <button className="hover:cursor-pointer"><UserRoundPen/> Edit</button>
                  <button className="hover:cursor-pointer"><Trash2/>Delete</button>

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

export default BookingTable;
