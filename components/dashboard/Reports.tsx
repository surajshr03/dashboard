"use client";
import { User } from "lucide-react";
import "@/components/dashboard/CSS/dashboard.css";

const Reports = () => {
  const reports = [
    {
      id: 1,
      name: "John Doe",
      img: "", 
      report: "Completed 10 bookings this week with excellent reviews.",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "", 
      report: "Achieved the highest revenue among all users this month.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      img: "", 
      report: "Pending 5 bookings with high customer expectations.",
    },
  ];

  return (
    <>
     <h6 className="title">
        Reports
      </h6>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      
      {reports.map((user) => (
        <div
          key={user.id}
          className="flex flex-col items-center bg-white rounded-md p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          {/* User Image */}
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            {user.img ? (
              <img
                src={user.img}
                alt={`${user.name}'s profile`}
                className="object-cover w-full h-full"
              />
            ) : (
              <User className="text-gray-400" size={40} />
            )}
          </div>

          {/* User Name */}
          <h5 className="mt-4 text-xl font-semibold text-center text-black">
            {user.name}
          </h5>

          {/* User Report */}
          <p className="mt-2 text-sm text-center text-gray-600">{user.report}</p>
        </div>
      ))}
    </div>

    </>

  );
};

export default Reports;
