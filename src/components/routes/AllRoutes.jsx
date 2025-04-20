import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AllRoutes = () => {
    return (
        <div className='px-10 py-5'>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;