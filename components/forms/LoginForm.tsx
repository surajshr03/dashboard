'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(email, password);
            // Redirect to dashboard on successful login
            router.push('/dashboard');
        } catch (err) {
            // Type-safe error handling
            setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 mt-16 md:my-8 max-w-7xl ">
            <div className="flex bg-white shadow-xl rounded-2xl">
                <div className="p-6 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <p className='text-4xl text-center font-bold'>Login</p>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="text-base font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkborder-darkBrand"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkborder-darkBrand"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 justify-center items-center">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkBrand ${isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-brand hover:bg-darkBrand'
                                    }`}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>

                            <div className="flex flex-col gap-3 text-center">
                                <Link href='/auth/forgot-password' className='text-gray-600 hover:text-brand'>
                                    Forgot Password?
                                </Link>
                                <p>
                                    Don&apos;t have an account?
                                    <Link href='/auth/register' className='text-brand ml-1 hover:underline'>
                                        Register Here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='max-w-lg hidden lg:block'>
                    <Image loading='lazy' className='object-cover w-full h-full' alt='' src='/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg' height={1000} width={1000} />
                </div>
            </div>
        </div>
    )
}

export default LoginForm;