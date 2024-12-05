"use client";
import Breadcrumbs from "@/app/dashboard/Breadcrumbs/BreadCrumbs";
import "@/components/dashboard/CSS/dashboard.css";
import { addDays, format } from "date-fns";
import { ClipboardCheck, Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Reports = () => {
  const [viewReport, setViewReport] = useState(true)
  const [reportType, setReportType] = useState<string>("bookings");
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const handleGenerateReport = () => {
    console.log(`Generating ${reportType} report for date range:`, dateRange);
    // Simulated report generation logic
  };

  const toggleView = () => {
    setViewReport((prev) => !prev)
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-end items-start lg:items-center gap-2 mb-6">

        <div>
          <Breadcrumbs />
        </div>
      </div>

      {/* Generate Report Section */}
      <div className="wrapper space-y-4 ">
        <div>
          <p className="text-xl font-semibold mb-2">Generate Report</p>
          <p className="sub-title">Select the type of report and date range</p>
        </div>

        <div className="space-y-4">
          {/* Report Type */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full p-2 border rounded-md text-dark-inactive-title text-sm "
            >
              <option value="bookings">Booking Report</option>
              <option value="sales">Sales Report</option>
              <option value="user-activity">User Activity Report</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  value={format(dateRange.from, "yyyy-MM-dd")}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, from: new Date(e.target.value) }))
                  }
                  className="text-dark-inactive-title text-sm w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">End Date</label>
                <input
                  type="date"
                  value={format(dateRange.to, "yyyy-MM-dd")}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, to: new Date(e.target.value) }))
                  }
                  className="text-dark-inactive-title text-sm w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Generate Report Button */}
          <button
            onClick={handleGenerateReport}
            className="bg-brand text-white px-4 py-2 rounded-md hover:bg-black"
          >
            Generate Report
          </button>
        </div>
      </div>
      {/* YOUR Report Section */}
      <div className="wrapper flex flex-col gap-4">
        <p className="text-lg font-semibold">Your Report</p>
        <div className="flex justify-between gap-4 items-center">
          <div className="reportDownload w-full flex gap-2 p-2 bg-active-gray rounded-md">
            <div className="flex justify-between gap-2 items-center">
              <ClipboardCheck size={20} />
              <Link href='/'>1st Report.pdf</Link>
            </div>

          </div>
          <div onClick={toggleView} className="btn hover:scale-105 bg-metrics-gray rounded-md p-2">
            {viewReport ? <Eye /> : <EyeClosed />}
          </div>
          <button className="btn bg-black text-white">Download </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
