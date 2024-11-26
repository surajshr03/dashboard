"use client";
import "@/components/dashboard/CSS/dashboard.css";
import { GitGraphIcon } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: 1,
      name: "Booking Reports",
      img: "", 
      report: "Completed 10 bookings this week with excellent reviews.",
    },
    {
      id: 2,
      name: "Sales Report",
      img: "", 
      report: "Achieved the highest revenue among all users this month.",
    },
    {
      id: 3,
      name: "User Activity",
      img: "", 
      report: "Pending 5 bookings with high customer expectations.",
    },
  ];

  return (
    <>
     <h6 className="title">
        Reports
      </h6>

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      
      {reports.map((user) => (
        <div
          key={user.id}
          className="flex flex-col bg-white rounded-md p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          {/* User Image */}
          <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
            {user.img ? (
              <img
                src={user.img}
                alt={`${user.name}'s profile`}
                className="object-cover w-full h-full"
              />
            ) : (
              <GitGraphIcon className="text-gray-400" size={400} />
            )}
          </div>

          {/* User Name */}
          <h5 className="mt-4 text-xl font-semibold  text-black">
            {user.name}
          </h5>

          {/* User Report */}
          <p className="mt-2 text-sm  text-gray-600">{user.report}</p>
          <button className="bg-black text-white p-3 w-max text-center my-3 rounded-md">Download {`${user.name}`}</button>
        </div>
      ))}
    </div>

    </>

  );
};

export default Reports;
