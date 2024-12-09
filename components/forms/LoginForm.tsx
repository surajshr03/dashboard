import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="bg-white shadow-xl rounded-2xl">
                    <div className="p-6 sm:p-10">
                        <form action="#" method="POST" className="space-y-6">


                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2">
                                    <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="fullName" className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-2">
                                    <input type="password" name="fullName" id="fullName" placeholder="Enter your password" className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 justify-center items-center">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-brand border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                >
                                    Login
                                </button>
                                <div className="flex flex-col gap-3 text-center ">
                                    <Link href='/' className=''>Forgot Password?</Link>
                                    <p>Don&apos;t have an account?
                                        <Link href='/' className='text-brand'> Register Here</Link>
                                    </p>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default LoginForm