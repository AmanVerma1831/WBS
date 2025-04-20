import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [logList, setLogList] = useState(false);

    return (
        <div className='w-full pr-10 pl-5 h-18 flex items-stretch shrink-0'>
            <div className='w-full flex justify-between items-center lg:gap-4'>
                <div className=''>
                    <ul className="mx-auto flex items-center">
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/" className="" aria-current="page">Home</Link>
                        </li>
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/about" className="">About</Link>
                        </li>
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/instamart" className="">Instamart</Link>
                        </li>
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/contact" className="">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div>
                        <p className='text-gray-500 text-sm mx-2 font-semibold'>Expire date: 17-04-2026</p>
                    </div>
                    <Link to='https://whatsappbulk.co.in/pricing' className='mx-2'>
                        <button
                            className='font-semibold text-sm px-3 py-2 bg-sky-500 text-white hover:bg-sky-600 cursor-pointer rounded-full'>
                            Upgrade
                        </button>
                    </Link>
                    <div className="relative">
                        <button className="flex items-center mx-3 cursor-pointer" aria-expanded="false"
                            onClick={() => setLogList(!logList)}
                            onBlur={() => setLogList(false)}
                        >
                            <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" className="rounded-full h-8 w-8" alt="user-img" />
                        </button>
                        {logList &&
                            <div class="absolute right-0 z-50 m-2 text-base border border-gray-200 list-none bg-white rounded-lg shadow-2xl" id="user-dropdown">
                                <div class="px-4 py-3 border-b-1 border-gray-400 ">
                                    <span class="block text-sm text-gray-900">Bonnie Green</span>
                                    <span class="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
                                </div>
                                <ul class="pb-2">
                                    <li>
                                        <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Account</Link>
                                    </li>
                                    <li>
                                        <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Billing</Link>
                                    </li>
                                    <li>
                                        <Link to="https://whatsappbulk.co.in/auth/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header