'use client';

import Loading from "@/components/dashboard/Loading";
import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/Sidebar/SideBar";
import { Inter } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

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
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the 'role' from query params
  const role = searchParams.get("role");

  useEffect(() => {
    // If 'role' is not in query params, redirect to login
    if (!role) {
      router.push("/auth/login");
    } else {
      // If role is present, set the loading state
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300); // Smooth loading delay
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array ensures this runs only on the initial mount

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  // Use the 'role' from query params as the user role
  const user_role = role ? role : 'guest'; // Default to 'guest' if no role is provided

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthProvider>
          {pathName === '/auth/login' || pathName === '/auth/register' || pathName === '/auth/forgot-password' ? (
            // Authentication pages without dashboard layout
            <div className="flex items-center justify-center min-h-screen">
              {children}
            </div>
          ) : (
            // Dashboard layout with protected routes
            <div className="flex w-full h-screen overflow-auto">
              {/* Sidebar */}
              <SideBar isVisible={isSidebarVisible} user_role={user_role} />
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
                  user_role={user_role}
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
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
