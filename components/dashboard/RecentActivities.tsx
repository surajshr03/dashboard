import React from 'react'
import "@/components/dashboard/CSS/dashboard.css";
import { Activities } from '@/data/data';
const RecentActivities = () => {
    return (
        <div className="wrapper">
            <p className='title'>Recent Activities</p>
            <p className='sub-title'>You have {Activities.length} new Activities</p>
            <div className="overflow-x-auto max-w-full custom-scrollbar">
                <table className="table-auto w-full border-collapse p-4 ">
                    <thead className="bg-gray-100 text-left border-b-2">
                        <tr>
                            <th className=" p-2 text-dark-inactive-title">Type</th>
                            <th className=" p-2 text-dark-inactive-title">Details</th>
                            <th className=" p-2 text-dark-inactive-title">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Activities.map((activity) => (
                            <tr key={activity.id} className='border-b overflow-scroll'>
                                <td className="p-2 text-dark-inactive-title ">{activity.type.split(' - ')[0]}</td>
                                <td className="p-2 text-dark-inactive-title">{activity.description.split(' - ')[0]}</td>
                                <td className="p-2 text-dark-inactive-title">{activity.date.split(' - ')[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>)
}

export default RecentActivities