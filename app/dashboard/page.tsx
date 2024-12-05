import BookTable from '@/components/dashboard/BookTable'
import BookingTable from '@/components/dashboard/BookingTable'
import CustomChart from '@/components/dashboard/GraphData/CustomChart'
import Metrics from '@/components/dashboard/Metrics'
import RecentActivities from '@/components/dashboard/RecentActivities'
import Breadcrumbs from './Breadcrumbs/BreadCrumbs'

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <p className='text-3xl font-medium text-darkest-inactive-title'>Dashboard Overview</p >
        <Breadcrumbs />
      </div>
      <Metrics />
      <CustomChart />
      <RecentActivities />
      <BookTable />
      <BookingTable />
    </>
  )
}

export default Dashboard