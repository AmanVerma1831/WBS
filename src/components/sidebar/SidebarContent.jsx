import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { TbBrandOauth } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { LiaListAltSolid } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import { SiModal } from "react-icons/si";
import { SlMagicWand } from "react-icons/sl";
import { Link } from 'react-router-dom';

const SidebarContent = ({ isMinimized }) => {
    return (
        <div className='flex grow shrink-0 py-5 pe-2'>
            <div className='grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3'>
                <div className="flex flex-col grow gap-0.5">
                    <div className="flex pb-2">
                        <Link to="/" className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <RxDashboard className="text-xl" />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Dashboards
                                </div>
                            )}
                        </Link>
                    </div>
                    <div className="pt-2.25 pb-px">
                        <div className="uppercase text-sm font-medium text-gray-400 ps-[10px] pe-[10px]">
                            {isMinimized ? ('') : ('User')}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <CgProfile className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Your Accounts
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <IoSettingsOutline className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Offline Reply
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SlPeople className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    WA Chatbot
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <TbBrandOauth className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Bulk Messages
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="pt-2.25 pb-px">
                        <div className="uppercase text-sm font-medium text-gray-400 ps-[10px] pe-[10px]">
                            {isMinimized ? ('') : ('APPS')}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <MdManageAccounts className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    WA Rest api
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <LiaListAltSolid className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    WA Export participants
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <FiShoppingCart className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    WA List message template
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="pt-2.25 pb-px">
                        <div className="uppercase text-sm font-medium text-gray-400 ps-[10px] pe-[10px]">
                            {isMinimized ? ('') : ('MISC')}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SiModal className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    WA Button template
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SlMagicWand className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    WA Contact
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SiModal className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Account manager
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SiModal className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    File manager
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex  pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SiModal className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Tools
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarContent