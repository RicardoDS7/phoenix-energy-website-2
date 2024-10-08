'use client';

import { NAV_LINKS, HOME_PAGE } from '../constants/constants';  // Import the constants
import Link from 'next/link';
import { useState } from 'react';
import GetInTouchButton from './GetInTouchButton';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {

    const [toggle,setToggle] = useState(false);
    const [hoveredItem,setHoveredItem] = useState<number | null>(null);
    const pathname = usePathname(); // Get current route

    return (
        <nav className='sticky top-0 flex items-center w-full justify-between py-6 px-2 md:px-6 lg:px-12 xl:px-48 nav-bar z-20 bg-gray-200 bg-opacity-75 backdrop-blur-lg'>
            <Link href={HOME_PAGE} className='flex items-center'>
                <Image src="/logo.png" alt="phoenix-energy-logo" width={50} height={50}/>
                <h1 className='font-inter font-bold text-xl'>Phoenix <span className='text-paynesGray font-semibold'>Energy</span></h1>
            </Link>

            {/* Desktop Menu */}
            <ul className='list-none lg:flex hidden justify-center items-center flex-1'>
                {NAV_LINKS.map((link,index) => (
                    <li key={link.path} 
                        className={`mr-5 nav-item ${pathname.startsWith(link.path) ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}>
                        <Link href={link.path}>
                            {link.name}
                        </Link>

                        <div>
                        {(hoveredItem === index && link.subMenu.length > 0) && (

                            
                            <ul className='absolute min-w-max pt-4 shadow-lg z-20'>
                                {link.subMenu.map((dropDownItem,i) => (
                                <li key={i}>
                                <a
                                    href={dropDownItem.path}
                                    className="block px-4 py-4 text-blue_green bg-white hover:bg-gray-200"
                                >
                                    {dropDownItem.name}
                                </a>
                                </li>
                                ))}
                            </ul>
                            
                            )}
                        </div>
                    </li>

                ))}
            </ul>

            < GetInTouchButton />

        {/* Mobile Menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center mr-10 md:mr-20'>
          <Image src={toggle ? "/icons/close.svg" : "/icons/menu.svg"} 
          alt='menu'
          width={28}
          height={28}
          className='object-contain'
          onClick={() => setToggle((prev) => !prev)}/>
        </div>

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[33%] sidebar` }>
            <ul className="list-none md:flex flex-col justify-end items-center flex-1">
            {NAV_LINKS.map((nav,index) => (
              <li
                key={nav.name}
                className={`font-poppins relative font-semibold cursor-pointer text-[16px] ${index === NAV_LINKS.length -1 ? 'mr-0' : 'mb-4'} text-charcoal`}>
                <Link href={nav.path}>
                    {nav.name}
                </Link>
                <div>
                {(hoveredItem === index && nav.subMenu.length > 0) && (

                  
                    <ul className='absolute min-w-max pt-4 shadow-lg z-20'>
                      {nav.subMenu.map((dropDownItem,i) => (
                        <li key={i}>
                        <Link href={dropDownItem.path}>
                            {dropDownItem.name}
                        </Link>
                      </li>
                      ))}
                    </ul>
                  
                  )}
                </div>

                
              </li>
            ))}
          </ul>

        </div>
        </nav>
    )
}

export default NavBar;


