import { AlertCircle, ArrowDown, ArrowUp, DollarSign, ShoppingCart } from 'lucide-react';

const Metrics = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 my-8">
            {/* Metric 1 */}
            <div className="flex justify-between bg-white rounded-sm p-4 sm:p-6 shadow-md">
                <div className="flex flex-col">
                    <span className="text-inactive-title text-xs sm:text-sm">Total Bookings</span>
                    <div className="flex flex-col xl:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <p className="text-black text-2xl sm:text-3xl font-semibold">$12345</p>
                        <div className="flex bg-bg-green items-center px-3 py-1 sm:p-2 rounded-full">
                            <ArrowUp className="text-metricsGreen" size={15} />
                            <span className="text-metricsGreen text-xs sm:text-sm font-medium ml-1">10.12%</span>
                        </div>
                    </div>
                    <p className="text-metricsGreen text-xs sm:text-sm font-medium mt-2">
                        +$110.12 <span className="text-inactive-title">than past week</span>
                    </p>
                </div>
                <ShoppingCart className="text-gray-600 self-start" size={25} />
            </div>

            {/* Metric 2 */}
            <div className="flex justify-between bg-white rounded-sm p-4 sm:p-6 shadow-md">
                <div className="flex flex-col">
                    <span className="text-inactive-title text-xs sm:text-sm">Total Revenue</span>
                    <div className="flex flex-col xl:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <p className="text-black text-2xl sm:text-3xl font-semibold">$12345</p>
                        <div className="flex bg-bg-red items-center px-3 py-1 sm:p-2 rounded-full">
                            <ArrowDown className="text-metricsRed" size={15} />
                            <span className="text-metricsRed text-xs sm:text-sm font-medium ml-1">10.12%</span>
                        </div>
                    </div>
                    <p className="text-metricsRed text-xs sm:text-sm font-medium mt-2">
                        -$110.12 <span className="text-inactive-title">than past week</span>
                    </p>
                </div>
                <DollarSign className="text-gray-600 self-start" size={25} />
            </div>

            {/* Metric 3 */}
            <div className="flex justify-between  bg-white rounded-sm p-4 sm:p-6 shadow-md">
                <div className="flex flex-col">
                    <span className="text-inactive-title text-xs sm:text-sm">Pending</span>
                    <div className="flex flex-col xl:flex-row gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <p className="text-black text-2xl sm:text-3xl font-semibold">$12345</p>
                        <div className="flex bg-bg-green items-center px-3 py-1 sm:p-2 rounded-full">
                            <ArrowUp className="text-metricsGreen" size={15} />
                            <span className="text-metricsGreen text-xs sm:text-sm font-medium ml-1">10.12%</span>
                        </div>
                    </div>
                    <p className="text-metricsGreen text-xs sm:text-sm font-medium mt-2">
                        +$110.12 <span className="text-inactive-title">than past week</span>
                    </p>
                </div>
                <AlertCircle className="text-gray-600 self-start" size={25} />
            </div>
        </div>
    );
};

export default Metrics;
