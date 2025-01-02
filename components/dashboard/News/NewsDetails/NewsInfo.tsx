import React from "react";
import { NewsProps } from "@/data/type"; // Ensure the type is correct

const NewsInfo: React.FC<NewsProps> = ({
  id,
  title,
  content,
  category,
  url,
  created_at,
  summary,
}) => {
  return (
    <div className="personalInfoBg">
      <div className="inner-wrapper m-4 w-full">
        <h2 className="md:text-2xl mb-2 cursor-default hover:underline ">
          News Info of  {title}
        </h2>
        <div className="text-left">
          {/* Displaying the relevant news data */}
          <p>Title: {title}</p>
          <p>Content: {content}</p>
          <p>Category: {category}</p>
          <p>
            URL:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </p>
          <p>Created At: {new Date(created_at).toLocaleDateString()}</p>
          <p>Summary: {summary}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsInfo;
