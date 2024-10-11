'use client';
import { NAV_LINKS, HOME_PAGE, COMPANY_LINKS, SOCIAL_PROFILES, PHONE_NUMBER, ADDRESS, CONTACT_EMAIL } from '../constants/constants';  // Import the constants
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SubMenu, FooterLink } from '../types/navLinks';

const Footer = () => {

    const pathname = usePathname(); // Get current route
    const solutionsItems = NAV_LINKS.find(item => item.name === 'Solutions');
    


    // Type `solutionItems` as `SubMenu[]` or `undefined` if `solutionsItem` is not found
    const solutionFoot: SubMenu[] = solutionsItems?.subMenu || [];
    

    return (
        <div className=" flex flex-col md:flex-row items-center md:items-start w-full py-10 px-4 md:px-6 lg:px-12 xl:px-24 gap-8 bg-antiflashWhite">

            <div className='flex-2 md:w-1/4 w-full min-w-[150px] text-center md:text-left'>
                <Link href={HOME_PAGE} className='flex items-center justify-center md:justify-start'>
                    <Image src="/logo.png" alt="phoenix-energy-logo" width={50} height={50}/>
                    <h1 className='font-inter font-bold text-lg'>Phoenix <span className='text-paynesGray font-semibold'>Energy</span></h1>
                </Link>
                <p className='mt-4 font-inter text-sm'>© Copyright 2024 | All rights reserved</p>
            </div>

            <div className='flex-2 md:w-1/4 w-full min-w-[150px]'>
                <h4>Solutions</h4>
                <ul className="space-y-2 mt-2">
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

            <div className='flex-2 md:w-1/4 w-full min-w-[150px]'>
                <h4>Company</h4>
                <ul className="space-y-2 mt-2">
                    {COMPANY_LINKS.map((companyItem) => (
                        <li key={companyItem.name} 
                        className={`mr-5 footer-item ${pathname.startsWith(companyItem.path) ? 'active' : ''}`}>
                        <Link href={companyItem.path}>
                            {companyItem.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            <div className='flex-2 md:w-1/4 w-full min-w-[150px]'>
                <h4>Contact</h4>
                <ul className="space-y-2 mt-2">
                    <li className={`footer-item flex`}>
                        <Image className={'object-fill mr-2'} src={'/icons/email.svg'} alt={`email icon`} width={16} height={16} />
                        <Link className={'underline'} href={`mailto:${CONTACT_EMAIL}`}>
                                {CONTACT_EMAIL}
                        </Link>
                    </li>
                    <li className={`mr-5 footer-item flex items-center`}>
                        <Image className={'object-fill mr-2'} src={'/icons/phone.svg'} alt={`phone icon`} width={14} height={14} />
                        <Link className={'underline'} href={`tel:${CONTACT_EMAIL}`}>
                            {PHONE_NUMBER}
                        </Link>
                    </li>
                    <li className={`mr-5 footer-item flex items-center`}>
                        <Image className={'object-fill mr-2'} src={'/icons/address.svg'} alt={`address icon`} width={14} height={14} />
                        {ADDRESS}
                    </li>
                    <ul className='flex space-x-3 mt-4'>
                        {SOCIAL_PROFILES.map((socialItem,index) => (
                            <li key={socialItem.account} 
                            className={`px-1 mt-2`}>
                                <Link href={socialItem.path} target='_blank' rel='noopener noreferrer'>
                                    <Image className={'object-fill'} src={socialItem.icon} alt={`${socialItem.account} profile`} width={20} height={20} />
                                </Link>
                        </li>
                        ))}
                    </ul>
                </ul>
            </div>
            </div>
    )
} 

export default Footer;