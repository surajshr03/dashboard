import EBookTable from '@/components/dashboard/Books/EBookTable'
import React from 'react'
import Breadcrumbs from '../../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs/>
      <EBookTable/>
    </div>
  )
}

export default page