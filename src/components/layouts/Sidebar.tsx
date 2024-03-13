'use client';
import { useAppSelector } from '@/Redux/store';
import { SidebarConstants } from '@/constants/SidebarConstants';
import Image from 'next/image';
import React from 'react';

function Sidebar() {
    const { isOPenSidebar } = useAppSelector(state => state.common);
    return (
        <aside className='fixed left-0 top-[5.2rem]'>
            <div className="py-5 px-5 border-r h-screen border-gray-300">
                <ul className="">
                    {SidebarConstants.sidebarItems.map((sidebarItem, index) => (
                        <li
                            className="flex space-x-2 items-center px-5 py-4 cursor-pointer rounded-md group hover:bg-blue-50"
                            key={index}
                        >
                            <Image
                                src={sidebarItem.icon}
                                alt={sidebarItem.name}
                                height={30}
                                width={30}
                            />
                            {isOPenSidebar && (
                                <span className="font-medium pl-4 group-hover:text-blue-800">
                                    {sidebarItem.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                {}
            </div>
        </aside>
    );
}

export default Sidebar;
