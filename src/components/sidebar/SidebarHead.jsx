import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const SidebarHead = ({ isMinimized, toggleSidebar }) => {
    return (
        <div className='h-18 hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0'>
            {isMinimized ?
                (<img alt='logo'
                    src="https://whatsappbulk.co.in/assets/img/logo.svg"
                    className="h-10 max-w-none" />)
                :
                (<img alt='logo'
                    src="https://whatsappbulk.co.in/assets/img/logo-color.svg"
                    className="h-9 max-w-none" />)
            }
            <button
                onClick={toggleSidebar}
                className="size-7 rounded-lg border bg-light text-gray-500 hover:text-gray-700 
            absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4 border-gray-200
            bg-white flex justify-center items-center cursor-pointer
            dark:border-gray-300" aria-label="Toggle sidebar">
                {isMinimized ?
                    <MdKeyboardDoubleArrowRight className="transition-all duration-300 rtl:rotate-180" /> :
                    <MdKeyboardDoubleArrowLeft className="transition-all duration-300 rtl:rotate-180" />
                }
            </button>
        </div>
    )
}

export default SidebarHead