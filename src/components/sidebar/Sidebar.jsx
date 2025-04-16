import React from 'react'
import SidebarHead from './SidebarHead'
import SidebarContent from './SidebarContent'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../redux/sidebarSlice'

const Sidebar = () => {

    const isMinimized = useSelector(store => store.sidebar.isMinimized);
    const dispatch = useDispatch();

    return (
        <div className={`${isMinimized ? 'w-20' : 'w-70'} transition-all duration-500 lg:border-e lg:border-e-gray-200 lg:fixed lg:top-0 lg:bottom-0 
        lg:z-20 lg:flex flex-col items-stretch shrink-0`}>
            <SidebarHead isMinimized={isMinimized} toggleSidebar={() => dispatch(toggleSidebar())} />
            <SidebarContent isMinimized={isMinimized} />
        </div>
    )
}

export default Sidebar