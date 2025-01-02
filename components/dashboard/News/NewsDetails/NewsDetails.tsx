"use client";
import "@/components/dashboard/CSS/dashboard.css";

import { NewsProps } from "@/data/type";
import { useParams } from "next/navigation";
import NewsInfo from "./NewsInfo";


const NewsDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log(`Device Id : ${id}`);

  // const [selectedTab, setSelectedTab] = useState("personalInfo");

  const newsProps: NewsProps = {
    // Ensure it's a number// Add other user information if available//get data via api in futute and replace below data with actaul data
    id: Number(id), 
    title: "John Doe", 
    content: "john.doe@example.com", 
    category: "2024-01-01", 
    url: "true", 
    created_at: "2024-01-01", 
    summary: "2024-01-01", 
  };

  // const renderContent = () => {
  //   switch (selectedTab) {
  //     case "personalInfo":
  //       return <PersonalInfo  {...newsProps} />;
  //     case "transactions":
  //       return <Transactions {...newsProps}  />;
  //     case "transactionsRequest":
  //       return <TransactionsRequest {...newsProps} />;
  //     case "loadRequests":
  //       return <LoadRequests {...newsProps}  />;
  //     default:
  //       return <PersonalInfo {...newsProps}  />;
  //   }
  // };

  // const capitalizeWords = (str: string) => {
  //   return str
  //     .split(/(?=[A-Z])/)
  //     .join(" ")
  //     .replace(/\b\w/g, (char) => char.toUpperCase());
  // };

  return (
    <>
      <div className="wrapper my-4">
        <h5 className="title">News Details : {id} </h5>
        <h6 className="sub-title">View News Details</h6>

        <div className="overflow-x-auto max-w-full custom-scrollbar my-6">
          {/* <table className="table-auto w-full p-4 border border-gray-300">
            <thead className="bg-gray-100 text-left">
              <tr className="">
                {[
                  "personalInfo",
                  "transactions",
                  "transactionsRequest",
                  "loadRequests",
                ].map((tab, index, arr) => (
                  <th
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`tab-button tracking-wide ${
                      selectedTab === tab ? "active" : ""
                    } p-2 text-dark-inactive-title ${
                      index !== 0 && index !== arr.length - 1
                        ? "border-x-4"
                        : ""
                    } cursor-default `}
                  >
                    {capitalizeWords(tab)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="text-center" colSpan={4}>
                  {renderContent()}
                </td>
              </tr>
            </tbody>
          </table> */}
          <NewsInfo {...newsProps}/>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
