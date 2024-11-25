import CustomChart from '@/components/dashboard/GraphData/CustomChart'
import Metrics from '@/components/dashboard/Metrics'
import RecentActivities from '@/components/dashboard/RecentActivities'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <p className='text-3xl font-medium text-darkest-inactive-title'>Dashboard Overview</p >
        {/* BREADCRUMBS */}
        <div className="flex gap-2">
          <Link href="/">
            <span className="text-sm text-inactive-title font-medium ">Home &gt;</span>
          </Link>
          <Link href="/dashboard">
            <span className="text-sm text-darkest-inactive-title font-medium">Dashboard </span>
          </Link>
         
        </div>
      </div>
      <Metrics />
      <CustomChart/>
      <RecentActivities />
    </>
  )
}

export default Dashboard