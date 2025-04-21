import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
    RxDashboard,
    RxPerson,
    RxGear,
    RxGroup,
    RxEnvelopeClosed,
    RxRocket,
    RxListBullet,
    RxComponent2,
    RxMagicWand,
    RxFileText,
    RxImage,
    RxQuestionMarkCircled,
    RxCardStack
} from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { TfiPlug } from "react-icons/tfi";
import { FaBlog, FaToolbox, FaUsers } from "react-icons/fa";

const SidebarContent = ({ isMinimized }) => {
    const { pathname } = useLocation()

    const menuItems = [
        { path: "/dashboard", icon: <RxDashboard />, label: "Dashboards" },
        { path: "/account", icon: <RxPerson />, label: "Your Accounts" },
        { path: "/offline-reply", icon: <RxEnvelopeClosed />, label: "Offline Reply" },
        { path: "/chatbot", icon: <RxGroup />, label: "WA Chatbot" },
        { path: "/bulk-messages", icon: <RxRocket />, label: "Bulk Messages" },
        { path: "/rest-api", icon: <RxComponent2 />, label: "WA Rest API" },
        { path: "/export", icon: <RxListBullet />, label: "WA Export Participants" },
        { path: "/templates", icon: <FiShoppingCart />, label: "WA List Message Template" },
        { path: "/button-templates", icon: <RxFileText />, label: "WA Button Template" },
        { path: "/contacts", icon: <RxMagicWand />, label: "WA Contact" },
        { path: "/account-manager", icon: <RxPerson />, label: "Account Manager" },
        { path: "/file-manager", icon: <RxImage />, label: "File Manager" },
        { path: "/tools", icon: <FaToolbox />, label: "Tools" },
        { path: "/prompts", icon: <RxMagicWand />, label: "AI Prompt Templates" },
        { path: "/blog", icon: <FaBlog />, label: "Blog" },
        { path: "/faqs", icon: <RxQuestionMarkCircled />, label: "FAQs" },
        { path: "/memberships", icon: <RxCardStack />, label: "Memberships" },
        { path: "/users", icon: <FaUsers />, label: "Users" },
        { path: "/plugins", icon: <TfiPlug />, label: "Plugins" },
        { path: "/settings", icon: <RxGear />, label: "Settings" }
    ]

    return (
        <div className='flex grow shrink-0 py-5 pe-2'>
            <div className='grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3'>
                <div className="flex flex-col grow gap-0.5 
                overflow-y-hidden hover:overflow-y-scroll scroll-smooth 
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-100
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-300
                 h-[calc(100vh-120px)]">
                    {menuItems.map((item) => (
                        <div key={item.path} className="flex pb-2">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center grow cursor-pointer rounded-lg gap-3 px-3 py-2 transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 border border-blue-100'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent'
                                    }`
                                }
                            >
                                <span className={`text-xl ${pathname === item.path ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {item.icon}
                                </span>
                                {!isMinimized && (
                                    <span className="text-sm font-medium">{item.label}</span>
                                )}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SidebarContent;