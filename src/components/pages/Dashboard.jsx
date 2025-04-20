import React from 'react'
import message from '../../assets/message.png'
import rmessage from '../../assets/rmessage.png'
import sent from '../../assets/sent.png'
import error from '../../assets/error.png'
import Dcards from '../cards/Dcards'
import DonutChart from '../charts/DonutChart'
import Dservice from '../cards/Dservice'
import DPcard from '../cards/DPcard'
import Card1 from '../cards/Card1'

const Dashboard = () => {

    return (
        <div>
            <div className='mb-10'>
                <p className='font-semibold text-gray-700 text-xl'>Dashboard</p>
                <p className='text-sm text-gray-500'>Central Hub for Personal Customization</p>
            </div>
            <div className={`mb-5`}>
                <DPcard />
            </div>
            <div className='flex justify-between bg-gray-100 p-6 rounded-lg'>
                <div className="relative grid grid-cols-2 gap-4 ">
                    <Dcards image={message} number={'10K'} text={'Total Message'} className='col-span-1' />
                    <Dcards image={sent} number={'5.6K'} text={'Message Sent'} className='col-span-1' />
                    <Dcards image={error} number={'1.4K'} text={'Message Failed'} className='col-span-1' />
                    <Dcards image={rmessage} number={'3K'} text={'Remaining Message'} className='col-span-1' />
                </div>
                <div className='w-1/2 flex flex-col justify-between'>
                    <div>
                        <DonutChart />
                    </div>
                    <Card1 />
                </div>
            </div>
            <div>
                <Dservice />
            </div>
        </div>
    )
}

export default Dashboard;