'use client';
import Loading from "@/components/dashboard/Loading";
import NavBar from "@/components/dashboard/NavBar";
import SideBar from "@/components/dashboard/SideBar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import { Metadata } from "@/components/Metadata"

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname(); //gets Current path 

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => {
      clearTimeout(timer)
    };
  }, [pathName]);


  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <html lang="en">
      {/* <Head>
        <title>KitabYatra</title>
        <link type="image/ico" rel="icon" href="/favicon.ico" />
      </Head> */}
      <body className={`${inter.className}`}>
        <div className="flex w-full h-screen overflow-auto ">
          {/* Sidebar */}
          <SideBar isVisible={isSidebarVisible} />

          {/* Main Content Area */}
          <div
            className={`flex-1 overflow-x-hidden transition-all duration-300 ${isSidebarVisible ? "ml-64" : "ml-0"
              }`}
          >
            {/* Navbar */}
            <NavBar isSearchOpen={isSearchOpen} onSearchClick={toggleSearch} onHamburgerClick={toggleSidebar} isSidebarVisible={isSidebarVisible} />

            {/* Page Content */}
            {isLoading ? <Loading isSidebarVisible={isSidebarVisible} isLoading={isLoading} /> :
              <div className="flex-1 w-screen md:w-full overflow-hidden p-4 md:p-8 ">

                {children}
              </div>
            }
          </div>
        </div>

      </body>
    </html>
  );
}
