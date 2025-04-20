import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FcExpired } from "react-icons/fc";

const DPcard = () => {
    return (
        <div className='mx-auto p-4 w-full'>
            <div className='flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:pt-5 lg:pb-10'>
                <img alt='profile-pic' src='https://keenthemes.com/static/metronic/tailwind/dist/assets/media/avatars/300-1.png'
                    className='rounded-full border-3 border-green-600 size-25 shrink-0' />
                <div className="flex items-center gap-1.5">
                    <div className="text-lg leading-5 font-semibold text-gray-900">
                        Jenny Klabber
                    </div>
                    <RiVerifiedBadgeFill className='text-blue-600' />
                </div>
                <div class="flex flex-wrap justify-center gap-1 lg:gap-6 text-sm">
                    <div class="flex gap-1.25 items-center">
                        <MdMailOutline className='text-gray-500 text-lg mt-0.5' />
                        <a class="text-gray-600 font-medium hover:text-primary" href="mailto: jenny@kteam.com">
                            jenny@kteam.com
                        </a>
                    </div>
                    <div class="flex gap-1.25 items-center">
                        <MdOutlineLocationOn className='text-gray-500 text-lg' />
                        <span class="text-gray-600 font-medium">
                            SF, Bay Area
                        </span>
                    </div>
                    <div class="flex gap-1.25 items-center">
                        <FcExpired className='text-xl' />
                        <span class="text-gray-600 font-medium">
                            Expire date: 17-04-2026
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DPcard