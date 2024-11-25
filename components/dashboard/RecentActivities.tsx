import React from 'react'
import "@/components/dashboard/CSS/dashboard.css";

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

        <div className="wrapper">
            <p className='title'>Recent Activities</p>
            <p className='sub-title'>You have {activities.length} new activities</p>
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
            {/* <div className="flex flex-col py-4 gap-4">
                {activities.map((activity) => {
                    return (<>

                        <div className="flex-col justify-between items-center ">
                            <div className="">
                                <p className='text-darkest-inactive-title'>{activity.description}</p>
                            </div>
                            <div className="">
                                <p className="text-inactive-title text-sm">{activity.time}</p>
                            </div>
                        </div>
                    </>
                    )
                })

                }
            </div> */}
        </div>)
}

export default RecentActivities