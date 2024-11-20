import { AlertCircle, ArrowDown, ArrowUp, DollarSign, ShoppingCart } from 'lucide-react'

const Metrics = () => {
    return (
    <div className='flex gap-12 my-8'>
        <div className="flex justify-between bg-white rounded-sm min-w-96 p-6 shadow-md ">
            <div className="flex flex-col text-left ">
                <span className='text-inactive-title text-sm'> Total Bookings</span>
                <div className="flex gap-3 mt-4">
                    <p className='text-black text-3xl font-semibold'>$12345</p>
                    <div className="flex bg-bg-green justify-center items-center p-2 rounded-full">
                        <ArrowUp className=' text-metricsGreen' size={15} />
                        <span className=' text-metricsGreen text-sm font-medium '>10.12%</span>
                    </div>
                </div>
                <div className="mt-2">
                    <p className=' text-metricsGreen text-sm font-medium '>+$110.12
                        <span className='text-inactive-title text-sm'> than past week</span>
                    </p>
                </div>
            </div>
            <div className=''>
                <ShoppingCart className=" text-gray-600" size={25} />
            </div>
        </div>
        {/* /////////////////////////////////////////////////////// */}
        <div className="flex justify-between bg-white rounded-sm min-w-96 p-6 shadow-md ">
            <div className="flex flex-col text-left ">
                <span className='text-inactive-title text-sm'> Total Revenue</span>
                <div className="flex gap-3 mt-4">
                    <p className='text-black text-3xl font-semibold'>$12345</p>
                    <div className="flex bg-bg-red justify-center items-center p-2 rounded-full">
                        <ArrowDown className=' text-metricsRed' size={15} />
                        <span className=' text-metricsRed text-sm font-medium '>10.12%</span>
                    </div>
                </div>
                <div className="mt-2">
                    <p className=' text-metricsRed text-sm font-medium '>-$110.12
                        <span className='text-inactive-title text-sm'> than past week</span>
                    </p>
                </div>
            </div>
            <div className=''>
                <DollarSign className=" text-gray-600" size={25} />
            </div>
        </div>
        {/* /////////////////////////////////////////////////////// */}

        <div className="flex justify-between bg-white rounded-sm min-w-96 p-6 shadow-md ">
            <div className="flex flex-col text-left ">
                <span className='text-inactive-title text-sm'> Pending</span>
                <div className="flex gap-3 mt-4">
                    <p className='text-black text-3xl font-semibold'>$12345</p>
                    <div className="flex bg-bg-green justify-center items-center p-2 rounded-full">
                        <ArrowUp className=' text-metricsGreen' size={15} />
                        <span className=' text-metricsGreen text-sm font-medium '>10.12%</span>
                    </div>
                </div>
                <div className="mt-2">
                    <p className=' text-metricsGreen text-sm font-medium '>+$110.12
                        <span className='text-inactive-title text-sm'> than past week</span>
                    </p>
                </div>
            </div>
            <div className=''>
                <AlertCircle className=" text-gray-600" size={25} />
            </div>
        </div>
    </div>
    )
}

export default Metrics