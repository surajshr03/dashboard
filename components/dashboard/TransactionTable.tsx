'use client'
import "@/components/dashboard/CSS/dashboard.css";
import { Transaction } from "@/data/data";
import { TransactionProps } from "@/data/type";
import { Eye, EyeClosed, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Pagination from "./Pagination";



const TransactionTable = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [viewDetails, setViewDetails] = useState<{ [key: number]: boolean }>({});

  const [filterDateRange, setFilterDateRange] = useState({ start: "", end: "" });
  const [filterAmountRange, setFilterAmountRange] = useState({ min: "", max: "" });
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionProps | null>(null);

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };


  const handleViewDetails = (transactionID: number) => {
    setViewDetails((prev) => ({
      ...prev,
      [transactionID]: !prev[transactionID],
    }));
    const transaction = Transaction.find((t) => t.id === transactionID)
    setSelectedTransaction(transaction); // Toggle the state for the specific transaction ID
  };

  // Toggle ViewDetails popup
  const closePopup = () => {
    if (selectedTransaction) {
      setViewDetails((prev) => ({
        ...prev,
        [selectedTransaction.id]: false, // Set the Eye state to closed for the current transaction
      }));
    }
    setSelectedTransaction(null);
  };

  // Toggle filter dropdown
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  // Function to handle search input change
  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  const filteredTransactions = Transaction.filter((transaction) => {

    const matchesStatus = filterStatus === "All" || transaction.status === filterStatus;

    const matchesSearch = transaction.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate =
      (!filterDateRange.start || new Date(transaction.date) >= new Date(filterDateRange.start)) &&
      (!filterDateRange.end || new Date(transaction.date) <= new Date(filterDateRange.end));

    const matchesAmount =
      (!filterAmountRange.min || parseFloat(transaction.amount) >= parseFloat(filterAmountRange.min)) &&
      (!filterAmountRange.max || parseFloat(transaction.amount) <= parseFloat(filterAmountRange.max));

    return matchesStatus && matchesSearch && matchesAmount && matchesDate;
  });

  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = filteredTransactions.slice(startIndex, startIndex + pageSize);

  // Close popup on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    if (selectedTransaction) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTransaction]);


  useEffect(() => {
    if (selectedTransaction) {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleTabKey);

      return () => {
        window.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [selectedTransaction]);

  return (
    <div className="wrapper my-4">
      <p className='title'>Transactions</p>
      <p className='sub-title'>You have {Transaction.length} new Transactions</p>

      <div className="grid grid-cols-6 gap-4 my-6">

        {/* Date Filter */}
        <div className="bg-bg-gray p-2 col-span-6 lg:col-span-3 relative">
          <p className='text-lg text-darkest-inactive-title font-semibold p-2'>Select date</p>

          <input
            type="date"
            value={filterDateRange.start}
            onChange={(e) =>
              setFilterDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
            className="p-2 text-inactive-title border rounded-md w-full mb-2"
          />
          <input
            type="date"
            value={filterDateRange.end}
            onChange={(e) =>
              setFilterDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
            className="p-2 text-inactive-title border rounded-md w-full"
          />
        </div>

        {/* Filter Amount Range */}
        <div className="bg-bg-gray p-2 col-span-6 lg:col-span-3 relative">
          <p className='text-lg text-darkest-inactive-title font-semibold p-2'>Select Amount</p>

          <input
            type="number"
            placeholder="Min Amount"
            value={filterAmountRange.min}
            onChange={(e) =>
              setFilterAmountRange((prev) => ({ ...prev, min: e.target.value }))
            }
            className="p-2 border rounded-md w-full mb-2"
          />
          <input
            type="number"
            placeholder="Max Amount"
            value={filterAmountRange.max}
            onChange={(e) =>
              setFilterAmountRange((prev) => ({ ...prev, max: e.target.value }))
            }
            className="p-2 border rounded-md w-full"
          />
        </div>
        {/* Search Input */}
        <div className="col-span-6 lg:col-span-4 relative">
          <input
            type="text"
            placeholder="Search transaction..."
            aria-label="Search transactions"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 pl-10 pr-4 border rounded-md w-full bg-gray-100"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={20} />
          </span>
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
                {["All", "Confirmed", "Pending", "Canceled"].map((status) => (
                  <li
                    key={status}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setFilterStatus(status);
                      setFilterOpen(false);
                    }}
                  >
                    {status}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Download Report*/}
        <div className="col-span-6 md:col-span-3 lg:col-span-1  relative">
          <button
            className="rounded-md bg-black flex items-center justify-start px-4 py-2 border"
          >
            {/* Filter label */}
            <p className="font-bold text-white">Download Report</p>

          </button>
        </div>

      </div>
      {/* TransactionTable */}
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto w-full border-collapse p-4 ">
          <thead className="bg-gray-100 text-left border-b-2">
            <tr>
              <th className=" p-2 text-dark-inactive-title">Remarks</th>
              <th className=" p-2 text-dark-inactive-title">Status</th>
              <th className=" p-2 text-dark-inactive-title">Date</th>
              <th className=" p-2 text-dark-inactive-title">Amount( in Rs.)</th>
              <th className=" p-2 text-dark-inactive-title">Actions</th>
            </tr>
          </thead>
          <tbody >
            {currentItems.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="p-2 text-dark-inactive-title">{transaction.description.split(' - ')[0]}</td>
                <td className="p-2 text-dark-inactive-title">
                  <span
                    className={`rounded-full text-sm ${transaction.status.toLowerCase() === "confirmed"
                      ? "bg-btn-confirmed"
                      : transaction.status.toLowerCase() === "pending"
                        ? "bg-btn-pending"
                        : "bg-btn-canceled"
                      }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="p-2 text-dark-inactive-title">{transaction.date}</td>
                <td className="p-2 text-dark-inactive-title">Rs. {transaction.amount}</td>
                <td className="flex gap-6 p-2 text-dark-inactive-title ">
                  {viewDetails[transaction.id] ?
                    <button onClick={() => handleViewDetails(transaction.id)} className="btn bg-active-gray text-sm hover:cursor-pointer text-darkest-inactive-title group flex items-center space-x-1">
                      <Eye />
                    </button> :
                    <button onClick={() => handleViewDetails(transaction.id)} className="btn bg-active-gray text-sm hover:cursor-pointer text-darkest-inactive-title group flex items-center space-x-1">
                      <EyeClosed />
                    </button>
                  }
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        {/* Pagination */}
        <div className="w-full ">
          <Pagination
            items={filteredTransactions.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>
      </div>
      {/* POPUP OverLAy */}
      {selectedTransaction &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Transaction Details</h2>
            <div className="flex flex-col">
              <strong className="text-lg">Remarks:</strong>
              <p>{selectedTransaction.description}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-lg">Status:</strong>
              <p> {selectedTransaction.status}</p>
            </div>

            <div className="flex flex-col">
              <strong className="text-lg">Date:</strong>
              <p>{selectedTransaction.date}</p>
            </div>
            <div className="flex flex-col">
              <strong className="text-lg">Amount:</strong>
              <p>{selectedTransaction.amount}</p>
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
      }
    </div >)
}

export default TransactionTable