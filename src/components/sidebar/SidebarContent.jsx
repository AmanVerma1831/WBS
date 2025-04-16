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

const SidebarContent = ({ isMinimized }) => {
    return (
        <div className='flex grow shrink-0 py-5 pe-2'>
            <div className='grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3'>
                <div className="flex flex-col grow gap-0.5">
                    <div className="flex pb-2">
                        <div className="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div className="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <RxDashboard className="text-xl" />
                            </div>
                            {!isMinimized && (
                                <div className="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Dashboards
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="pt-2.25 pb-px">
                        <div class="uppercase text-sm font-medium text-gray-400 ps-[10px] pe-[10px]">
                            {isMinimized ? ('') : ('User')}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <CgProfile className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Public Profile
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <IoSettingsOutline className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    My Account
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SlPeople className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Network
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <TbBrandOauth className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Authentication
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="pt-2.25 pb-px">
                        <div class="uppercase text-sm font-medium text-gray-400 ps-[10px] pe-[10px]">
                            {isMinimized ? ('') : ('APPS')}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <MdManageAccounts className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    User Management
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <LiaListAltSolid className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Projects
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <FiShoppingCart className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    eCommerce
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="pt-2.25 pb-px">
                        <div class="uppercase text-sm font-medium text-gray-400 ps-[10px] pe-[10px]">
                            {isMinimized ? ('') : ('MISC')}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SiModal className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Modals
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="flex  pb-2">
                        <div class="flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]">
                            <div class="items-start text-gray-500 dark:text-gray-400 w-[20px]">
                                <SlMagicWand className='text-xl' />
                            </div>
                            {!isMinimized && (
                                <div class="text-sm font-medium text-gray-700 active:text-sky-700 hover:text-sky-600">
                                    Wizards
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