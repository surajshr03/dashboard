"use client";

import "@/components/dashboard/CSS/dashboard.css";
import { getAudiobooks } from "@/data/data";
import { AudioBookProps } from "@/data/type";
import { Eye } from 'lucide-react';
import { useEffect, useState } from "react";

import Pagination from "../Pagination";


const AudioBooksTable = () => {
  const [AudioBooks, setAudioBooks] = useState<AudioBookProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAudioBook, setSelectedAudioBook] = useState<AudioBookProps | null>(
    null
  );

  const handleViewDetails = (booking: AudioBookProps) => {
    setSelectedAudioBook(booking);
  };
  const closePopup = () => {
    setSelectedAudioBook(null);
  }

  useEffect(() => {
    const fetchAudioBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAudiobooks();
        setAudioBooks(data);
      } catch (error) {
        setError(error.message || "Failed to fetch e-books");
      } finally {
        setLoading(false);
      }
    };

    fetchAudioBooks();
  }, []);



  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = AudioBooks.slice(startIndex, startIndex + pageSize);

  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="wrapper my-4">
        <h5 className="title">Manage Audio Books</h5>
        <h6 className="sub-title">Manage and view audio books list</h6>
        {loading ? (
          <p>Loading Books...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="overflow-x-auto max-w-full custom-scrollbar">
            <table className="table-auto w-full p-4">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-2 text-dark-inactive-title">Title</th>
                  <th className="p-2 text-dark-inactive-title">Author</th>
                  <th className="p-2 text-dark-inactive-title">Narrator</th>
                  <th className="p-2 text-dark-inactive-title">Duration</th>
                  <th className="p-2 text-dark-inactive-title">Release Date</th>
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
                      <td className="p-2 text-dark-inactive-title">{book.narrator}</td>
                      <td className="p-2 text-dark-inactive-title">{book.duration}</td>
                      <td className="p-2 text-dark-inactive-title">{book.release_date}</td>

                      <td className="p-2 text-dark-inactive-title">
                        <span
                          className={`rounded-full w-full text-sm ${book.status === "Available" ? "bg-btn-confirmed" : "bg-btn-pending"
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
                    <td colSpan={8} className="p-2 text-center">No Audio Books found.</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="w-full">
              <Pagination
                items={AudioBooks.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
              />
            </div>
            {selectedAudioBook && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-2">
                  <h2 className="text-2xl font-bold mb-3 text-left">
                    NormalBook Details
                  </h2>
                  <div className="flex flex-col">
                    <strong className="text-lg">Title:</strong>
                    <p> {selectedAudioBook.title}</p>
                  </div>

                  <div className="flex flex-col">
                    <strong className="text-lg">Author:</strong>
                    <p>{selectedAudioBook.author}</p>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-lg">Published date:</strong>
                    <p>{selectedAudioBook.duration}</p>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-lg">Page Count:</strong>
                    <p>{selectedAudioBook.format}</p>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-lg">ISBN:</strong>
                    <p>{selectedAudioBook.narrator}</p>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-lg">Status:</strong>
                    <p>{selectedAudioBook.status}</p>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-lg">Status:</strong>
                    <p>{selectedAudioBook.release_date}</p>
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

        )}
      </div>
    </>
  );
};

export default AudioBooksTable;

