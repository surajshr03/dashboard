"use client";

import "@/components/dashboard/CSS/dashboard.css";
import { EBooks } from "@/data/data";
import { EBookProps } from "@/data/type";
import { Eye } from "lucide-react";
import { useState } from "react";
import Pagination from "../Pagination";

const EBookTable = () => {
  const [Ebooks, setEbooks] = useState<EBookProps[]>(EBooks);
  const [selectedBooking, setSelectedBooking] = useState<EBookProps | null>(
    null
  );

  const handleViewDetails = (booking: EBookProps) => {
    setSelectedBooking(booking);
  };
  const closePopup = () => {
    setSelectedBooking(null);
  };

  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = Ebooks.slice(startIndex, startIndex + pageSize);

  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="wrapper my-4">
        <h5 className="title">Manage E-Books</h5>
        <h6 className="sub-title">Manage and view e-books list</h6>
        <div className="overflow-x-auto max-w-full custom-scrollbar">
          <table className="table-auto w-full p-4">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 text-dark-inactive-title">Title</th>
                <th className="p-2 text-dark-inactive-title">Author</th>
                <th className="p-2 text-dark-inactive-title">Description</th>
                <th className="p-2 text-dark-inactive-title">Tags</th>
                <th className="p-2 text-dark-inactive-title">Quantity</th>
                <th className="p-2 text-dark-inactive-title">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((book) => (
                  <tr key={book.id} className="border-b">
                    <td className="p-2 text-dark-inactive-title">
                      {book.title}
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      {book.author}
                    </td>
                    <td className="p-2 text-dark-inactive-title truncate w-48">
                      {book.description}
                    </td>
                    <td className="p-2 text-dark-inactive-title">
                      {book.tags}
                    </td>
                    <td className="p-2 text-dark-inactive-title">{book.id}</td>
                    <td className="p-2 text-dark-inactive-title view-detail">
                      <button
                        onClick={() => handleViewDetails(book)}
                        className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                        title="Detail"
                      >
                        <span className="group-hover:text-gray-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                          <Eye />
                        </span>
                        <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out">
                          View Details
                        </span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-2 text-center">
                    No E-Books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="w-full">
            <Pagination
              items={Ebooks.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </div>

          {selectedBooking && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-2">
                <h2 className="text-2xl font-bold mb-3 text-left">
                  Ebook Details
                </h2>
                <div className="flex flex-col">
                  <strong className="text-lg">Title:</strong>
                  <p>{selectedBooking.title}</p>
                </div>

                <div className="flex flex-col">
                  <strong className="text-lg">Author:</strong>
                  <p>{selectedBooking.author}</p>
                </div>
                <div className="flex flex-col">
                  <strong className="text-lg">Tags:</strong>
                  <p>{selectedBooking.tags}</p>
                </div>
                <div className="flex flex-col">
                  <strong className="text-lg">Description:</strong>
                  <p>{selectedBooking.description}</p>
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
        </div>
      </div>
    </>
  );
};

export default EBookTable;
