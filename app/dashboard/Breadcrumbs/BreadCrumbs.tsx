"use client";  // This ensures the component runs on the client side

import { usePathname } from "next/navigation";  // To get the current path
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();  // Get the current path

  // Split the pathname into parts and remove any empty parts
  const pathParts = pathname?.split("/").filter(Boolean) || [];

  // Map over each part to create the breadcrumb links
  const buildBreadcrumbs = () => {
    let accumulatedPath = "";  // To accumulate the path for each breadcrumb
    return pathParts.map((part, index) => {
      accumulatedPath += "/" + part;  // Build the path incrementally
      return (
        <span key={accumulatedPath} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-500"> &gt; </span>}  {/* Separator */}
          <Link href={accumulatedPath} className="text-sm text-darkest-inactive-title font-medium hover:underline">
            {part.charAt(0).toUpperCase() + part.slice(1)}  {/* Capitalize the first letter */}
          </Link>
        </span>
      );
    });
  };

  return (
    <div className="flex items-center justify-end gap-2 ">
      <Link href="/" className="text-sm text-inactive-title font-medium ">
      Home &nbsp; &gt;
      </Link>
      
      {buildBreadcrumbs()}
    </div>
  );
};

export default Breadcrumbs;
