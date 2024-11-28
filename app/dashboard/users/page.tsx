import UserTable from '@/components/dashboard/User/UserTable'
import Link from 'next/link'
import React from 'react'
import Breadcrumbs from '../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>

     <Breadcrumbs/>

      <UserTable/>
    </div>
  )
}

export default page