import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const CPassword = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleNewPassword = () => setShowNewPassword(!showNewPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7">
                Change password
            </h3>
            <div className="space-y-6">
                {/* Existing profile section */}
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
                                        jenny@kteam.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Password change form */}
                <div className="p-5 border border-gray-200 rounded-2xl lg:p-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="Enter new password"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={toggleNewPassword}
                                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showNewPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm new password"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPassword}
                                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button className="flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-sky-600 transition-colors">
                                Change Password
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CPassword;