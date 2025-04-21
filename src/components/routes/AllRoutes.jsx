import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Account from '../pages/account/Account';

const AllRoutes = () => {
    return (
        <div className='px-10 py-5'>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/account' element={<Account />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;