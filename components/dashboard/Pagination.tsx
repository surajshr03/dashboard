import { PaginationProps } from "@/data/type";
import React from "react";

const Pagination = ({ items, pageSize, currentPage, onPageChange }:PaginationProps) => {
    const pagesCount = Math.ceil(items / pageSize); // Total number of pages
    if (pagesCount <= 1) return null;

    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div className="flex w-max md:w-full justify-between items-center p-6 bg-gray-50">
            <p className="text-sm font-medium text-gray-500 ">
                Showing {pageSize * (currentPage - 1) + 1} -{" "}
                {Math.min(pageSize * currentPage, items)} of {items} results
            </p>
            <nav className="flex justify-end gap-1.5 ">
                {/* Previous Button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`inline-flex bg-brand items-center justify-center w-9 h-9 px-3 py-2 text-sm font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
                        ${currentPage === 1
                            ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                            : "bg-white text-gray-400 border-gray-200 hover:bg-gray-100 focus:ring-gray-900"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Page Buttons */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`inline-flex items-center justify-center w-9 h-9 px-3 py-2 text-sm font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${page === currentPage
                                ? "bg-gray-100 text-gray-900 border-gray-900"
                                : "bg-white text-gray-400 border-gray-200 hover:bg-gray-100 focus:ring-gray-900"
                            }`}
                    >
                        {page}
                        
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === pagesCount}
                    className={`inline-flex items-center justify-center w-9 h-9 px-3 py-2 text-sm font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentPage === pagesCount
                            ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                            : "bg-white text-gray-400 border-gray-200 hover:bg-gray-100 focus:ring-gray-900"
                        }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7-7"
                        />
                    </svg>
                </button>
            </nav>
        </div>
    );
};

export default Pagination;
