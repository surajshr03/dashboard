import { ChevronRight, CircleAlertIcon, CircleCheckIcon } from 'lucide-react'
import React from 'react'
import "../dashboard/CSS/dashboard.css"
import { Notifications } from '@/data/data'


const Notification = () => {
  return (
    <div className="">
      <div className="mb-6">
        <p className="mb-6 text-3xl font-bold">
          Notifications
        </p>
      </div>
      <div className="bg-white border border-active-gray rounded-md shadow-sm">
        <div className="flex-1 p-6">
          <p className="text-xl font-semibold mb-2">Recent Notifications</p>
          <p className="sub-title ">Stay updated with the latest alerts and messages</p>
          <div className="flex flex-col gap-2">
            {Notifications.slice(0, 7).map((data) => {
              return (
                <div key={data.id} className='flex justify-between items-center bg-gray-50 p-4 rounded-md'>
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
                  <button className=''>Dismiss</button>
                </div>)
            })}
          </div>
        </div>
      </div>
    </div>)
}

export default Notification