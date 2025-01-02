"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";
import Pagination from "../Pagination";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  url: string;
  created_at: string;
  summary: string;
}

const NewsGet = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null); // Allow null for no errors
  const [currentPage, setCurrentPage] = useState(1);

  //news_2 part delete later
  const news_2: NewsItem[] = [
    {
      id: 1,
      title: "New Tech Breakthrough in AI",
      content:
        "A revolutionary breakthrough in AI technology promises to change the way we interact with machines. Experts predict widespread adoption in various industries.",
      category: "Technology",
      url: "https://example.com/new-tech-breakthrough",
      created_at: "2025-01-01T10:00:00Z",
      summary:
        "A new AI technology breakthrough could transform industries worldwide.",
    },
    {
      id: 2,
      title: "Global Markets See Record Gains",
      content:
        "Global stock markets reached record highs today, driven by positive economic forecasts and strong corporate earnings reports.",
      category: "Finance",
      url: "https://example.com/global-markets-gains",
      created_at: "2025-01-02T09:30:00Z",
      summary:
        "Stock markets hit record highs amidst strong economic outlooks.",
    },
    {
      id: 3,
      title: "Wildlife Conservation Efforts Expand",
      content:
        "A new international agreement aims to protect endangered species and their habitats, with increased funding and stricter regulations.",
      category: "Environment",
      url: "https://example.com/wildlife-conservation",
      created_at: "2025-01-01T15:45:00Z",
      summary:
        "New international pact strengthens efforts to conserve wildlife and habitats.",
    },
  ];

  const router = useRouter();

  const handleViewDetails = (n: NewsItem) => {
    try {
      router.push(`/dashboard/news/${n.id}`);
    } catch (error) {
      console.error("Error navigating:", error);
      // Handle the error appropriately (e.g., show a toast notification)
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://192.168.1.77:8000/news/news/");
  //       // console.log(response);
  //       // console.log(response.data);

  //       setNews(response.data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  //pagination page change
  const onPageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const currentItems = news.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <div className="wrapper my-4">
        <h5 className="title">Manage News</h5>
        <h6 className="sub-title">Manage and view mews list</h6>

        <div className="overflow-x-auto max-w-full custom-scrollbar">
          <table className="table-auto w-full p-4">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 text-dark-inactive-title">ID</th>
                <th className="p-2 text-dark-inactive-title">Title</th>
                <th className="p-2 text-dark-inactive-title">Content</th>
                <th className="p-2 text-dark-inactive-title">Category</th>
                <th className="p-2 text-dark-inactive-title">URl</th>
                <th className="p-2 text-dark-inactive-title">Date</th>
                <th className="p-2 text-dark-inactive-title">Summary</th>
                <th className="p-2 text-dark-inactive-title">Actions</th>
              </tr>
            </thead>
             

            {/* api  */}
            {/* <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((n)=>{
                    return(
                <tr key={n.id} className="border-b">
                  <td className="p-2 text-dark-inactive-title">{n.id}</td>
                  <td className="p-2 text-dark-inactive-title">{n.title}</td>
                  <td className="p-2 text-dark-inactive-title">{n.content}</td>
                  <td className="p-2 text-dark-inactive-title">{n.category}</td>
                  <td className="p-2 text-dark-inactive-title">{n.url}</td>
                  <td className="p-2 text-dark-inactive-title">{new Date(n.created_at).toLocaleDateString()}</td>
                  <td className="p-2 text-dark-inactive-title">{n.summary}</td>
                  <td className="p-2 text-dark-inactive-title view-detail">
                      <button
                        onClick={() => {
                          handleViewDetails(n);
                        }}
                        className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                        title="Detail"
                      >
                        <span className="group-hover:text-gray-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                          <Eye />
                        </span>
                        <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out ">
                          View Details
                        </span>
                      </button>
                    </td>
                </tr>
                    )
                })
                
              ) : (
                <tr>
                  <td className="p-2 text-center">No News found.</td>
                </tr>
                // news_2.map((n) => (
                //   <tr key={n.id} className="border-b">
                //     <td className="p-2 text-dark-inactive-title">{n.id}</td>
                //     <td className="p-2 text-dark-inactive-title">{n.title}</td>
                //     <td className="p-2 text-dark-inactive-title">{n.content}</td>
                //     <td className="p-2 text-dark-inactive-title">{n.category}</td>
                //     <td className="p-2 text-dark-inactive-title">{n.url}</td>
                //     <td className="p-2 text-dark-inactive-title">{new Date(n.created_at).toLocaleDateString()}</td>
                //     <td className="p-2 text-dark-inactive-title">{n.summary}</td>
                //     <td className="p-2 text-dark-inactive-title view-detail">
                //       <button
                //         onClick={() => handleViewDetails(n)}
                //         className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                //         title="Detail"
                //       >
                //         <span className="group-hover:text-gray-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                //           <Eye />
                //         </span>
                //         <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out ">
                //           View Details
                //         </span>
                //       </button>
                //     </td>
                //   </tr>
                // ))
              )}
            </tbody> */}
             
             {/* test */}
            <tbody>
              {news_2.map((n) => (
                <tr key={n.id} className="border-b">
                  <td className="p-2 text-dark-inactive-title">{n.id}</td>
                  <td className="p-2 text-dark-inactive-title">{n.title}</td>
                  <td className="p-2 text-dark-inactive-title">{n.content}</td>
                  <td className="p-2 text-dark-inactive-title">{n.category}</td>
                  <td className="p-2 text-dark-inactive-title">{n.url}</td>
                  <td className="p-2 text-dark-inactive-title">
                    {new Date(n.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-2 text-dark-inactive-title">{n.summary}</td>
                  <td className="p-2 text-dark-inactive-title view-detail">
                    <button
                      onClick={() => handleViewDetails(n)}
                      className="hover:cursor-pointer text-gray-500 group flex items-center space-x-1"
                      title="Detail"
                    >
                      <span className="group-hover:text-gray-600 group-hover:scale-100 transition-transform duration-200 ease-in-out">
                        <Eye />
                      </span>
                      <span className="hidden lg:block group-hover:text-gray-700 transition-colors duration-200 ease-in-out ">
                        View Details
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full">
            <Pagination
              items={news.length}
              currentPage={currentPage} // 1
              pageSize={pageSize} // 10
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsGet;
