import ManageBookings from '@/components/bookings/ManageBookings'
import React from 'react'

const page = () => {

  return (
     <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black">Manage Bookings</h1>
      <ManageBookings />
    </div>
  )
}

export default page