'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full space-y-8 bg-white shadow-xl rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                    <AlertTriangle
                        className="text-red-500"
                        size={64}
                        strokeWidth={1.5}
                    />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Oops! Something went wrong
                </h1>

                <p className="text-gray-600 mb-6">
                    We encountered an unexpected error. Don&apos;t worry, it&apos;s not your fault.
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => reset()}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="w-full inline-block bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                        Return to Home
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-6 bg-red-50 border border-red-200 rounded-md p-4 text-left">
                        <h2 className="font-semibold text-red-800 mb-2">
                            Error Details:
                        </h2>
                        <pre className="text-xs text-red-600 overflow-x-auto">
                            {error.message}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
}