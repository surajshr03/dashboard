"use client";
import {
  Calendar,
  ClipboardCopy,
  BookOpen,
  NotebookTabs,
  BookAudio,
  ChevronDown,
  Users,
  List,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const MenuItems = (userRole: string) => {
  const pathname = usePathname();

  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);

  const toggleBookings = () => {
    setIsBookingsOpen(!isBookingsOpen);
  };

  const toggleUserManagement = () => {
    setIsUserManagementOpen(!isUserManagementOpen);
  };

  const toggleBooks = () => {
    setIsBooksOpen(!isBooksOpen);
  };

  const menuItems = {
    admin: (
      <>
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
              className={`transition-transform duration-300 ${
                isBookingsOpen ? "rotate-180" : "rotate-0"
              }`}
              size={18}
            />
          </div>
          {isBookingsOpen && (
            <ul className="pl-8 mt-2 space-y-2">
              <li
                className={`flex items-center px-2 rounded text-base ${
                  pathname === "/dashboard/bookings"
                    ? "bg-active-gray"
                    : "hover:bg-active-gray"
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

        {/* Manage Books Dropdown */}
        <li className="cursor-pointer">
          <div
            onClick={toggleBooks}
            className="flex items-center justify-between w-full p-2 rounded text-base hover:bg-active-gray"
          >
            <div className="flex items-center">
              <Calendar size={20} className="mr-2" />
              <span>Manage Books</span>
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${
                isBooksOpen ? "rotate-180" : "rotate-0"
              }`}
              size={18}
            />
          </div>
          {isBooksOpen && (
            <ul className="pl-8 mt-2 space-y-2">
              <li
                className={`flex items-center px-2 rounded text-base ${
                  pathname === "/dashboard/books/normal-books"
                    ? "bg-active-gray"
                    : "hover:bg-active-gray"
                }`}
              >
                <BookOpen size={20} className="mr-2" />
                <Link
                  href="/dashboard/books/normal-books"
                  className="block p-2 rounded text-sm grow"
                >
                  Normal Book
                </Link>
              </li>
              <li
                className={`flex items-center px-2 rounded text-base ${
                  pathname === "/dashboard/books/ebook"
                    ? "bg-active-gray"
                    : "hover:bg-active-gray"
                }`}
              >
                <NotebookTabs size={20} className="mr-2" />
                <Link
                  href="/dashboard/books/ebook"
                  className="block p-2 rounded text-sm grow"
                >
                  Ebook
                </Link>
              </li>
              <li
                className={`flex items-center px-2 rounded text-base ${
                  pathname === "/dashboard/books/audio-books"
                    ? "bg-active-gray"
                    : "hover:bg-active-gray"
                }`}
              >
                <BookAudio size={20} className="mr-2" />
                <Link
                  href="/dashboard/books/audio-books"
                  className="block p-2 rounded text-sm grow"
                >
                  Audio Book
                </Link>
              </li>
            </ul>
          )}
        </li>
      </>
    ),
    superadmin: (
      <>
        {/* SuperAdmin-specific Content */}
        
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
              className={`transition-transform duration-300 ${
                isUserManagementOpen ? "rotate-180" : "rotate-0"
              }`}
              size={18}
            />
          </div>
          {isUserManagementOpen && (
            <ul className="pl-8 mt-2 space-y-2">
              <li
                className={`flex items-center px-2 rounded text-base ${
                  pathname === "/dashboard/users"
                    ? "bg-active-gray"
                    : "hover:bg-active-gray"
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
      </>
    ),
  };

//   return menuItems[userRole] || (
//     <li className="flex items-center p-2 rounded text-base text-gray-500">
//       Access Restricted
//     </li>
//   );

};


// "use client";
// import {
//   BadgeDollarSign,
//   BellRing,
//   FileChartColumn,
//   LayoutDashboard,
//   Settings,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { MenuItems } from "./MenuItems"; // Import the MenuItems function

// type SideBarProps = {
//   isVisible: boolean;
// };

// const SideBar = ({ isVisible }: SideBarProps) => {
//   const pathname = usePathname();
//   const user_role: string = "superadmin"; // Example role

//   return (
//     <div
//       className={`fixed top-0 left-0 z-20 h-full w-64 p-5 border-r-2 border-gray bg-white text-black transform ${
//         isVisible ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300`}
//     >
//       {/* Sidebar Header */}
//       <Link href="/">
//         <div className="flex text-2xl font-bold mb-8 items-center">
//           <img src="/favicon.ico" width={50} height={50} className="rounded-full" />
//           Kitab<span className="text-brand">Yatra</span>
//         </div>
//       </Link>

//       {/* Navigation Menu */}
//       <nav>
//         <ul className="space-y-2">
//           {/* Dashboard Link */}
//           <li className="text-base flex items-center p-2 rounded hover:bg-active-gray">
//             <LayoutDashboard size={20} className="mr-2" />
//             <Link href="/dashboard" className="block w-full rounded">
//               Dashboard
//             </Link>
//           </li>

//           {/* Render Role-Specific Menu Items */}
//           {MenuItems(user_role)}

//           {/* General Links */}
//           <li
//             className={`flex items-center p-2 rounded text-base ${
//               pathname === "/dashboard/reports" ? "bg-active-gray" : "hover:bg-active-gray"
//             }`}
//           >
//             <FileChartColumn size={20} className="mr-2" />
//             <Link href="/dashboard/reports" className="block w-full">
//               Reports
//             </Link>
//           </li>
//           <li
//             className={`flex items-center p-2 rounded text-base ${
//               pathname === "/dashboard/settings" ? "bg-active-gray" : "hover:bg-active-gray"
//             }`}
//           >
//             <Settings size={20} className="mr-2" />
//             <Link href="/dashboard/settings" className="block w-full">
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SideBar;

