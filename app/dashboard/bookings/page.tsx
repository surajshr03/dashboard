import BookingTable from '@/components/dashboard/BookingTable'
import React from 'react'
import Breadcrumbs from '../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs/>
        <BookingTable/>
    </div>
  )
}

export default page