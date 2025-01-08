'use client'
import { Notifications } from '@/data/data';
import { Bell, BookmarkPlus, Clipboard, FilePlus, LogOutIcon, Moon, Settings, Sun, User, UserRoundPlus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type NavBarProps = {
    onHamburgerClick: () => void;
    isSidebarVisible: boolean;
    isSearchOpen: boolean;
    onSearchClick: () => void;
    user_role : string;
};

const NavBar = ({ onSearchClick, onHamburgerClick, isSearchOpen, isSidebarVisible,user_role }: NavBarProps) => {
    const [isThemeToggled, setIsThemeToggled] = useState(false);
    const [isUserToggled, setIsUserToggled] = useState(false);
    const [isNotificationsToggled, setIsNotificationsToggled] = useState(false);

    const userMenuRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);

    const toggleTheme = () => {
        setTimeout(() => {
            setIsThemeToggled((prev) => !prev);
        }, 150);
    }
    const toggleNotifications = () => {
        setIsNotificationsToggled((prev) => !prev);
        setIsUserToggled(false);
    }
    const toggleUser = () => {
        setIsUserToggled((prev) => !prev);
        setIsNotificationsToggled(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userMenuRef.current &&
                notificationRef.current
            ) {
                const isClickInsideUserMenu = userMenuRef.current.contains(event.target as Node);
                const isClickInsideNotificationMenu = notificationRef.current.contains(event.target as Node);

                // Close menus if click is outside
                if (
                    !isClickInsideUserMenu &&
                    !isClickInsideNotificationMenu
                ) {
                    setIsUserToggled(false);
                    setIsNotificationsToggled(false);
                }
            }
        };



        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleLogout = () => {
        localStorage.removeItem('role');
        window.location.href = '/auth/login';
    };

    return (
        <header className={`sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b ${isSidebarVisible ? "ml-0" : "ml-0"
            } transition-all duration-300`}>
            <div className="flex w-full gap-2 items-center justify-left">
                {/* Hamburger */}

                <button onClick={onHamburgerClick} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm text-nav-icon rounded-lg hover:bg-gray-100 dark:text-nav-icon dark:hover:bg-active-gray dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Search */}
                <form className="max-w-md ">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                            <svg
                                className="md:hidden w-4 h-4 text-active-gray dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <svg
                                className="hidden md:block w-4 h-4 text-active-gray dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            onClick={onSearchClick}
                            type="search"
                            id="default-search"
                            className="block w-full md:w-96  px-2 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search "
                            required />

                        {/* POPUP for mobile screen when search clicked */}
                        {isSearchOpen && (
                            <div className=" md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white rounded-lg shadow-lg p-4 w-4/5 sm:w-3/4">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className=""></div>
                                        <button
                                            onClick={onSearchClick}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            ✖
                                        </button>
                                    </div>
                                    <div className="border-b-2 pb-2">
                                        <div className="flex items-center w-full border-2 px-4 py-2 rounded-lg gap-2 ">
                                            <div className="">
                                                <svg
                                                    className="md:hidden w-4 h-4 text-active-gray dark:text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                                <svg
                                                    className="hidden md:block w-4 h-4 text-active-gray dark:text-gray-400" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            {/* INPUT SEARCH */}
                                            <input
                                                type="text"
                                                placeholder="Search along dashboard"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col  items-start border-b-2 pb-2">
                                        <p className='text-sm text-inactive-title text-left py-2'>Actions</p>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <UserRoundPlus size={18} />
                                            <Link href='/'>
                                                <p>Register a new user</p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <FilePlus size={18} />
                                            <Link href='/'>
                                                <p>Make a booking</p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <BookmarkPlus size={18} />
                                            <Link href='/'>
                                                <p>Add a new book</p>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="flex flex-col  items-start border-b-2 pb-2">
                                        <p className='text-sm text-inactive-title text-left py-2'>Quick Links</p>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <BookmarkPlus size={18} />
                                            <Link href='/'>
                                                <p>User Management</p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <UserRoundPlus size={18} />
                                            <Link href='/'>
                                                <p>Manage Books</p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <FilePlus size={18} />
                                            <Link href='/'>
                                                <p>Manage Transactions</p>
                                            </Link>
                                        </div>

                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <Clipboard size={18} />
                                            <Link href='/'>
                                                <p>Reports</p>
                                            </Link>
                                        </div>
                                        <div className="flex gap-2 text-darkest-inactive-title  items-center text-sm hover:bg-active-gray w-full p-2">
                                            <Settings size={18} />
                                            <Link href='/'>
                                                <p>Settings</p>
                                            </Link>
                                        </div>

                                    </div>
                                    {/* Search BUtton in OverLay */}
                                    <button
                                        onClick={onSearchClick}
                                        className="mt-4 w-full bg-brand text-white py-2 rounded-lg hover:bg-blue-600"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </form>


            </div>
            {/* RHS of navbar */}
            <div className="flex items-center md:space-x-2">
                <div onClick={toggleTheme} className="cursor-pointer border-none hover:rounded-full hover:bg-active-gray p-2">
                    {isThemeToggled ? <Moon className='text-nav-icon ' size={20} /> : <Sun className='text-nav-icon ' size={20} />}
                </div>
                {/* MOBILE -Notifications*/}
                <div
                    ref={userMenuRef}
                    className="relative">
                    <div
                        onClick={toggleNotifications}
                        className="flex relative items-center  space-x-2 border-none hover:rounded-full hover:bg-active-gray focus:scale-50 cursor-pointer">
                        <div className="cursor-pointer border-none hover:rounded-full hover:bg-active-gray focus:bg-active-gray p-2">
                            <div className="absolute bg-red-600 rounded-full w-2 h-2 ml-3"></div>
                            <Bell className='text-nav-icon ' size={20} />
                        </div>
                    </div>
                    {isNotificationsToggled &&
                        <div
                            className="absolute right-0 top-full mt-2 z-10 bg-white border border-active-gray shadow-lg w-52 md:w-96 py-2 px-2 rounded-md  "
                            role="menu">
                            <div className="px-2">
                                <p className="px-2 py-2 text-lg font-semibold text-black">Latest Notifications</p></div>
                            <ul className=" text-sm text-gray-700 dark:text-gray-400" >
                                {Notifications.slice(0, 5).map((notifications) =>
                                (
                                    <li key={notifications.id} className='px-2  rounded-md border-b-2 border-active-gray  dark:hover:text-white'>
                                        <p className="block py-2 px-2  rounded-md text-inactive-title ">{notifications.description}</p>
                                    </li>
                                )
                                )

                                }
                            </ul>
                            <Link
                                href="/dashboard/notifications"
                                onClick={()=>setIsNotificationsToggled(false)}
                                className='font-semibold text-xs text-dark-inactive-title flex justify-center py-2 px-1 hover:text-darkest-inactive-title hover:bg-slate-300'>
                                <div className="">
                                    <p >See all notifications</p>
                                </div>
                            </Link>

                        </div>
                    }
                </div>

                {/* USER */}
                <div
                    ref={userMenuRef}
                    className="relative"
                >
                    <div
                        onClick={toggleUser}
                        className="flex relative items-center px-2 space-x-2 border-none hover:rounded-full hover:bg-active-gray focus:scale-50 cursor-pointer">
                        <div className="flex  py-2 gap-1">
                            <User className='text-nav-icon ' size={20} />
                            <span className='hidden md:block text-nav-icon text-base prevent-select'>{user_role}</span>
                        </div>
                    </div>
                    {isUserToggled &&
                        <div className="absolute right-0 top-full mt-2 z-10 bg-white border border-active-gray shadow-lg min-w-56  px-2 rounded-md  "
                            role="menu">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" >
                                <li className='px-2 pb-3 rounded-md border-b-2 border-active-gray  dark:hover:text-white'>
                                    <p className="block pt-2 text-black">Username</p>
                                    <p className=' text-xs text-inactive-title'>username@gmail.com</p>
                                </li>
                                <li>
                                    <Link href="/" className="block py-2 px-2  rounded-md text-black hover:bg-active-gray">Profile</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/settings" className="block  py-2 px-2 text-black rounded-md  hover:bg-active-gray">Settings</Link>
                                </li>
                                <li onClick={handleLogout}>
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
