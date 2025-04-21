import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { GoKey } from "react-icons/go";
import { FcPlanner } from "react-icons/fc";
import { CiCreditCard1 } from "react-icons/ci";

const AccountTab = ({ activeTab, setActiveTab }) => {

    const tabs = [
        { key: 'profile', label: 'Profile', icon: <FaRegUser /> },
        { key: 'password', label: 'Change password', icon: <GoKey /> },
        { key: 'plan', label: 'Plan', icon: <FcPlanner /> },
        { key: 'billing', label: 'Billing', icon: <CiCreditCard1 /> },
    ];

    return (
        <div className="border-b border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {tabs.map((tab) => (
                    <li key={tab.key} className="me-2">
                        <button
                            onClick={() => setActiveTab(tab.key)}
                            className={`cursor-pointer inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${activeTab === tab.key
                                ? 'bg-blue-600 border-transparent '
                                : 'border-transparent '
                                }`}
                        >
                            {React.cloneElement(tab.icon, {
                                className: `w-5 h-5 mr-2 ${activeTab === tab.key
                                    ? 'text-white'
                                    : 'text-gray-800'
                                    }`
                            })}
                            <p className={`${activeTab === tab.key
                                ? 'text-white'
                                : 'text-gray-800'
                                }`}>{tab.label}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountTab;