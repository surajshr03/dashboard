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
  const [userRole, setUserRole] = useState<string | null>(null);  // 'admin' | 'user' | 'guest'
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the 'role' from query params
  const roleFromUrl = searchParams.get("role");

  useEffect(() => {
    // Only run this on the client-side (since `localStorage` is a browser-only API)
    if (typeof window !== 'undefined') {
      const storedRole = localStorage.getItem('role');
  
      // If no role in query params or localStorage, redirect to login
      if (!roleFromUrl && !storedRole) {
        router.push("/auth/login");
      } else {
        // If role exists in URL, store it in localStorage
        if (roleFromUrl) {
          localStorage.setItem('role', roleFromUrl);
          setUserRole(roleFromUrl); 
        } else if (storedRole) {
          setUserRole(storedRole); 
        }
  
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 300);
  
        return () => clearTimeout(timer);
      }
    }
  }, [roleFromUrl]); 
  

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  // Fallback to 'guest' if userRole is still null
  const currentUserRole = userRole || 'guest';

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthProvider>
          {pathName === '/auth/login' ? (
            // Authentication pages without dashboard layout
            <div className="flex items-center justify-center min-h-screen">
              {children}
            </div>
          ) : (
            // Dashboard layout with protected routes
            <div className="flex w-full h-screen overflow-auto">
              {/* Sidebar */}
              <SideBar isVisible={isSidebarVisible} user_role={currentUserRole} />
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
                  user_role={currentUserRole}
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
