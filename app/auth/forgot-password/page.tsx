import ForgotPasswordForm from '@/components/forms/ForgotPassword'
import Logo from '@/public/favicon.ico'
import Image from 'next/image'
import Link from 'next/link'


const ForgotPassword = () => {
    return (
        <>
            <Link href='#' className="flex items-center font-bold text-xl gap-1 absolute top-6 left-8 bg-none">
                <Image loading='lazy' alt='' src={Logo} height={50} width={50} />
                <span>Kitab<span className="text-brand">Yatra</span></span>
            </Link>
            <ForgotPasswordForm />
        </>)
}

export default ForgotPassword