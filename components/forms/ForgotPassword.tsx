'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const validatePassword = (password: string) => {
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

        // Validate new passwords match
        if (newPassword !== confirmNewPassword) {
            setError('New passwords do not match');
            setIsLoading(false);
            return;
        }

        // Validate new password strength
        const passwordValidationErrors = validatePassword(newPassword);
        if (passwordValidationErrors.length > 0) {
            setError(passwordValidationErrors.join('. '));
            setIsLoading(false);
            return;
        }

        try {
            // API call to change password
            const response = await fetch('/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldPassword,
                    newPassword
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to change password');
            }

            // Redirect to dashboard or show success message
            router.push('/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to change password');
            setIsLoading(false);
        }
    };

    return (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl ">
            <div className="flex bg-white shadow-xl rounded-2xl">
                <div className="max-h-full p-6 sm:p-10">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <p className='text-3xl text-center font-bold'>
                            Change Password
                        </p>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="oldPassword" className="text-base font-medium text-gray-900">
                                Current Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="oldPassword"
                                    id="oldPassword"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    placeholder="Enter current password"
                                    required
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="text-base font-medium text-gray-900">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter new password"
                                    required
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmNewPassword" className="text-base font-medium text-gray-900">
                                Confirm New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="confirmNewPassword"
                                    id="confirmNewPassword"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    required
                                    className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 justify-center items-center">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkbg-darkBrand ${isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-brand hover:bg-darkBrand'
                                    }`}
                            >
                                {isLoading ? 'Changing...' : 'Change Password'}
                            </button>

                            <div className="flex flex-col gap-3 text-center">
                                <p>
                                    Remembered your password?
                                    <Link href='/auth/login' className='text-brand ml-1 hover:underline'>
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='max-w-xl'>
                    <Image className='object-cover w-full h-full' alt=''
                        src='/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg' height={500} width={500} />
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordForm;