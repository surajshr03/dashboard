'use client'
import Breadcrumbs from '@/app/dashboard/Breadcrumbs/BreadCrumbs'
import { Notifications } from '@/data/data'
import { CircleAlertIcon, CircleCheckIcon } from 'lucide-react'
import "../dashboard/CSS/dashboard.css"
import { useState } from 'react'


const Notification = () => {
  const [notifications, setNotifications] = useState(Notifications)

  const handleDismiss = (id: number) => {
    setNotifications(notifications.filter(notifications => notifications.id !== id))
  }
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 mb-6">
        <div>
          <p className="text-3xl font-bold">
            Notifications
          </p>
        </div>
        <div>
          <Breadcrumbs />
        </div>
      </div>


      <div className="bg-white border border-active-gray rounded-md shadow-sm">
        <div className="flex-1 p-6">
          <p className="text-xl font-semibold mb-2">Recent Notifications</p>
          <p className="sub-title ">Stay updated with the latest alerts and messages</p>
          <div className="flex flex-col gap-2">
            {notifications.length === 0 ? (
              <p className="text-center text-gray-500">No new notifications</p>
            ) :
              notifications.slice(0, 7).map((data) => {
                return (
                  <div key={data.id} className='flex flex-col md:flex-row gap-3 justify-between items-center bg-gray-50 p-4 rounded-md'>
                    <div className="flex items-center gap-3">
                      {data.type === 'Confirmed' ?
                        <div className={` ${data.type.toLowerCase() === "confirmed"
                          ? "text-metricsRed"
                          : data.type.toLowerCase() === "pending"
                            ? "text-yellow-300"
                            : "text-metricsGreen"
                          }`}>
                          <CircleCheckIcon size={25} />
                        </div> :
                        data.type === 'Canceled' ?
                          <div className={` ${data.type.toLowerCase() === "confirmed"
                            ? "text-metricsRed"
                            : data.type.toLowerCase() === "pending"
                              ? "text-yellow-500"
                              : "text-metricsGreen"
                            }`}><CircleAlertIcon size={25} />
                          </div> :
                          <div className={` ${data.type.toLowerCase() === "confirmed"
                            ? "text-metricsRed"
                            : data.type.toLowerCase() === "pending"
                              ? "text-yellow-500"
                              : "text-metricsGreen"
                            }`}><CircleAlertIcon size={25} />
                          </div>
                      }
                      <div className="flex flex-col">
                        <p className="text-black text-base  ">{data.description}</p>
                        <div className="flex gap-4 text-left">
                          <p className="text-dark-inactive-title text-sm font-normal  ">{data.date}</p>
                          <p className="text-dark-inactive-title text-sm font-normal  ">{data.time}</p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleDismiss(data.id)} className='text-sm hover:bg-bg-gray font-medium p-2 rounded-sm'>Dismiss</button>
                  </div>)
              })}
          </div>
        </div>
      </div>
    </div>)
}

export default Notification