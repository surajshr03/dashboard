import NormalBookTable from '@/components/dashboard/Books/NormalBookTable'
import React from 'react'
import Breadcrumbs from '../../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs/>
      <NormalBookTable/>
    </div>
  )
}

export default page