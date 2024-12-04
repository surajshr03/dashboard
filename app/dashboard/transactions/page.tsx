import TransactionTable from '@/components/dashboard/TransactionTable'
import React from 'react'
import Breadcrumbs from '../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs />
      <TransactionTable />
    </div>
  )
}

export default page