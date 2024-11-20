import { Bell, Moon, User } from 'lucide-react'

const NavBar = () => {
    return (
        <header className="flex  items-center justify-between px-6 py-4 bg-white border-b">
            <div className="flex w-full gap-7 items-center justify-center">
                {/* Hamburger */}
                <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm text-nav-icon rounded-lg hover:bg-gray-100 dark:text-nav-icon dark:hover:bg-gray-200 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                {/* Search */}

                <form className="max-w-md mx-auto">
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative hidden md:block ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full px-2 py-2 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />

                    </div>
                </form>
            </div>

            <div className="flex items-center space-x-2">
                <div className="cursor-pointer border-none hover:rounded-full hover:bg-active-gray p-2">
                    <Moon className='text-nav-icon ' size={20} />
                </div>
                <div className="cursor-pointer border-none hover:rounded-full hover:bg-active-gray p-2">
                    <Bell className='text-nav-icon ' size={20} />
                </div>
                <div className="flex px-2 space-x-2 border-none hover:rounded-full hover:bg-active-gray hover:py-2 focus:scale-50 cursor-pointer">
                    <User className='text-nav-icon ' size={20} />
                    <span className='text-nav-icon text-sm '>Username</span>
                </div>
            </div>
        </header>

    )
}

export default NavBar