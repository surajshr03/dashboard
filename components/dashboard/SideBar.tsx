"use client";
import {
  BadgeDollarSign,
  BellRing,
  BookOpen,
  Calendar,
  ChevronDown,
  ClipboardCopy,
  FileChartColumn,
  LayoutDashboard,
  List,
  Settings,
  Users
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SideBarProps = {
  isVisible: boolean;
};

const SideBar = ({ isVisible }: SideBarProps) => {
  const pathname = usePathname();
  // console.log(pathname);

  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);

  const toggleBookings = () => {
    setIsBookingsOpen(!isBookingsOpen);
  };

  const toggleUserManagement = () => {
    setIsUserManagementOpen(!isUserManagementOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-20 h-full w-64 p-5 border-r-2 border-gray bg-white text-black transform ${isVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
    >
      {/* Sidebar Header */}
      <Link href="/">
        <div className="flex text-2xl font-bold mb-8 items-center">
          <img src="/favicon.ico" width={50} height={50} className="rounded-full"/>
          Kitab<span className="text-brand">Yatra</span>
        </div>
      </Link>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-2">
          {/* Dashboard Link */}
          <li
            className="text-base flex items-center p-2 rounded  hover:bg-active-gray">
            <LayoutDashboard size={20} className="mr-2" />
            <Link href="/dashboard" className="block w-full rounded">
              Dashboard
            </Link>
          </li>

          {/* Manage Bookings Dropdown */}
          <li className="cursor-pointer">
            <div
              onClick={toggleBookings}
              className="flex items-center justify-between w-full p-2 rounded text-base hover:bg-active-gray"
            >
              <div className="flex items-center">
                <Calendar size={20} className="mr-2" />
                <span>Manage Bookings</span>
              </div>
              <ChevronDown
                className={`transition-transform duration-300 ${isBookingsOpen ? "rotate-180" : "rotate-0"
                  }`}
                size={18}
              />
            </div>
            {isBookingsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li
                  className={`flex items-center px-2 rounded text-base ${pathname === "/dashboard/bookings" ? "bg-active-gray" : "hover:bg-active-gray"
                    }`}
                >
                  <ClipboardCopy size={20} className="mr-2" />
                  <Link
                    href="/dashboard/bookings"
                    className="block p-2 rounded text-sm grow"
                  >
                    Booking
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Menu Items */}
          {/* <li
            className={`flex items-center p-2 rounded text-sm ${pathname === "/dashboard/e-books" ? "bg-active-gray" : "hover:bg-active-gray"
              }`}
          >
            <Computer className="mr-2" />
            <Link href="/dashboard/e-books" className="block w-full">
              E-Books
            </Link>
          </li> */}
          <li
            className={`flex items-center p-2 rounded text-base ${pathname === "/dashboard/books" ? "bg-active-gray" : "hover:bg-active-gray"
              }`}
          >
            <BookOpen size={20} className="mr-2" />
            <Link href="/dashboard/books" className="block w-full">
              Manage Books
            </Link>
          </li>
          <li
            className={`flex items-center p-2 rounded text-base ${pathname === "/dashboard/transactions" ? "bg-active-gray" : "hover:bg-active-gray"
              }`}
          >
            <BadgeDollarSign size={20} className="mr-2" />
            <Link href="/dashboard/transactions" className="block w-full">
              Transactions
            </Link>
          </li>

          {/* User Management Dropdown */}
          <li className="cursor-pointer">
            <div
              onClick={toggleUserManagement}
              className="flex items-center justify-between w-full p-2 rounded text-base hover:bg-active-gray"
            >
              <div className="flex items-center">
                <Users size={20} className="mr-2" />
                <span>User Management</span>
              </div>
              <ChevronDown
                className={`transition-transform duration-300 ${isUserManagementOpen ? "rotate-180" : "rotate-0"
                  }`}
                size={18}
              />
            </div>
            {isUserManagementOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li
                  className={`flex items-center px-2 rounded text-base ${pathname === "/dashboard/users" ? "bg-active-gray" : "hover:bg-active-gray"
                    }`}
                >
                  <List size={20} className="mr-2" />
                  <Link
                    href="/dashboard/users"
                    className="block p-2 rounded text-base grow"
                  >
                    User List
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`flex items-center p-2 rounded text-base ${pathname === "/dashboard/notifications" ? "bg-active-gray" : "hover:bg-active-gray"
              }`}
          >
            <BellRing size={20} className="mr-2" />
            <Link href="/dashboard/notifications" className="block w-full">
              Notifications
            </Link>
          </li>
          <li
            className={`flex items-center p-2 rounded text-base ${pathname === "/dashboard/reports" ? "bg-active-gray" : "hover:bg-active-gray"
              }`}
          >
            <FileChartColumn size={20} className="mr-2" />
            <Link href="/dashboard/reports" className="block w-full">
              Reports
            </Link>
          </li>

          <li
            className={`flex items-center p-2 rounded text-base ${pathname === "/dashboard/settings" ? "bg-active-gray" : "hover:bg-active-gray"
              }`}
          >
            <Settings size={20} className="mr-2" />
            <Link href="/dashboard/settings" className="block w-full">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
