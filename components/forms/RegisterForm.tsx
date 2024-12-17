'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { register } = useAuth();
    const router = useRouter();

    const validatePassword = (password: string) => {
        // Password validation rules
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const errors: string[] = [];

        if (password.length < minLength) {
            errors.push(`Password must be at least ${minLength} characters long`);
        }
        if (!hasUpperCase) {
            errors.push('Password must contain at least one uppercase letter');
        }
        if (!hasLowerCase) {
            errors.push('Password must contain at least one lowercase letter');
        }
        if (!hasNumbers) {
            errors.push('Password must contain at least one number');
        }
        if (!hasSpecialChar) {
            errors.push('Password must contain at least one special character');
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Validate email
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address');
            setIsLoading(false);
            return;
        }

        // Validate passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        // Validate password strength
        const passwordValidationErrors = validatePassword(password);
        if (passwordValidationErrors.length > 0) {
            setError(passwordValidationErrors.join('. '));
            setIsLoading(false);
            return;
        }

        try {
            await register(email, password);
            // Redirect to dashboard or login page after successful registration
            router.push('/dashboard');
        } catch (err) {
            // Type-safe error handling
            setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex bg-white shadow-xl rounded-2xl">
                <div className="p-6 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <p className='text-3xl text-center font-bold'>Register</p>

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
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkBrand"
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
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkBrand"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    required
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-darkBrand focus:ring-1 focus:ring-darkBrand"
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
                                {isLoading ? 'Registering...' : 'Register'}
                            </button>

                            <div className="flex flex-col gap-3 text-center">
                                <p>
                                    Already have an account?
                                    <Link href='/auth/login' className='text-brand ml-1 hover:underline'>
                                        Login Here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='max-w-xl'>
                    <Image className='object-cover w-full h-full' alt='' src='/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg' height={1000} width={1000} />
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;