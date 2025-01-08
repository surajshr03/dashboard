"use client";
import { ChevronRight, LogOutIcon } from "lucide-react"

const Setting = () => {
  const handleLogout = () => {
    localStorage.removeItem('role');
    window.location.href = '/auth/login';
};
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 mb-6">
        
        
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="bg-white border border-active-gray rounded-md shadow-sm">
          <div className="flex-1 p-6">
            <p className="text-xl font-semibold mb-4">General Settings</p>
            <div className="flex flex-col  py-3 ">
              <div className="flex  text-sm p-3 rounded-md justify-between items-center cursor-pointer hover:bg-active-gray hover:text-black">
                <p className=''>Booking Policies</p>
                <ChevronRight size={20} />
              </div>
              <div className="flex  text-sm  p-3 rounded-md justify-between items-center cursor-pointer hover:bg-active-gray hover:text-black">
                <p className=''>Notification Preferences
                </p>
                <ChevronRight size={20} />
              </div>
              <div className="flex  text-sm  p-3 rounded-md justify-between items-center cursor-pointer hover:bg-active-gray hover:text-black">
                <p className=' '>Dark Mode</p>
                {
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white border border-active-gray rounded-md shadow-sm">
          <div className="flex-1 p-6">
            <p className="text-xl font-semibold mb-4">Security Settings</p>
            <div className="flex flex-col gap-4 py-3">
              <div className="flex  p-3 rounded-md justify-between items-center cursor-pointer hover:bg-active-gray hover:text-black">
                <p className=' text-sm '>Two factor authentication(2FA)</p>
                {<>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </>
                }
              </div>
              <button className="flex mt-2 justify-start items-center bg-black text-sm text-white px-4 py-3 shadow-md rounded-lg max-w-36">Forgot Password</button>
            </div>
          </div>
        </div>
        <div className="flex bg-white border border-active-gray rounded-md shadow-sm">
          <div className="flex-1 p-6">
            <p className="text-xl font-semibold mb-4">System Settings</p>
            <div className="flex flex-col py-3">
              <div className="flex  p-3 rounded-md justify-between items-center cursor-pointer hover:bg-active-gray hover:text-black">
                <p className=' text-sm '>Manage Passwords and Policies</p>
                <ChevronRight size={20} />
              </div>
              <div className="flex  p-3 rounded-md justify-between items-center cursor-pointer hover:bg-active-gray hover:text-black">
                <p className=' text-sm '>View login logs</p>
                <ChevronRight size={20} />
              </div>
            </div>
            <div className="flex gap-2 cursor-pointer items-center border-t-2 py-3 border-active-gray   p-3 rounded-md  hover:bg-active-gray hover:text-black"
            onClick={handleLogout}>
              <LogOutIcon size={20} />
              <p className=' text-sm '>Logout</p>
            </div>
          </div>
        </div>
        <button className="flex mt-2 justify-start items-center bg-black text-sm text-white px-4 py-3 shadow-md rounded-lg max-w-36">Save all changes</button>
      </div>
    </>
  )
}

export default Setting