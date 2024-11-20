"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Sidebar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const [isDropDownOpen_2, setIsDropDownOpen_2] = useState(false);

  const toggleDropDown_2 = () => {
    setIsDropDownOpen_2(!isDropDownOpen_2);
  };

  return (

    <div className=" text-black h-screen w-64 p-5 border-r-2 border-gray ">
      <div className="text-2xl font-bold mb-8">KitabYatra</div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              href="/"
              className="block w-full p-2 rounded bg-neutral-100"
            >
              Dashboard
            </Link>
          </li>

          <div className="mb-2">
            <p className="block p-2 text-xs">Title_Booking..</p>
            <li className="">
            <div
                onClick={toggleDropDown}

                className="flex items-center justify-between w-full p-2 rounded hover:bg-neutral-100 text-sm cursor-pointer"
              >
                <span>Booking Details</span>

                <ChevronDown 
                  className={`transition-transform duration-300 ${
                    isDropDownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  size={18}
                />
              </div>
              {/* Dropdown items */}
              {isDropDownOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                  <Link href="/kitabyatra/booking" className="block w-full p-2 rounded hover:bg-neutral-100  text-sm">
                  Booking
                  </Link>
                  </li>
                  <li>

                  <Link href="/kitabyatra/booking" className="block w-full p-2 rounded hover:bg-neutral-100  text-sm">

                  Booking
                  </Link>
                  </li>
                </ul>
              )}

            </li>

            <li className="">
              <Link
                href="/kitabyatra"

                className="block w-full p-2 rounded hover:bg-neutral-100 text-sm"

              >
                Title_2
              </Link>
            </li>
          </div>

          <div className="mb-2">
            <p className="block p-2 text-xs">Title_Booking_2..</p>
            <li className="">
            <div
                onClick={toggleDropDown_2}

                className="flex items-center justify-between w-full p-2 rounded hover:bg-neutral-100 text-sm cursor-pointer"

              >
                <span>Booking Details</span>
                <ChevronDown 
                  className={`transition-transform duration-300 ${
                    isDropDownOpen_2 ? "rotate-180" : "rotate-0"
                  }`}
                  size={18}
                />
              </div>
              {/* Dropdown items */}
              {isDropDownOpen_2 && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>

                  <Link href="/kitabyatra/booking" className="block w-full p-2 rounded hover:bg-neutral-100  text-sm">

                  Booking
                  </Link>
                  </li>
                  <li>

                  <Link href="/kitabyatra/booking" className="block w-full p-2 rounded hover:bg-neutral-100  text-sm">

                  Booking
                  </Link>
                  </li>
                </ul>
              )}

            </li>

            <li className="">
              <Link
                href="/kitabyatra"

                className="block w-full p-2 rounded hover:bg-neutral-100 text-sm"

              >
                Title_2
              </Link>
            </li>
          </div>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
