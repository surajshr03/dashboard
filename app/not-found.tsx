import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center ">
            <div className="max-w-md w-full space-y-8 rounded-xl gap-12 p-8 text-center">
                <div className="flex justify-center mb-4">
                    <AlertCircle
                        className="text-yellow-500"
                        size={64}
                        strokeWidth={1.5}
                    />
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    404 - Page Not Found
                </h1>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="w-full inline-block bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Return to Home
                    </Link>

                    <Link
                        href="/dashboard"
                        className="w-full inline-block bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}