"use client";
import React from "react";
import CustomLineChart from "./CustomLineChart";
import CustomBarChart from "./CustomBarChart";

const Chart = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue Statistics</h2>
          <CustomBarChart />
          Chart will be shown here
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Customer Acquisition</h2>
          <CustomLineChart />
          Chart will be shown here
        </div>
      </div>
    </div>
  );
};

export default Chart;
