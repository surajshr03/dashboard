'use client';

import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/SideBar";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body className={'overflow-hidden inter.className'}>
        <div className="relative w-full h-screen  ">
          {/* Sidebar */}
          <SideBar isVisible={isSidebarVisible} />

          {/* Main Content Area */}
          <div
            className={`flex-1 transition-all duration-300 ${isSidebarVisible ? "ml-64" : "ml-0"
              }`}
          >
            {/* Navbar */}
            <NavBar onHamburgerClick={toggleSidebar} isSidebarVisible={isSidebarVisible} />

            {/* Page Content */}
            <div className="p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
