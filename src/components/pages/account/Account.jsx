import React, { useState } from 'react'
import Profile from './Profile';
import AccountTab from '../../tab/AccountTab';
import CPassword from './CPassword';
import Planner from './Planner';
import Billing from './Billing';

const Account = () => {

    const [activeTab, setActiveTab] = useState('profile');

    const renderComponent = () => {
        switch (activeTab) {
            case 'profile':
                return <Profile />;
            case 'password':
                return <CPassword />;
            case 'plan':
                return <Planner />;
            case 'billing':
                return <Billing />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="p-4 mx-auto md:p-6 bg-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <AccountTab activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                {renderComponent()}
            </div>
        </div>
    )
}

export default Account;