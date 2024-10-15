'use client';

import { NAV_LINKS, HOME_PAGE } from '../constants/constants';  // Import the constants
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GetInTouchButton from './GetInTouchButton';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SubMenu } from '../types/navLinks';
import getConfig from 'next/config';

const NavBar = () => {

    const { publicRuntimeConfig } = getConfig();
    const basePath = publicRuntimeConfig.basePath;

    const [hoveredItem,setHoveredItem] = useState<number | null>(null);
    const [subHoveredItem,setSubHoveredItem] = useState<string | null>(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null);
    const [isMainMenuOpen, setIsMainMenuOpen] = useState<boolean>(true);
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
    const pathname = usePathname(); // Get current route

    const handleItemClick = (item: string, subMenu: SubMenu[]) => {
        if (subMenu.length > 0) {
          setIsSubMenuOpen((prev) => (prev === item ? null : item));
          setIsMainMenuOpen(false); // Keeps the main menu open when selecting a parent item
        } else {
          setIsSubMenuOpen(null);
          setIsMainMenuOpen(true);
        }
      };

      const handleSubItemClick = (subItem: SubMenu) => {
        setActiveSubItem(subItem.name); // Remember the clicked sub-item
        setIsMainMenuOpen(true); // Close the main menu when a sub-item is selected
        setIsSubMenuOpen(null);
        console.log(`Navigating to ${subItem.path}`);

      };

      const toggleMainMenu = () => {
        setIsMainMenuOpen((prev) => !prev);
        if (!isMainMenuOpen && activeSubItem) {
          // When reopening, ensure the previously active sub-menu is still open
          const activeParentItem = NAV_LINKS.find((item) =>
            item.subMenu.some((sub) => sub.name === activeSubItem)
          );
          setIsSubMenuOpen(activeParentItem ? activeParentItem.name : null);
        }
      };

    useEffect(() => {
        if (isSubMenuOpen) {
          console.log(`Sub-menu for ${isSubMenuOpen} is now open`);
        }
      }, [isSubMenuOpen]);

    return (
        <nav className='fixed top-0 flex items-center w-full justify-between py-3 px-2 md:px-6 lg:px-12 xl:px-48 nav-bar z-20 bg-antiflashWhite backdrop-blur-lg'>
            <Link href={HOME_PAGE} className='flex items-center z-30'>
                <Image src={`${basePath}/logo.png`} alt="phoenix-energy-logo" width={50} height={50}/>
                <h1 className='font-inter font-bold text-lg'>Phoenix <span className='text-paynesGray font-semibold'>Energy</span></h1>
            </Link>

            {/* Desktop Menu */}
            <ul className='list-none lg:flex hidden justify-center items-center flex-1'>
                {NAV_LINKS.map((mainItem,index) => (
                    <li key={`${mainItem.name}-menu`} 
                        className={`mr-5 nav-item ${pathname.startsWith(mainItem.path) ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}>
                        <Link href={mainItem.path}>
                            {mainItem.name}
                        </Link>
                        
                        {hoveredItem === index && mainItem.subMenu.length > 0 && (
                        <div className='absolute w-full -left-1'> 
                            <div className="z-20 mt-4 rounded-lg transform -translate-x-44 grid grid-cols-2 gap-0 min-w-[450px] bg-white shadow-xl">
                                <div className="rounded-lg p-4 bg-white">
                                    <p className='text-charcoal text-center text-sm'>Maximize Savings</p>
                                    <hr className="mt-2 h-[2px] bg-atomicTangerine border-none" />
                                    <ul>
                                        {mainItem.subMenu.map((saveItem) => (
                                            saveItem.category === 'save' && (
                                            <li key={`${saveItem.name}-save`}
                                            onMouseEnter={() => setSubHoveredItem(saveItem.name)}
                                            onMouseLeave={() => setSubHoveredItem(null)}
                                            className={`mt-4 font-normal flex items-center text-[14px]`}>
                                                <Image className={'object-fill mr-2'} src={saveItem.icon} alt={`${saveItem.name} menu icon`} width={16} height={16} />
                                                <Link href={saveItem.path}
                                                    className={`justify-normal text-sm ${subHoveredItem === saveItem.name? 'font-semibold text-atomicTangerine' : ''}`}
                                                    onClick={() => handleSubItemClick(saveItem)}>
                                                    {saveItem.name}
                                                </Link>
                                            </li>
                                            )
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 rounded-lg bg-white">
                                    <p className='text-charcoal text-center text-sm'>Increase Revenue</p>
                                    <hr className="mt-2 h-[2px] bg-atomicTangerine border-none" />
                                    <ul>
                                        {mainItem.subMenu.map((earnItem) => (
                                                earnItem.category === 'earn' && (
                                                <li key={`${earnItem.name}-submenu`}
                                                onMouseEnter={() => setSubHoveredItem(earnItem.name)}
                                                onMouseLeave={() => setSubHoveredItem(null)}
                                                className={`mt-4 font-normal flex items-center text-sm`}>
                                                    <Image className={'object-fill mr-2'} src={earnItem.icon} alt={`${earnItem.name} menu icon`} width={16} height={16} />
                                                    <Link href={earnItem.path}
                                                        className={`justify-normal text-sm ${subHoveredItem === earnItem.name? 'font-semibold text-atomicTangerine' : ''}`}
                                                        onClick={() => handleSubItemClick(earnItem)}>
                                                        {earnItem.name}
                                                    </Link>
                                                </li>
                                                )
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )}
                        

                    </li>

                ))}
            </ul>

            < GetInTouchButton />

        {/* Mobile Menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center mr-4 z-20'>
            <div className='z-20'>
                <Image src={isMainMenuOpen ? `${basePath}/icons/Menu-1.svg` : `${basePath}/icons/Close.svg`} 
                alt='menu'
                width={28}
                height={28}
                className='object-contain'
                onClick={toggleMainMenu}/>
            </div>

            {/* Sidebar */}
            <div
            className={`fixed top-0 right-0 h-screen w-full bg-antiflashWhite backdrop-blur-lg ${
                isMainMenuOpen ?  'hidden opacity-0 pointer-events-none' : 'block opacity-100 pointer-events-auto' 
            }`}
            >
                <ul className='list-none mt-24 px-4 lg:flex justify-center items-center flex-1'>
                {NAV_LINKS.map((link) => (
                    <div key={`${link.name}-mobile-container`}>
                    <li key={`${link.name}-mobile-menu`}
                        className={`mr-5 nav-item ${pathname.startsWith(link.path) ? 'active' : ''}`}>
                        <Link href={link.path}
                            onClick={() => handleItemClick(link.name, link.subMenu)}>
                            {link.name}
                        </Link>

                    </li>
                    {isSubMenuOpen === link.name && (
                            <ul className='ml-4 mt-2'>
                                {link.subMenu.map((dropDownItem) => (
                                <li key={`${dropDownItem.name}-mobile-submenu`}
                                className={`mr-5 nav-item ${pathname.startsWith(dropDownItem.path) ? 'active' : ''}`}>
                                    <Link href={dropDownItem.path}
                                        onClick={() => handleSubItemClick(dropDownItem)}>
                                        {dropDownItem.name}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                            
                            )}
                    </div>
                    ))}
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;


