import RegisterForm from '@/components/forms/RegisterForm'
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/favicon.ico'
import Link from 'next/link'


const page = () => {
    return (
        <>
            <Link href='#' className="flex items-center font-bold text-xl gap-1 absolute top-6 left-8 bg-none">
                <Image alt='' src={Logo} height={50} width={50} />
                <span>Kitab<span className="text-brand">Yatra</span></span>
            </Link>
            <RegisterForm />
        </>)
}

export default page