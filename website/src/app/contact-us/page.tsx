"use client";
import ZohoFormEmbed from "../components/ZohoForm";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_PROFILES, PHONE_NUMBER, ADDRESS, CONTACT_EMAIL } from '../constants/constants';  // Import the constants


const ContactUs = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
        <div className="bg-antiflashWhite">

        
        <section className="max-w-[1400px] mx-auto px-4 pt-28 flex flex-col lg:flex-row gap-8 pb-14">
            <div className="flex flex-col gap-8 w-full lg:w-2/3 mx-auto">
                <div className="flex flex-col justify-start items-start w-full gap-6">
                    <h1 className="text-charcoal uppercase font-extrabold">Partner with us</h1>
                    <p className="text-paynesGray">Reach out to learn how our tailored renewable energy solutions can help your business save money and generate new revenue through green technology.</p>
                </div>

                <ZohoFormEmbed />
                
            </div>
            <div className="flex flex-col gap-8 w-full lg:w-1/3 mx-auto">
                <div className="bg-colombiaBlue rounded-3xl p-6 space-y-6">
                    <h4 className="text-charcoal">South Africa/Zambia</h4>

                    <ul className="space-y-4 mt-2">
                        <li className="footer-item flex">
                            <Image className="object-fill mr-2" src={`${basePath}/icons/email.svg`} alt="email icon" width={15} height={15} />
                            <Link className="underline hover:text-paynesGray" href={`mailto:${CONTACT_EMAIL}`}>
                                <span className="break-all whitespace-normal">{CONTACT_EMAIL}</span>
                            </Link>
                        </li>
                        <li className={`mr-5 footer-item flex items-center`}>
                            <Image className={'object-fill mr-2'} src={`${basePath}/icons/phone.svg`} alt={`phone icon`} width={15} height={15} />
                            <Link className={'underline hover:text-paynesGray'} href={`tel:${PHONE_NUMBER}`}>
                                {PHONE_NUMBER}
                            </Link>
                        </li>
                        <li className={`mr-5  flex items-center`}>
                            <Image className={'object-fill mr-2'} src={`${basePath}/icons/address.png`} alt={`address icon`} width={15} height={15} />
                            {ADDRESS}
                        </li>
                    </ul>
                    

                </div>

                <div className="rounded-3xl p-6 space-y-6">
                    <h4 className="text-charcoal">Follow Us</h4>
                    <li className={`mr-5  flex items-center`}>
                                <ul className='flex space-x-4'>
                                    {SOCIAL_PROFILES.map((socialItem) => (
                                        <li key={socialItem.account}>
                                            <Link href={socialItem.path} target='_blank' rel='noopener noreferrer'>
                                                <Image className={'object-fill'} src={`${basePath}${socialItem.icon}`} alt={`${socialItem.account} profile`} width={36} height={36} />
                                            </Link>
                                    </li>
                                    ))}
                                </ul>
                            </li>
                </div>
            </div>
        </section>

        </div>
    )
}

export default ContactUs;
