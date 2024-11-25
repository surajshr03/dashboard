import React from 'react'

const activities = [
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
];

const RecentActivities = () => {
    return (

        <div className="w-full bg-white py-6 px-6 my-6 rounded-xl shadow-lg border-2 border-active-gray">
            <p className='text-2xl text-black font-semibold'>Recent Activities</p>
            <p className='my-2 text-sm text-inactive-title font-medium'>You have {activities.length} new activities</p>
            <table className="table-auto w-full border-collapse p-4 ">
                <thead className="bg-gray-100 text-left border-b-2">
                    <tr>
                        <th className=" p-2 text-dark-inactive-title">Type</th>
                        <th className=" p-2 text-dark-inactive-title">Details</th>
                        <th className=" p-2 text-dark-inactive-title">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity) => (
                        <>
                            <tr key={activity.id} className='border-b overflow-scroll'>
                                <td className="p-2 text-dark-inactive-title ">{activity.type.split(' - ')[0]}</td>
                                <td className="p-2 text-dark-inactive-title">{activity.description.split(' - ')[0]}</td>
                                <td className="p-2 text-dark-inactive-title">{activity.date.split(' - ')[0]}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
       
        </div>)
}

export default RecentActivities