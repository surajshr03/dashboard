import EBookTable from '@/components/dashboard/Books/EBooksTable'
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