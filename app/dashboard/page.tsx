import Metrics from '@/components/dashboard/Metrics'
import RecentActivities from '@/components/dashboard/RecentActivities'

const Dashboard = () => {
  return (
    <div className='py-2 space-y-6'>
      <p className='text-3xl font-semibold text-black'>Dashboard Overview</p>
      <div className="">
        <Metrics />      
        <RecentActivities/>  </div>
    </div>
  )
}

export default Dashboard