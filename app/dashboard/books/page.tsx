import BookTable from '@/components/dashboard/BookTable'
import Breadcrumbs from '../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs />
      <BookTable />
    </div>
  )
}

export default page