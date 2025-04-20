import React from 'react'
import sent from '../../assets/sent.png'

const Card1 = () => {
    return (
        <div className='flex justify-between rounded-lg bg-gray-700 p-4'>
            <div>
                <img alt='message' src={sent} className="h-auto w-10 mb-3 text-white transition-all" />
                <div>
                    <p className='font-semibold text-lg text-white'>Message by month</p>
                    <p className='text-sm text-gray-400 mb-3'>Limit messages by month</p>
                    <p className='font-semibold text-2xl text-green-600 mb-3'>0/1000000</p>
                </div>
                <div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 border border-white">
                        <div className="bg-blue-600 h-2 rounded-full w-[45%] "></div>
                    </div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">Progress</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://whatsappbulk.co.in/inc/core/Whatsapp/Assets/img/bg-send.png"
                    class="h-full max-h-50" />
            </div>
        </div>
    )
}

export default Card1