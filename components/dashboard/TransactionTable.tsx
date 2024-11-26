import React from 'react'
import "@/components/dashboard/CSS/dashboard.css";


const Transactions = [
  {
    id: 1,
    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
  },
  {
    id: 2,
    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  {
    id: 3,
    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
  },
  {
    id: 4,
    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  
  {
    id: 5,
    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
  },
  {
    id: 6,
    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  {
    id: 7,
    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
  },
  {
    id: 8,
    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  
  {
    id: 9,
    description: 'New booking: John Doe - "The Great Gatsby"',
    time: "5 minutes ago",
    date: "2001-12-24",
    type: "Booking",
  },
  {
    id: 10,
    description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
    time: "1 hour ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  {
    id: 11,
    description: "New user registered: Jane Smith",
    time: "2 hours ago",
    date: "2001-12-24",
    type: "Book",
  },
  {
    id: 12,
    description: 'Book stock update: "1984" - 50 copies added',
    time: "3 hours ago",
    date: "2001-12-24",
    type: "Transaction",
  },
  
];
const TransactionTable = () => {
  return (

    <div className="wrapper">
      <p className='title'>Transactions</p>
      <p className='sub-title'>You have {Transactions.length} new Transactions</p>
      <table className="table-auto w-full border-collapse p-4 ">
        <thead className="bg-gray-100 text-left border-b-2">
          <tr>
            <th className=" p-2 text-dark-inactive-title">Type</th>
            <th className=" p-2 text-dark-inactive-title">Details</th>
            <th className=" p-2 text-dark-inactive-title">Date</th>
            <th className=" p-2 text-dark-inactive-title">Time</th>
            <th className=" p-2 text-dark-inactive-title">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {Transactions.map((transaction) => (
            <>
              <tr key={transaction.id} className='border-b overflow-scroll'>
                <td className="p-2 text-dark-inactive-title">{transaction.id}</td>
                <td className="p-2 text-dark-inactive-title ">{transaction.type.split(' - ')[0]}</td>
                <td className="p-2 text-dark-inactive-title">{transaction.description.split(' - ')[0]}</td>
                <td className="p-2 text-dark-inactive-title">{transaction.date.split(' - ')[0]}</td>
                <td className="p-2 text-dark-inactive-title">{transaction.time.split(' - ')[0]}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

    </div>)
}

export default TransactionTable