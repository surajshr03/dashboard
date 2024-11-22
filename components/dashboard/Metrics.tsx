import { AlertCircle, ArrowDown, ArrowUp, DollarSign, ShoppingCart } from "lucide-react";

const Metrics = () => {
    return (
       
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 my-8">
                {/* Metric Card 1 */}
                <div className="flex justify-between bg-white rounded-md p-5 sm:p-6 shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs sm:text-sm">Total Bookings</span>
                    <div className="flex flex-col lg:flex-row items-start gap-1 md:gap-3 mt-4">
                            <p className="text-black text-2xl sm:text-3xl font-semibold">$12,345</p>
                            <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                                <ArrowUp className="text-green-500" size={15} />
                                <span className="text-green-500 text-xs sm:text-sm font-medium ml-1">
                                    10.12%
                                </span>
                            </div>
                        </div> 
                   
                        <p className="text-green-500 text-xs sm:text-sm font-medium mt-2">
                            +$110.12 <span className="text-gray-500">than past week</span>
                        </p>
                    </div>
                    <ShoppingCart className="text-gray-600 self-start" size={28} />
                </div>

                {/* Metric Card 2 */}
                <div className="flex justify-between bg-white rounded-md p-5 sm:p-6 shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs sm:text-sm">Total Revenue</span>
                    <div className="flex flex-col lg:flex-row items-start gap-1 md:gap-3 mt-4">
                            <p className="text-black text-2xl sm:text-3xl font-semibold">$10,250</p>
                            <div className="flex items-center bg-red-100 px-3 py-1 rounded-full">
                                <ArrowDown className="text-red-500" size={15} />
                                <span className="text-red-500 text-xs sm:text-sm font-medium ml-1">
                                    5.85%
                                </span>
                            </div>
                        </div>
                        <p className="text-red-500 text-xs sm:text-sm font-medium mt-2">
                            -$80.75 <span className="text-gray-500">than past week</span>
                        </p>
                    </div>
                    <DollarSign className="text-gray-600 self-start" size={28} />
                </div>

                {/* Metric Card 3 */}
                <div className="flex justify-between bg-white rounded-md p-5 sm:p-6 shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs sm:text-sm">Pending</span>
                    <div className="flex flex-col lg:flex-row items-start gap-1 md:gap-3 mt-4">
                            <p className="text-black text-2xl sm:text-3xl font-semibold">45</p>
                            <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                                <ArrowUp className="text-green-500" size={15} />
                                <span className="text-green-500 text-xs sm:text-sm font-medium ml-1">
                                    2.45%
                                </span>
                            </div>
                        </div>
                        <p className="text-green-500 text-xs sm:text-sm font-medium mt-2">
                            +2 <span className="text-gray-500">than past week</span>
                        </p>
                    </div>
                    <AlertCircle className="text-gray-600 self-center md:self-start" size={28} />
                </div>
            </div>
    );
};

export default Metrics;
