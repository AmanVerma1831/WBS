import React from 'react'
import { Link } from 'react-router-dom';
import { TbTableFilled } from 'react-icons/tb';
import { FiCheck } from 'react-icons/fi';

const Planner = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7">
                Plan Details
            </h3>
            <div className="space-y-6">
                {/* Existing profile section */}
                <div className="p-5 border border-gray-200 rounded-2xl lg:p-6">
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
                            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full">
                                <img alt="user" src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-1.png" />
                            </div>
                            <div className="grid grid-cols-2">
                                <div className='col-span-1 mr-1'>
                                    <div className="flex flex-col items-center gap-1 text-center xl:gap-3 xl:text-left">
                                        <p className="text-sm text-gray-500"> Current Plan </p>
                                        <p className="text-sm text-gray-500"> Expire date </p>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className="flex flex-col items-center gap-1 text-center xl:gap-3 xl:text-left">
                                        <p className="text-sm text-gray-500">: Free & Trial </p>
                                        <p className="text-sm text-gray-500">: 16-04-2026 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to='https://whatsappbulk.co.in/pricing' className='mx-2'>
                            <button className='font-semibold text-sm px-4 py-2 bg-sky-500 text-white hover:bg-sky-600 cursor-pointer rounded-full'>
                                Upgrade
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Password change form */}
                <div className="p-5 border border-gray-200 rounded-2xl lg:p-6 shadow-sm">
                    <div className="space-y-6">
                        <div className="mb-4">
                            {/* Header */}
                            <div className="flex justify-between items-center h-18 px-4 py-3 bg-gray-50 rounded-t-lg border-b border-t border-gray-200">
                                <div className="font-semibold text-lg text-gray-800 flex items-center">
                                    <TbTableFilled className="mr-3 w-5 h-5 text-sky-500" />
                                    Permissions
                                </div>
                            </div>

                            {/* List Items */}
                            <div className="p-0 overflow-auto">
                                <ul className="flex flex-col border-gray-200">
                                    {/* Category Header */}
                                    <li className="px-4 py-3.5 flex items-center text-gray-800 font-semibold bg-gray-50 border-y border-gray-200">
                                        Whatsapp tool
                                    </li>

                                    {/* List Items with borders */}
                                    {[
                                        'Bulk messaging',
                                        'Chatbot',
                                        'Autoresponder',
                                        'Send button message',
                                        'Send list messages',
                                        'REST API',
                                        'Profile',
                                        'Whatsapp'
                                    ].map((item) => (
                                        <li key={item} className="px-4 py-3 flex items-center text-gray-600 border-b border-gray-100 hover:bg-gray-50 group">
                                            <FiCheck className="mr-3 w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}

                                    {/* Category Header */}
                                    <li className="px-4 py-3.5 flex items-center text-gray-800 font-semibold bg-gray-50 border-y border-gray-200 mt-2">
                                        Advanced features
                                    </li>

                                    {[
                                        'URL Shortener',
                                        'OpenAI Generate Content',
                                        'OpenAI Generate Image',
                                        'Image editor'
                                    ].map((item) => (
                                        <li key={item} className="px-4 py-3 flex items-center text-gray-600 border-b border-gray-100 hover:bg-gray-50 group">
                                            <FiCheck className="mr-3 w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planner;