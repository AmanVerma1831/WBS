import React from 'react'

const Billing = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 lg:mb-7">
                Billing Information
            </h3>
            <div className="space-y-6">
                <div class="flex flex-col shadow-lg border border-gray-200 rounded-xl">
                    <div class="flex items-center min-h-14 px-7 py-3">
                        <h3 class="text-xl font-semibold">
                            Billing Details
                        </h3>
                    </div>
                    <div class="px-7 pt-4 pb-2">
                        <div class="grid grid-cols-2">
                            <div className='col-span-1'>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> Company Name </p>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> Address </p>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> Contact </p>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> VAT ID </p>
                            </div>
                            <div className='col-span-1'>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> X Developers </p>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> Netherlands </p>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> Jason Tatum </p>
                                <p class="text-sm text-gray-600 min-w-36 pb-5 pe-6"> NL123456789B01 </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='mb-5 text-lg font-semibold text-gray-800 lg:mb-7'># Invoices</p>
                <div class="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 shadow-lg">
                    <div class="hidden sm:grid sm:grid-cols-5">
                        <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Item</div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase">Qty</div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase">Rate</div>
                        <div class="text-end text-xs font-medium text-gray-500 uppercase">Amount</div>
                    </div>

                    <div class="hidden sm:block border-b border-gray-200"></div>

                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div class="col-span-full sm:col-span-2">
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                            <p class="font-medium text-gray-800">Design UX and UI</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                            <p class="text-gray-800">1</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                            <p class="text-gray-800">5</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                            <p class="sm:text-end text-gray-800">$500</p>
                        </div>
                    </div>

                    <div class="sm:hidden border-b border-gray-200"></div>

                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div class="col-span-full sm:col-span-2">
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                            <p class="font-medium text-gray-800">Web project</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                            <p class="text-gray-800">1</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                            <p class="text-gray-800">24</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                            <p class="sm:text-end text-gray-800">$1250</p>
                        </div>
                    </div>

                    <div class="sm:hidden border-b border-gray-200"></div>

                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div class="col-span-full sm:col-span-2">
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                            <p class="font-medium text-gray-800">SEO</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                            <p class="text-gray-800">1</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                            <p class="text-gray-800">6</p>
                        </div>
                        <div>
                            <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                            <p class="sm:text-end text-gray-800">$2000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing;