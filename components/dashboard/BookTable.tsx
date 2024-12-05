"use client";
import { Search, Trash2, UserRoundPen, X } from "lucide-react";

import "@/components/dashboard/CSS/dashboard.css";
import { Books } from "@/data/data";
import { BookProps } from "@/data/type";
import { SetStateAction, useEffect, useState } from "react";
import Pagination from "./Pagination";

const BookTable = () => {
  // State for filter dropdown visibility
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  const [isAddNewBookOpen, setIsAddNewBookOpen] = useState(false);
  const [isNewBookAdded, setIsNewBookAdded] = useState(false);
  const [editDetails, setEditDetails] = useState<BookProps | null>(null);
  const [deleteSelected, setDeleteSelected] = useState<BookProps | null>(null);
  const [isBookUpdated, setIsBookUpdated] = useState(false);

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };


  // Toggle filter dropdown
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  // Function to handle search input change
  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };
  // EDIT 
  const handleEditDetails = (Book: BookProps) => {
    setEditDetails(Book);
  };
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (editDetails) {
      setEditDetails({
        ...editDetails,
        [field]: e.target.value, // Dynamically update the specific field
      });
    }
  };
  const closeEditPopup = () => {
    setEditDetails(null);
  }
  // After UPDATED

  const handleUpdated = () => {
    setIsBookUpdated(true);
  };
  const closeUpdated = () => {
    setIsBookUpdated(false);
    setEditDetails(null);

  };
  // ADD NEW BOOK

  const openAddNewBookPopup = () => {
    setIsAddNewBookOpen(true);
    setIsNewBookAdded(false);
  };
  const handleAddNewBook = () => {
    setIsNewBookAdded(true);
  };
  const closeAddNewBookPopup = () => {
    setIsAddNewBookOpen(false);
  };

  // DELETE 
  const handleDelete = (Book: BookProps) => {
    setDeleteSelected(Book);
  };
  const closeDeletePopup = () => {
    setDeleteSelected(null);
  }

  // Close popup on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeEditPopup();
        closeDeletePopup();
        closeAddNewBookPopup();
      }
    };
    if (deleteSelected) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [deleteSelected, isAddNewBookOpen, editDetails]);


  // Function to filter Books based on selected filter (status, date range) and search query
  const filteredBooks = Books.filter((Book) => {
    const matchesStatus =
      filterStatus === "All" || Book.status === filterStatus;

    const matchesSearch = Book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch
  });

  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = filteredBooks.slice(startIndex, startIndex + pageSize);

  // Close popup on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeEditPopup();
      }
    };
    if (filteredBooks) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredBooks]);

  return (
    <div className="wrapper my-4">
      <h5 className="title">Manage Books</h5>
      <h6 className="sub-title">Manage and view Books</h6>


      {/* Search and Filter Section */}
      <div className="grid grid-cols-6 gap-4 my-6">
        {/* Search Input */}
        <div className="col-span-6 lg:col-span-4 relative">
          <input
            type="text"
            placeholder="Search Books..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 pl-10 pr-4 border rounded-md w-full bg-gray-100"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search />
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
            <p className="ml-2 text-sm font-light text-white">
              (&nbsp;{filterStatus}&nbsp;)
            </p>
          </button>

          {/* Filter Dropdown */}{" "}
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10">
              {" "}
              <ul className="py-2">
                {" "}
                {["All", "Available", "Unavailable"].map((status) => (
                  <li
                    key={status}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setFilterStatus(status);
                      setFilterOpen(false);
                    }}
                  >
                    {" "}
                    {status}{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>
          )}
        </div>
        {/* Add BOOK*/}
        <div className="col-span-6 md:col-span-3 lg:col-span-1  relative">
          <button
            className="btn bg-black flex items-center justify-center px-4 py-2 border w-full"
            onClick={() => openAddNewBookPopup()}
          >
            <p className="font-bold text-base text-white">Add New Book</p>

          </button>
        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto max-w-full custom-scrollbar">
        <table className="table-auto w-full p-4">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 text-dark-inactive-title">Title</th>
              <th className="p-2 text-dark-inactive-title">Author</th>
              <th className="p-2 text-dark-inactive-title">Genre</th>
              <th className="p-2 text-dark-inactive-title">Price <span className="text-xs">( in Rs. )</span></th>
              <th className="p-2 text-dark-inactive-title">Status</th>
              <th className="p-2 text-dark-inactive-title">Stock</th>
              <th className="p-2 text-dark-inactive-title">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((Book) => (
                <tr key={Book.id} className="border-b">
                  <td className="p-2 text-dark-inactive-title">
                    {Book.title}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {Book.author}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {Book.genre}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    {Book.price}
                  </td>
                  <td className="p-2 text-dark-inactive-title">
                    <span
                      className={`rounded-full w-full text-sm ${Book.status.toLowerCase() === "available"
                        ? "bg-btn-confirmed"
                        : "bg-btn-canceled"
                        }`}
                    >
                      {Book.status}
                    </span>
                  </td>

                  <td className="p-2 text-dark-inactive-title">
                    {Book.quantity}
                  </td>
                  <td className="p-2 flex space-x-3 justify-between">
                    <button
                      className="hover:cursor-pointer text-green-500 group flex items-center space-x-1"
                      title="Edit"
                      onClick={() => handleEditDetails(Book)}
                    >
                      <span className="group-hover:text-green-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                        <UserRoundPen />
                      </span>
                    </button>

                    <button
                      className="hover:cursor-pointer text-red-500 group flex items-center space-x-1"
                      title="Delete"
                      onClick={() => handleDelete(Book)}
                    >
                      <span className="group-hover:text-red-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                        <Trash2 />
                      </span>
                      {/* <span className="hidden lg:block group-hover:text-red-700 transition-colors duration-200 ease-in-out">
                        Delete
                      </span> */}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2 text-center">
                  No Books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="w-full ">
          <Pagination
            items={filteredBooks.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>
      </div>

      {/* Edit Details PopUp */}
      {editDetails &&
        (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-4">
              {/* Check if new book has been added */}
              {isBookUpdated ? (
                // Show  message after new book added
                <>
                  <div className="flex flex-col bg-white items-center gap-2 justify-center">
                    <p className="w-full text-xl font-bold text-center">Updated Successfully.</p>
                  </div>

                  {/* Displays additional information like the book title or a button to add another book */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <button
                      onClick={() => closeUpdated()}
                      className="Delbtn w-full bg-inactive-title text-white"
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                // Show form to add new book before it's added
                <>
                  <div className="flex bg-white items-center justify-between">
                    <h2 className="text-2xl font-bold  text-center">
                      Edit book
                    </h2>
                    <h2 className="text-2xl  text-center cursor-pointer justify-end flex text-inactive-title font-semibold" onClick={closeEditPopup}><X /></h2>
                  </div>

                  <div className="flex flex-col">
                    <input type="text"
                      placeholder="Title"
                      value={editDetails.title}
                      onChange={(e) => handleEditInputChange(e, 'title')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>
                  <div
                    className="flex flex-col">
                    <input type="text"
                      placeholder="Author"
                      value={editDetails.author}
                      onChange={(e) => handleEditInputChange(e, 'author')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>
                  <div
                    className="flex flex-col">
                    <input type="number"
                      placeholder="Price"
                      value={editDetails.price}
                      onChange={(e) => handleEditInputChange(e, 'price')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>
                  <div
                    className="flex flex-col">
                    <input type="text"
                      placeholder="Genre"
                      value={editDetails.genre}
                      onChange={(e) => handleEditInputChange(e, 'genre')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>
                  <div
                    className="flex flex-col">
                    <input type="number"
                      placeholder="Quantity"
                      value={editDetails.quantity}
                      onChange={(e) => handleEditInputChange(e, 'quantity')}
                      className="border-2 text-sm rounded-md p-2"></input>
                  </div>

                  <button
                    className="btn bg-metricsGreen flex items-center justify-center px-4 py-2 border w-full"
                    onClick={() => handleUpdated()}
                  >
                    <p className="font-bold text-base text-white">Update Changes</p>

                  </button>
                </>
              )}

            </div>
          </div>)
      }

      {/* Delete Popup */}
      {deleteSelected &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-3">
            <h2 className="text-2xl  text-center cursor-pointer justify-end flex text-inactive-title font-semibold" onClick={closeDeletePopup}><X /></h2>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Are you sure you want to delete this entry?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <button onClick={closeDeletePopup} className="Delbtn Delbtn-delete w-full text-base">Delete</button>
              <button onClick={closeDeletePopup} className="Delbtn Delbtn-cancel w-full text-base">Cancel</button>
            </div>


          </div>
        </div>
      }
      {/* ADD NEW BOOK */}
      {isAddNewBookOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col bg-white p-6 rounded-md shadow-lg w-96 gap-4">
            {/* Check if new book has been added */}
            {isNewBookAdded ? (
              // Show  message after new book added
              <>
                <div className="flex flex-col bg-white items-center gap-2 justify-center">
                  <h2 className="text-3xl font-bold text-center">
                    Congratulations!
                  </h2>
                  <p className="w-full text-xl font-bold text-center">New Book Added Successfully.</p>
                </div>

                {/* Displays additional information like the book title or a button to add another book */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <button
                    onClick={() => closeAddNewBookPopup()}
                    className="Delbtn w-full bg-inactive-title text-white"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              // Show form to add new book before it's added
              <>
                <div className="flex bg-white items-center justify-between">
                  <h2 className="text-2xl font-bold text-center">
                    Add New Book
                  </h2>
                  <h2
                    className="text-2xl text-center cursor-pointer justify-end flex text-inactive-title font-semibold"
                    onClick={() => closeAddNewBookPopup()}
                  >
                    <X />
                  </h2>
                </div>

                <div className="flex flex-col">
                  <input type="text" placeholder="Title" className="border-2 text-sm rounded-md p-2" />
                </div>
                <div className="flex flex-col">
                  <input type="text" placeholder="Author" className="border-2 text-sm rounded-md p-2" />
                </div>
                <div className="flex flex-col">
                  <input type="number" placeholder="Price" className="border-2 text-sm rounded-md p-2" />
                </div>
                <div className="flex flex-col">
                  <input type="text" placeholder="Genre" className="border-2 text-sm rounded-md p-2" />
                </div>
                <div className="flex flex-col">
                  <input type="number" placeholder="Quantity" className="border-2 text-sm rounded-md p-2" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <button
                    onClick={() => handleAddNewBook()}
                    className="Delbtn w-full bg-metricsGreen text-white"
                  >
                    Add Book
                  </button>

                  <button
                    onClick={() => closeAddNewBookPopup()}
                    className="Delbtn w-full bg-inactive-title text-white"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}


    </div>
  );
}
export default BookTable;
