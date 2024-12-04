import Setting from '@/components/dashboard/Setting'
import React from 'react'
import Breadcrumbs from '../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <div>
        <Breadcrumbs />
      </div>
      <Setting />
    </div>
  )
}

export default page