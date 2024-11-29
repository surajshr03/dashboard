'use client';
import Loading from "@/components/dashboard/Loading";
import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/SideBar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Metadata } from "@/components/Metadata";
import "./globals.css";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300); // Smooth loading delay
    setIsLoading(true); // Trigger loading state on path change

    return () => clearTimeout(timer);
  }, [pathName]);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex w-full h-screen overflow-auto">
          {/* Sidebar */}
          <SideBar isVisible={isSidebarVisible} />

          {/* Main Content Area */}
          <div
            className={`flex-1 overflow-x-hidden transition-all duration-300 ${isSidebarVisible ? "ml-64" : "ml-0"
              }`}
          >
            {/* Navbar */}
            <NavBar
              isSearchOpen={isSearchOpen}
              onSearchClick={toggleSearch}
              onHamburgerClick={toggleSidebar}
              isSidebarVisible={isSidebarVisible}
            />

            {/* Page Content */}
            <div className="flex-1 w-screen md:w-full overflow-hidden p-4 md:p-8">
              {isLoading ? (
                <Loading isSidebarVisible={isSidebarVisible} isLoading={isLoading} />
              ) : (
                children
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
