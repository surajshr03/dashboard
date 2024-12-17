import AudioBooksTable from '@/components/dashboard/Books/AudioBooksTable'
import React from 'react'
import Breadcrumbs from '../../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs/>
      <AudioBooksTable/>
    </div>
  )
}

export default page