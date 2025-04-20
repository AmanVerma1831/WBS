import React from 'react'

const Dcards = ({ image, number, text }) => {
    return (
        <div >
            <div
                className="group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                    <span className="grid border border-sky-500 h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">
                        <img alt='message' src={image} className="h-10 w-10 transition-all" />
                    </span>
                    <div
                        className="space-y-6 pt-5 text-2xl font-semibold leading-4 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>{number}</p>
                    </div>
                    <div className="pt-5 text-base font-semibold leading-7">
                        <p className="text-sky-500 transition-all duration-300 group-hover:text-white">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dcards