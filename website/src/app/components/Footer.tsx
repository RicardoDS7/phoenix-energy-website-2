'use client';
import { NAV_LINKS, HOME_PAGE } from '../constants/constants';  // Import the constants
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SubMenu, NavLink } from '../types/navLinks';
import GetInTouchButton from './GetInTouchButton';

const Footer = () => {

    const pathname = usePathname(); // Get current route
    const solutionsItems = NAV_LINKS.find(item => item.name === 'Solutions');
    


    // Type `solutionItems` as `SubMenu[]` or `undefined` if `solutionsItem` is not found
    const solutionFoot: SubMenu[] = solutionsItems?.subMenu || [];
    

    return (
        <div className=" flex flex-col items-center gap-0 w-full py-10 px-2 md:px-6 lg:px-12 xl:px-48 md:flex-row z-20 bg-antiflashWhite backdrop-blur-lg">

            <div className='flex-1'>
                <Link href={HOME_PAGE} className='flex items-center z-30'>
                    <Image src="/logo.png" alt="phoenix-energy-logo" width={50} height={50}/>
                    <h1 className='font-inter font-bold text-lg'>Phoenix <span className='text-paynesGray font-semibold'>Energy</span></h1>
                </Link>
                <p className='mt-4 font-inter text-sm'>© Copyright 2024 | All rights reserved</p>
            </div>

            <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex-2 w-[200px]'>
                <h4>Solutions</h4>
                <ul>
                    {solutionFoot.map((item,index) => (
                        <li key={item.name} 
                        className={`mr-5 footer-item ${pathname.startsWith(item.path) ? 'active' : ''}`}>
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            <div className='flex-2 w-[200px]'>
                <h4>Company</h4>
                <ul>
                    {solutionFoot.map((item,index) => (
                        <li key={item.name} 
                        className={`mr-5 footer-item ${pathname.startsWith(item.path) ? 'active' : ''}`}>
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            <div className='flex-2 w-[200px]'>
                <h4>Contact</h4>
                <ul>
                    {solutionFoot.map((item,index) => (
                        <li key={item.name} 
                        className={`mr-5 footer-item ${pathname.startsWith(item.path) ? 'active' : ''}`}>
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            </div>

            
        </div>
    )
} 

export default Footer;