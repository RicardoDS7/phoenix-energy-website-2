'use client';
import { NAV_LINKS, HOME_PAGE, COMPANY_LINKS, SOCIAL_PROFILES, PHONE_NUMBER, CONTACT_EMAIL } from '../constants/constants';  // Import the constants
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SubMenu } from '../types/navLinks';

const Footer = () => {

    const pathname = usePathname(); // Get current route
    const solutionsItems = NAV_LINKS.find(item => item.name === 'Solutions');
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


    // Type `solutionItems` as `SubMenu[]` or `undefined` if `solutionsItem` is not found
    const solutionFoot: SubMenu[] = solutionsItems?.subMenu || [];
    

    return (
        <section className='bg-antiflashWhite text-charcoal overflow-hidden'>
            <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start w-full py-10 px-4 max-w-[1400px] mx-auto gap-8">

                <div className='flex-1 md:w-1/4 w-full min-w-[150px] text-center md:text-left'>
                    <Link href={HOME_PAGE} className='flex items-center justify-center md:justify-start'>
                        <Image src={`${basePath}/logo.png`} alt="phoenix-energy-logo" width={50} height={50}/>
                        <h1 className='font-inter font-bold text-lg'>Phoenix <span className='text-paynesGray font-semibold'>Energy</span></h1>
                    </Link>
                    <p className='mt-4 font-inter text-sm'>© Copyright 2024 | All rights reserved</p>
                </div>

                <div className='flex-1 md:w-1/4 w-full min-w-[150px]'>
                    <h4>Solutions</h4>
                    <ul className="space-y-4 mt-2">
                        {solutionFoot.map((item) => (
                            <li key={item.name} 
                            className={`mr-5 footer-item ${pathname.startsWith(item.path) ? 'active' : ''}`}>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className='flex-1 md:w-1/4 w-full min-w-[150px]'>
                    <h4>Company</h4>
                    <ul className="space-y-4 mt-2">
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

                <div className='flex-1 md:w-1/4 w-full min-w-[150px]'>
                    <h4>Contact</h4>
                    <ul className="space-y-4 mt-2">
                        <li className="footer-item flex">
                            <Image className="object-fill mr-2" src={`${basePath}/icons/email.svg`} alt="email icon" width={15} height={15} />
                            <Link className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                                <span className="break-all whitespace-normal">{CONTACT_EMAIL}</span>
                            </Link>
                        </li>
                        <li className={`mr-5 footer-item flex items-center`}>
                            <Image className={'object-fill mr-2'} src={`${basePath}/icons/phone.svg`} alt={`phone icon`} width={15} height={15} />
                            <Link className={'underline '} href={`tel:${PHONE_NUMBER}`}>
                                {PHONE_NUMBER}
                            </Link>
                        </li>
                        
                        <li className={`mr-5  flex items-center`}>
                            <ul className='flex space-x-4'>
                                {SOCIAL_PROFILES.map((socialItem) => (
                                    <li key={socialItem.account}>
                                        <Link href={socialItem.path} target='_blank' rel='noopener noreferrer'>
                                            <Image className={'object-fill'} src={`${basePath}${socialItem.icon}`} alt={`${socialItem.account} profile`} width={20} height={20} />
                                        </Link>
                                </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
} 

export default Footer;