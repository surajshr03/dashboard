"use client";
import { BookOpen, ChevronDown, Computer, FileChartColumn, LayoutDashboard, Settings, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type SideBarProps = {
  isVisible: boolean;
};

const SideBar = ({ isVisible }: SideBarProps) => {
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);

  const toggleBookings = () => {
    setIsBookingsOpen(!isBookingsOpen);
  };

  const toggleUserManagement = () => {
    setIsUserManagementOpen(!isUserManagementOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full w-64  p-5 border-r-2 border-gray  bg-white text-black transform ${isVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}  >
      {/* Sidebar Header */}
      <Link href="/">
        <div className="text-2xl font-bold mb-8">KitabYatra</div>
      </Link>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-2">
          {/* Dashboard Link */}
          <li className="flex items-center p-2 bg-active-gray rounded">
            <LayoutDashboard className="mr-2" />
            <Link href="/dashboard" className="block w-full rounded text-sm">
              Dashboard
            </Link>
          </li>

          {/* Manage Bookings Dropdown */}
          <li>
            <div
              onClick={toggleBookings}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-active-gray cursor-pointer text-sm"
            >
              <div className="flex items-center">
                <ShoppingCart className="mr-2" />
                <span>Manage Bookings</span>
              </div>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isBookingsOpen ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </div>
            {/* Dropdown Items for "Manage Bookings" */}
            {isBookingsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/dashboard/bookings"
                    className="block p-2 rounded hover:bg-active-gray text-sm"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/bookings"
                    className="block p-2 rounded hover:bg-active-gray text-sm"
                  >
                    Booking
                  </Link>
                </li>
              </ul>
            )}
          </li>


          {/* Other Menu Items */}
          <li className="flex items-center p-2 rounded hover:bg-active-gray text-sm">
          <Computer className="mr-2"/> 
            <Link href="/dashboard/e-books" className="block w-full">
              <span>E-Books</span>
            </Link>
          </li>
          <li className="flex items-center p-2 rounded hover:bg-active-gray text-sm">
          <BookOpen className="mr-2"/> 
            <Link href="/dashboard/books" className="block w-full">
            <span>Manage Books</span>
            </Link>
          </li>
          <li className="flex items-center p-2 rounded hover:bg-active-gray text-sm">
          <ShoppingCart className="mr-2" />
            <Link href="/dashboard/transactions" className="block w-full">
              Transactions
            </Link>
          </li>


          {/* User Management Dropdown */}
          <li>
            <div
              onClick={toggleUserManagement}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-active-gray cursor-pointer text-sm"
            >
              <div className="flex items-center">
                <Users className="mr-2" />
                <span>User Management</span>
              </div>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isUserManagementOpen ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </div>
            {/* Dropdown Items for "User Management" */}
            {isUserManagementOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <Link
                    href="/dashboard/users"
                    className="block p-2 rounded hover:bg-active-gray text-sm"
                  >
                    User List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/users"
                    className="block p-2 rounded hover:bg-active-gray text-sm"
                  >
                    Add New User
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Remaining Menu Items */}
          <li className="flex items-center p-2 rounded hover:bg-active-gray text-sm">
          <FileChartColumn className="mr-2"/> 
            <Link href="/dashboard/reports" className="block w-full">
              <span>Reports</span>
            </Link>
          </li>
         
          <li className="flex items-center p-2 rounded hover:bg-active-gray text-sm">
          <Settings className="mr-2"/> 
            <Link href="/dashboard/settings" className="block w-full">
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
