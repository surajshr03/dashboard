"use client";

import "@/components/dashboard/CSS/dashboard.css";
import { EBooks } from "@/data/data";
import { EBookProps } from "@/data/type";
import { Eye } from 'lucide-react';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Pagination from "../Pagination";


const EBookTable = () => {
  const router = useRouter();

  const handleViewDetails = (book: EBookProps) => {
    try {
      router.push(`/dashboard/ebooks/${book.id}`);
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = EBooks.slice(startIndex, startIndex + pageSize);

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
                <th className="p-2 text-dark-inactive-title">ISBN</th>
                <th className="p-2 text-dark-inactive-title">Published Date</th>
                <th className="p-2 text-dark-inactive-title">File Size</th>
                <th className="p-2 text-dark-inactive-title">Status</th>
                <th className="p-2 text-dark-inactive-title">Format</th>
                <th className="p-2 text-dark-inactive-title">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((book) => (
                  <tr key={book.id} className="border-b">
                    <td className="p-2 text-dark-inactive-title">{book.title}</td>
                    <td className="p-2 text-dark-inactive-title">{book.author}</td>
                    <td className="p-2 text-dark-inactive-title">{book.isbn}</td>
                    <td className="p-2 text-dark-inactive-title">{book.published_date}</td>
                    <td className="p-2 text-dark-inactive-title">{book.file_size}</td>
                    <td className="p-2 text-dark-inactive-title">
                      <span
                        className={`rounded-full w-full text-sm ${
                          book.status === "Available" ? "bg-btn-confirmed" : "bg-btn-pending"
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                    <td className="p-2 text-dark-inactive-title">{book.format}</td>
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
                  <td colSpan={8} className="p-2 text-center">No E-Books found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="w-full">
            <Pagination
              items={EBooks.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EBookTable;
