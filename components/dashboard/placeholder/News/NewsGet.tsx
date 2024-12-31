"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "@/components/dashboard/CSS/dashboard.css";
import Pagination from "../../Pagination";



interface NewsItem{
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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.77:8000/news/news/");
        // console.log(response);
        // console.log(response.data);

        setNews(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

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
              </tr>
            </thead>

            <tbody>
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
                </tr>
                    )
                })
                
              ) : (
                <tr>
                  <td className="p-2 text-center">No News found.</td>
                </tr>
              )}
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
