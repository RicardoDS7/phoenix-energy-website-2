'use client';

import { NAV_LINKS, HOME_PAGE } from '../constants/constants';  // Import the constants
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GetInTouchButton from './GetInTouchButton';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SubMenu } from '../types/navLinks';

const NavBar = () => {

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
        console.log(`Navigating to ${subItem.path}`);
        // Perform the navigation here, for example using React Router's `useNavigate()`
        // navigate(subItem.path);
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
        <nav className='sticky top-0 flex items-center w-full justify-between py-3 px-2 md:px-6 lg:px-12 xl:px-48 nav-bar z-20 bg-antiflashWhite backdrop-blur-lg'>
            <Link href={HOME_PAGE} className='flex items-center z-30'>
                <Image src="/logo.png" alt="phoenix-energy-logo" width={50} height={50}/>
                <h1 className='font-inter font-bold text-lg'>Phoenix <span className='text-paynesGray font-semibold'>Energy</span></h1>
            </Link>

            {/* Desktop Menu */}
            <ul className='list-none lg:flex hidden justify-center items-center flex-1'>
                {NAV_LINKS.map((link,index) => (
                    <li key={link.name} 
                        className={`mr-5 nav-item ${pathname.startsWith(link.path) ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}>
                        <Link href={link.path}>
                            {link.name}
                        </Link>
                        
                        {hoveredItem === index && link.subMenu.length > 0 && (
                        <div className='absolute w-full -left-1'> 
                            <div className="z-20 mt-4 rounded-lg transform -translate-x-44 grid grid-cols-2 gap-0 min-w-[450px] bg-white shadow-xl">
                                <div className="mt-0 rounded-lg p-4 bg-white">
                                    <p className='text-charcoal text-center text-[14px]'>Maximize Savings</p>
                                    <hr className="mt-2 h-[2px] bg-atomicTangerine border-none" />
                                    <ul>
                                        {link.subMenu.map((subItem) => (
                                            subItem.category === 'save' && (
                                            <li key={subItem.name}
                                            onMouseEnter={() => setSubHoveredItem(subItem.name)}
                                            onMouseLeave={() => setSubHoveredItem(null)}
                                            className={`mt-4 font-normal align-middle flex items-center text-[14px]`}>
                                                <Image className={'object-fill mr-2'} src={subItem.icon} alt={`${subItem.name} menu icon`} width={20} height={20} />
                                                <Link href={subItem.path}
                                                    className={`justify-normal ${subHoveredItem === subItem.name? 'font-semibold text-atomicTangerine' : ''}`}
                                                    onClick={() => handleSubItemClick(subItem)}>
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                            )
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-0 p-4 rounded-lg bg-white">
                                    <h5 className='text-charcoal text-center text-[14px]'>Increase Revenue</h5>
                                    <hr className="mt-2 h-[2px] bg-atomicTangerine border-none" />
                                    <ul>
                                    {link.subMenu.map((subItem) => (
                                            subItem.category === 'earn' && (
                                            <li key={subItem.name}
                                            onMouseEnter={() => setSubHoveredItem(subItem.name)}
                                            onMouseLeave={() => setSubHoveredItem(null)}
                                            className={`mt-4 font-normal align-middle flex items-center text-[14px]`}>
                                                <Image className={'object-fill mr-2'} src={subItem.icon} alt={`${subItem.name} menu icon`} width={20} height={20} />
                                                <Link href={subItem.path}
                                                    className={`justify-normal ${subHoveredItem === subItem.name? 'font-semibold text-atomicTangerine' : ''}`}
                                                    onClick={() => handleSubItemClick(subItem)}>
                                                    {subItem.name}
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
                <Image src={isMainMenuOpen ? "/icons/Menu-1.svg" : "/icons/Close.svg"} 
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
                    <div>
                    <li key={link.name} 
                        className={`mr-5 nav-item ${pathname.startsWith(link.path) ? 'active' : ''}`}>
                        <Link href={link.path}
                            onClick={() => handleItemClick(link.name, link.subMenu)}>
                            {link.name}
                        </Link>

                    </li>
                    {isSubMenuOpen === link.name && (
                            <ul className='ml-4 mt-2'>
                                {link.subMenu.map((dropDownItem) => (
                                <li key={dropDownItem.name}
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


