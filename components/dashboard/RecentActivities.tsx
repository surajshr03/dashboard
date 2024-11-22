import React from 'react'

const activities = [
    {
        id: 1,
        description: 'New booking: John Doe - "The Great Gatsby"',
        time: "5 minutes ago",
    },
    {
        id: 2,
        description: 'Transaction completed: $24.99 - "To Kill a Mockingbird"',
        time: "1 hour ago",
    },
    {
        id: 3,
        description: "New user registered: Jane Smith",
        time: "2 hours ago",
    },
    {
        id: 4,
        description: 'Book stock update: "1984" - 50 copies added',
        time: "3 hours ago",
    },
];

const RecentActivities = () => {
    return (
        
        <div className="w-full bg-white py-6 px-6 mb-4 rounded-xl shadow-lg border-2 border-active-gray">
            <p className='text-2xl text-black font-semibold'>Recent Activities</p>
            <p className='my-2 text-sm text-inactive-title font-medium'>You have {activities.length} new activities</p>

            <div className="flex flex-col py-4 gap-4">
                {activities.map((activity) => {
                    return (<>
                        <div className="flex justify-between items-center ">
                            <p className='text-gray-700'>{activity.description}</p>
                            <p className="text-inactive-title text-sm">{activity.time}</p>
                        </div>
                    </>
                    )
                })

                }
            </div>
        </div>)
}

export default RecentActivities