'use client';

import { setIsOPenSidebar } from '@/Redux/Reducers/commonSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import { NavbarConstants } from '@/constants/NavbarConstants';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
    const { isOPenSidebar } = useAppSelector(state => state.common);
    const dispatch = useAppDispatch();
    const handleSidebarClick = () => {
        dispatch(setIsOPenSidebar(!isOPenSidebar));
    };

    return (
        <nav className='fixed top-0 w-full'>
            <div className="flex justify-between px-10 py-4 items-center shadow-md bg-white">
                <div
                    className="flex space-x-2 items-center cursor-pointer"
                    onClick={handleSidebarClick}
                >
                    <Image
                        src={NavbarConstants.proejct.logo}
                        alt={NavbarConstants.proejct.logoAltName}
                        width={50}
                        height={50}
                    />
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400 font-bold text-3xl">
                        {NavbarConstants.proejct.title}
                    </h1>
                </div>
                <div>
                    <ul className="flex space-x-3 px-3">
                        {NavbarConstants.navItems.map((navItem, index) => (
                            <li
                                className="text-nav-item text-lg hover:text-blue-800 cursor-pointer"
                                key={index}
                            >
                                {navItem.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
