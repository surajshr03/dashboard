import UserTable from '@/components/dashboard/User/UserTable'
import Breadcrumbs from '../Breadcrumbs/BreadCrumbs'

const page = () => {
  return (
    <div>
      <Breadcrumbs />
      <UserTable />
    </div>
  )
}

export default page