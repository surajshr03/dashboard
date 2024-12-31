'use client';
import Loading from "@/components/dashboard/Loading";
import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/Sidebar/SideBar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300); // Smooth loading delay
    setIsLoading(true); // Trigger loading state on path change

    return () => clearTimeout(timer);
  }, [pathName]);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  // const user_role = 'superadmin';
  const user_role = 'admin';

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
