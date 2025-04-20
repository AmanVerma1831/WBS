import React from 'react'
import account from '../../assets/account.png'
import auto from '../../assets/auto.png'
import availability from '../../assets/availability.png'
import bulk from '../../assets/bulk.png'
import chatbot from '../../assets/chatbot.png'
import file from '../../assets/file.png'

const Dservice = () => {
    return (
        <section className="py-40 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="mt-2 text-3xl font-bold text-blue-600 sm:text-4xl">Our Key Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Discover what makes our product stand out from the competition.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg group hover:bg-sky-400 cursor-pointer transition-shadow duration-300">
                        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <img alt='icon' src={account} className="h-auto w-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">Account Manager</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            Optimized for performance with load times under 2 seconds, ensuring your users never wait.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg group hover:bg-sky-400 cursor-pointer transition-shadow duration-300">
                        <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                            <img alt='icon' src={file} className="h-auto w-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">File Manager</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            Enterprise-grade security with end-to-end encryption and regular penetration testing.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg group hover:bg-sky-400 cursor-pointer transition-shadow duration-300">
                        <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <img alt='icon' src={auto} className="h-auto w-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">Autoresponder</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            Designed for humans with thoughtful UX patterns that reduce learning curves.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg group hover:bg-sky-400 cursor-pointer transition-shadow duration-300">
                        <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                            <img alt='icon' src={bulk} className="h-auto w-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">Bulk Messaging</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            Continuous improvements with new features released every two weeks.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg group hover:bg-sky-400 cursor-pointer transition-shadow duration-300">
                        <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                            <img alt='icon' src={chatbot} className="h-auto w-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">Chatbot</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            Guaranteed reliability with our distributed cloud infrastructure.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg group hover:bg-sky-400 cursor-pointer transition-shadow duration-300">
                        <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                            <img alt='icon' src={availability} className="h-auto w-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-3">24/7 Support</h3>
                        <p className="text-gray-600 group-hover:text-white">
                            Our award-winning support team is available around the clock to assist you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dservice