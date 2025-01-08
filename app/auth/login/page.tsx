import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/image'
import Logo from '@/public/favicon.ico'
import Link from 'next/link'
const page = () => {
    return (
        <>
            <Link href='#' className="flex items-center font-bold text-xl gap-1 absolute top-6 left-8 bg-none">
                <Image loading='lazy' alt='' src={Logo} height={50} width={50} />
                <span>&nbsp;Dash<span className="text-brand">&nbsp;Board</span></span>
            </Link>
            <LoginForm />
        </>
    )
}

export default page