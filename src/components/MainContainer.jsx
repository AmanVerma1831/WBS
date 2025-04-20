import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useSelector } from 'react-redux'
import AllRoutes from './routes/AllRoutes'

const MainContainer = () => {

    const isMinimized = useSelector(store => store.sidebar.isMinimized);

    return (
        <div className={`${isMinimized ? 'pl-20' : 'pl-70'} transition-all duration-500 flex grow flex-col`}>
            <Header />
            <AllRoutes />
            <Footer />
        </div>
    )
}

export default MainContainer