'use client'
import { Bell, LogOutIcon, Moon, User } from 'lucide-react'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NavBar = () => {
    const [isUserToggled, setIsUserToggled] = useState(false);
    const [isNotificationsToggled, setIsNotificationsToggled] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const toggleUser = () => {
        setIsUserToggled(!isUserToggled);
    }
    const toggleNotifications = () => {
        setIsNotificationsToggled(!isNotificationsToggled);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userMenuRef.current &&
                event.target instanceof Node &&
                !userMenuRef.current.contains(event.target)
            ) {
                setIsUserToggled(false);
            }
        };

        // Type casting for addEventListener
        const handleClick = handleClickOutside as (event: MouseEvent) => void;

        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b">
            <div className="flex w-full gap-7 items-center justify-left">
                {/* Hamburger */}
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm text-nav-icon rounded-lg hover:bg-gray-100 dark:text-nav-icon dark:hover:bg-active-gray dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                {/* Search */}
                <form className="max-w-md ">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative hidden md:block ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full px-2 py-2 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-md bg-gray-50 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-white " placeholder="Search " required />
                    </div>
                </form>
            </div>
            {/* RHS of navbar */}
            <div className="flex items-center space-x-2">
                <div className="cursor-pointer border-none hover:rounded-full hover:bg-active-gray p-2">
                    <Moon className='text-nav-icon ' size={20} />
                </div>
                {/* MOBILE -Notifications*/}
                <div
                    ref={userMenuRef}
                    className="relative"
                >
                    <div
                        onClick={toggleNotifications}
                        className="flex relative items-center  space-x-2 border-none hover:rounded-full hover:bg-active-gray focus:scale-50 cursor-pointer">
                        <div className="cursor-pointer border-none hover:rounded-full hover:bg-active-gray focus:bg-active-gray p-2">
                            <Bell className='text-nav-icon ' size={20} />
                        </div>
                    </div>
                    {isNotificationsToggled &&
                        <div className="absolute right-0 top-full mt-2 z-10 bg-white border border-active-gray shadow-lg min-w-96 py-2 px-2 rounded-md  "
                            role="menu">
                            <div className="px-2">
                                <p className="px-2 py-2 text-lg font-medium text-gray-600"> Notifications</p></div>
                            <ul className=" text-xs text-gray-700 dark:text-gray-400" >
                                <li className='px-2  rounded-md border-b-2 border-active-gray  dark:hover:text-white'>
                                    <p className="block py-2 px-2  rounded-md text-inactive-title ">Hello World Hello World Hello World Hello World Hello World</p>
                                </li>
                                <li className='px-2  rounded-md border-b-2 border-active-gray  dark:hover:text-white'>
                                    <p className="block py-2 px-2  rounded-md text-inactive-title ">Hello World Hello World Hello World Hello World Hello World</p>
                                </li>
                                <li className='px-2 rounded-md dark:hover:text-white'>
                                    <p className="block py-2 px-2  rounded-md text-inactive-title ">Hello World Hello World Hello World Hello World </p>
                                </li>

                            </ul>
                        </div>
                    }
                </div>

                {/* MOBILE - USER */}
                <div
                    ref={userMenuRef}
                    className="relative"
                >
                    <div
                        onClick={toggleUser}
                        className="flex relative items-center px-2 space-x-2 border-none hover:rounded-full hover:bg-active-gray focus:scale-50 cursor-pointer">
                        <div className="flex px-1 py-2 gap-1">
                            <User className='text-nav-icon ' size={20} />
                            <span className='hidden md:block text-nav-icon text-base prevent-select'>Username</span>
                        </div>
                    </div>
                    {isUserToggled &&
                        <div className="absolute right-0 top-full mt-2 z-10 bg-white border border-active-gray shadow-lg min-w-56  px-2 rounded-md  "
                            role="menu">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" >
                                <li className='px-2 pb-3 rounded-md border-b-2 border-active-gray  dark:hover:text-white'>
                                    <Link href="#" className="block pt-2 text-black">Username</Link>
                                    <p className=' text-xs text-inactive-title'>username@gmail.com</p>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 px-2  rounded-md text-black hover:bg-active-gray">Profile</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block  py-2 px-2 text-black rounded-md  hover:bg-active-gray">Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        className="flex py-2 px-2  rounded-md text-black items-center border-t-2 border-active-gray gap-2 hover:bg-active-gray"
                                        role="menuitem" href={''}>
                                        <LogOutIcon size={18} />
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>

        </header >
    )
}

export default NavBar
