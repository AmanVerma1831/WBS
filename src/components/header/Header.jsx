import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { RxPerson, RxGear } from "react-icons/rx";
import { TfiPlug } from "react-icons/tfi";

const Header = () => {
    const [logList, setLogList] = useState(false);
    const dropdownRef = useRef(null);
    const profileButtonRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        if (!logList) return;

        const handleClickOutside = (event) => {
            // Check if click is outside both dropdown and profile button
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                profileButtonRef.current &&
                !profileButtonRef.current.contains(event.target)
            ) {
                setLogList(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [logList]);

    return (
        <div className='w-full pr-10 pl-5 h-18 flex items-stretch shrink-0'>
            <div className='w-full flex justify-between items-center lg:gap-4'>
                <div className=''>
                    <ul className="mx-auto flex items-center">
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/" aria-current="page">Home</Link>
                        </li>
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/instamart">Instamart</Link>
                        </li>
                        <li className="px-5 font-semibold hover:bg-sky-500 rounded-full py-1 hover:text-white text-gray-700">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to='https://whatsappbulk.co.in/pricing' className='mx-2'>
                        <button className='font-semibold text-sm px-3 py-2 bg-sky-500 text-white hover:bg-sky-600 cursor-pointer rounded-full'>
                            Upgrade
                        </button>
                    </Link>
                    <div className="relative">
                        <button
                            ref={profileButtonRef}
                            className="flex items-center mx-3 cursor-pointer"
                            onClick={() => setLogList(!logList)}
                        >
                            <img
                                src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-1.png"
                                className="rounded-full h-8 w-8"
                                alt="user-img"
                            />
                        </button>
                        {logList && (
                            <div
                                ref={dropdownRef}
                                className="absolute right-0 z-50 m-2 text-base border border-gray-200 bg-white rounded-lg shadow-2xl"
                            >
                                <div className="px-4 py-3 border-b border-gray-400">
                                    <span className="block text-sm text-gray-900">Bonnie Green</span>
                                    <span className="block text-sm text-gray-500 truncate">name@flowbite.com</span>
                                </div>
                                <ul className="pb-2">
                                    <li>
                                        <Link
                                            to="/account"
                                            className="flex px-4 py-2 items-center text-gray-700 hover:bg-gray-200"
                                            onClick={() => setLogList(false)}
                                        >
                                            <RxPerson className='pr-2 w-10' />
                                            <p className='text-sm'> Account </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/account"
                                            className="flex px-4 py-2 items-center text-gray-700 hover:bg-gray-200"
                                            onClick={() => setLogList(false)}
                                        >
                                            <TfiPlug className='pr-2 w-10' />
                                            <p className='text-sm'> Plugins </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/account"
                                            className="flex px-4 py-2 items-center text-gray-700 hover:bg-gray-200"
                                            onClick={() => setLogList(false)}
                                        >
                                            <RxGear className='pr-2 w-10' />
                                            <p className='text-sm'> Settings </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://whatsappbulk.co.in/auth/logout"
                                            className="flex px-4 py-2 items-center text-gray-700 hover:bg-gray-200"
                                            onClick={() => setLogList(false)}
                                        >
                                            <CiLogout className='pr-2 w-10' />
                                            <p className='text-sm'>Logout</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;