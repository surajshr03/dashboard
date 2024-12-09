import LoginForm from '@/components/forms/LoginForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <p className='text-3xl  text-center font-bold '>Login</p>
            <LoginForm />
            </>
    )
}

export default page