import { Loader2 } from 'lucide-react';
import React from 'react'

type ILoadingProps = {
    isLoading: boolean;
    isSidebarVisible: boolean;
}

const Loading = ({ isLoading, isSidebarVisible }: ILoadingProps) => {
    if (!isLoading) return null;
    return (

        <div className={`fixed inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm ${isSidebarVisible ? " ml-64" : "ml - 0"} transition-all duration - 300`}>
            <div className="flex flex-col items-center justify-center" >
                <Loader2
                    className="animate-spin text-[#00BBD4]"
                    size={64}
                    strokeWidth={2}
                />
                <p className="mt-4 text-lg text-gray-700">Loading...</p>
            </div >
        </div >
    );
}
export default Loading