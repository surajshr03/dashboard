import Metrics from '@/components/dashboard/Metrics'
import RecentActivities from '@/components/dashboard/RecentActivities'

const Dashboard = () => {
  return (
    <div className='py-2 space-y-6'>
      <p className='text-3xl font-semibold text-black'>Dashboard Overview</p>
      <Metrics />
      <RecentActivities />
    </div>
  )
}

export default Dashboard