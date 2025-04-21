import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

const Profile = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7">
                Profile
            </h3>
            <div className="space-y-6">
                <div className="p-5 border border-gray-200 rounded-2xl lg:p-6">
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
                            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full">
                                <img alt="user" src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-1.png" />
                            </div>
                            <div className="order-3 xl:order-2">
                                <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 xl:text-left">
                                    Musharof Chowdhury
                                </h4>
                                <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                                    <p className="text-sm text-gray-500">
                                        Team Manager
                                    </p>
                                    <div className="hidden h-3.5 w-px bg-gray-300 xl:block">
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Arizona, United States
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
                                <a href="https://www.facebook.com/PimjoHQ" target="_blank" rel="noopener" className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800">
                                    <LiaFacebookF className='w-5 h-auto' />
                                </a>
                                <a href="https://x.com/PimjoHQ" target="_blank" rel="noopener" className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800">
                                    <RiTwitterXLine className='w-5 h-auto' />
                                </a>
                                <a href="https://www.linkedin.com/company/pimjo" target="_blank" rel="noopener" className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800">
                                    <FaLinkedinIn className='w-5 h-auto' />
                                </a>
                                <a href="https://instagram.com/PimjoHQ" target="_blank" rel="noopener" className="flex h-11 w-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800">
                                    <IoLogoInstagram className='w-5 h-auto' />
                                </a>
                            </div>
                        </div>
                        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto">
                            <MdOutlineEdit className='w-5 h-auto' />
                            Edit
                        </button>
                    </div>
                </div>
                <div className="p-5 border border-gray-200 rounded-2xl lg:p-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 lg:mb-6">
                                Personal Information
                            </h4>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        First Name
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        Musharof
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        Last Name
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        Chowdhury
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        Email address
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        randomuser@pimjo.com
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        Phone
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        +09 363 398 46
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        Bio
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        Team Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto">
                            <MdOutlineEdit className='w-5 h-auto' />
                            Edit
                        </button>
                    </div>
                </div>
                <div className="p-5 border border-gray-200 rounded-2xl lg:p-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 lg:mb-6">
                                Address
                            </h4>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        Country
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        United States.
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        City/State
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        hoenix, Arizona, United States.
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        Postal Code
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        ERT 2489
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-2 text-xs leading-normal text-gray-500">
                                        TAX ID
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        AS4568384
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto">
                            <MdOutlineEdit className='w-5 h-auto' />
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile