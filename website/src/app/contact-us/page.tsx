"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from 'react';
import { sendGTMEvent } from "../lib/gtm";
import { SOCIAL_PROFILES, PHONE_NUMBER, CONTACT_EMAIL } from '../constants/constants';  // Import the constants
import Meta from "../components/Meta";

const ContactUs = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    // Define the state to track which section is visible
    const [visibleSection, setVisibleSection] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const iframeSolarRef = useRef<HTMLIFrameElement>(null);
    const iframeWasteRef = useRef<HTMLIFrameElement>(null);
    const iframeHydrogenRef = useRef<HTMLIFrameElement>(null);
    const iframeCarbonCreditsRef = useRef<HTMLIFrameElement>(null);

    // Function to update the visible section
    const handleButtonClick = (sectionID: string) => {
        if (visibleSection !== sectionID) {
            setLoading(true); // Start loading
            setVisibleSection(sectionID); // Update the visible section ID
            sendGTMEvent("contact_form_click", {button_name: sectionID})
        }
    };


    return (
    <>
        <Meta
        title="Partner With Us"
        description="Learn how our tailored renewable energy solutions can help your business save money and generate new revenue through green technology."
        />

        <div className="bg-antiflashWhite min-h-[900px]">
            <section className="max-w-[1400px] mx-auto px-4 pt-28 flex flex-col lg:flex-row gap-8 pb-14">
                <div className="flex flex-col gap-8 w-full lg:w-2/3 mx-auto">
                    <div className="flex flex-col justify-start items-start w-full gap-6">
                        <h1 className="text-charcoal uppercase font-extrabold">Partner with us</h1>
                        <p className="text-paynesGray">Reach out to learn how our tailored renewable energy solutions can help your business save money and generate new revenue through green technology.</p>
                    </div>

                    <h3 className="text-charcoal font-bold">Select the solution you&apos;re interested in...</h3>
                    <div className="flex flex-row flex-wrap gap-2">
                        {/* Your solution buttons */}
                        <button 
                            type="button" 
                            onClick={() => handleButtonClick('solar-contact-form')}
                            className="solution-options-form-button px-4 py-2 rounded-full hidden lg:block">
                            Embedded Solar & Wheeling
                        </button>

                        <button 
                            type="button" 
                            onClick={() => handleButtonClick('waste-valorisation-contact-form')}
                            className="solution-options-form-button px-4 py-2 rounded-full hidden lg:block">
                            Waste Valorisation
                        </button>

                        <button 
                            type="button" 
                            onClick={() => handleButtonClick('hydrogen-contact-form')}
                            className="solution-options-form-button px-4 py-2 rounded-full hidden lg:block">
                            Hydrogen Technologies
                        </button>

                        <button 
                            type="button" 
                            onClick={() => handleButtonClick('carbon-credits-contact-form')}
                            className="solution-options-form-button px-4 py-2 rounded-full hidden lg:block">
                            Carbon Management & Credits
                        </button>

                        <button 
                            type="button" 
                            onClick={
                                () => {handleButtonClick('energy-management-contact-form');
                                }
                            }
                            className="solution-options-form-button px-4 py-2 rounded-full hidden lg:block">
                           Energy Management
                        </button>
                        
                    </div>

                    {/* Embedded Solar & Wheeling Form*/}
                    {visibleSection === 'solar-contact-form' && (
                        <div id="solar-contact-form" className="relative flex flex-grow">
                            <iframe
                            ref={iframeSolarRef}
                            className={`w-[calc(100%+3rem)] -mx-6 h-[1800px] lg:h-[1650px] ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://us.bigin.online/org870703215/forms/embedded-solar-form"
                            onLoad={() => {
                                setLoading(false);
                                if (iframeSolarRef.current) {
                                    const offset = 80; // Adjust this value to set your desired offset
                                    const iframeTop = iframeSolarRef.current.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top: iframeTop, behavior: 'smooth' });
                                }
                            }}
                            ></iframe>
                            {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-fit  bg-antiflashWhite bg-opacity-75">
                                <div className="loading-circle animate-spin border-4 border-t-4 border-t-paynesGray rounded-full w-12 h-12 mb-4"></div>
                                <p className="text-charcoal font-medium">Loading form...</p>
                            </div>
                            )}
                        </div>
                        )}

                    {/* Waste Valorisation Form*/}
                    {visibleSection === 'waste-valorisation-contact-form' && (
                        <div id="waste-valorisation-contact-form" className="relative">
                            <iframe
                            ref={iframeWasteRef}
                            className={`w-[calc(100%+3rem)] -mx-6 h-[1400px] lg:h-[1300px] ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://us.bigin.online/org870703215/forms/waste-valorisation"
                            onLoad={() => {
                                setLoading(false);
                                if (iframeWasteRef.current) {
                                    const offset = 80; // Adjust this value to set your desired offset
                                    const iframeTop = iframeWasteRef.current.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top: iframeTop, behavior: 'smooth' });
                                }
                            }}
                            ></iframe>
                            {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-fit bg-antiflashWhite bg-opacity-75">
                                <div className="loading-circle animate-spin border-4 border-t-4 border-t-paynesGray rounded-full w-12 h-12 mb-4"></div>
                                <p className="text-charcoal font-medium">Loading form...</p>
                            </div>
                            )}
                        </div>
                        )}

                    {/* Hydrogen Form*/}
                    {visibleSection === 'hydrogen-contact-form' && (
                        <div id="hydrogen-contact-form" className="relative">
                            <iframe
                            ref={iframeHydrogenRef}
                            className={`w-[calc(100%+3rem)] -mx-6 h-[1450px] lg:h-[1400px] ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://us.bigin.online/org870703215/forms/hydrogen-technology"
                            onLoad={() => {
                                setLoading(false);
                                if (iframeHydrogenRef.current) {
                                    const offset = 80; // Adjust this value to set your desired offset
                                    const iframeTop = iframeHydrogenRef.current.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top: iframeTop, behavior: 'smooth' });
                                }
                            }}
                            ></iframe>
                            {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-fit bg-antiflashWhite bg-opacity-75">
                                <div className="loading-circle animate-spin border-4 border-t-4 border-t-paynesGray rounded-full w-12 h-12 mb-4"></div>
                                <p className="text-charcoal font-medium">Loading form...</p>
                            </div>
                            )}
                        </div>
                        )}

                    {/* Carbon Credits Form*/}
                    {visibleSection === 'carbon-credits-contact-form' && (
                        <div id="carbon-credits-contact-form" className="relative">
                            <iframe
                            ref={iframeCarbonCreditsRef}
                            className={`w-[calc(100%+3rem)] -mx-6 h-[1350px] lg:h-[1250px] ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://us.bigin.online/org870703215/forms/carbon-credits-and-carbon-management"
                            onLoad={() => {
                                setLoading(false);
                                if (iframeCarbonCreditsRef.current) {
                                    const offset = 80; // Adjust this value to set your desired offset
                                    const iframeTop = iframeCarbonCreditsRef.current.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top: iframeTop, behavior: 'smooth' });
                                }
                            }}
                            ></iframe>
                            {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-fit bg-antiflashWhite bg-opacity-75">
                                <div className="loading-circle animate-spin border-4 border-t-4 border-t-paynesGray rounded-full w-12 h-12 mb-4"></div>
                                <p className="text-charcoal font-medium">Loading form...</p>
                            </div>
                            )}
                        </div>
                        )}

                    {/* Energy Management Form*/}
                    {visibleSection === 'energy-management-contact-form' && (
                        <div id="energy-management-contact-form" className="relative">
                            <iframe
                            ref={iframeCarbonCreditsRef}
                            className={`w-[calc(100%+3rem)] -mx-6 h-[1250px] lg:h-[1150px] ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://us.bigin.online/org870703215/forms/energy-management"
                            onLoad={() => {
                                setLoading(false);
                                if (iframeCarbonCreditsRef.current) {
                                    const offset = 80; // Adjust this value to set your desired offset
                                    const iframeTop = iframeCarbonCreditsRef.current.getBoundingClientRect().top + window.scrollY - offset;
                                    window.scrollTo({ top: iframeTop, behavior: 'smooth' });
                                }
                            }}
                            ></iframe>
                            {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-fit bg-antiflashWhite bg-opacity-75">
                                <div className="loading-circle animate-spin border-4 border-t-4 border-t-paynesGray rounded-full w-12 h-12 mb-4"></div>
                                <p className="text-charcoal font-medium">Loading form...</p>
                            </div>
                            )}
                        </div>
                        )}


                </div>
                <div className="flex flex-col gap-8 w-full lg:w-1/3 mx-auto">
                    <div className="bg-colombiaBlue rounded-3xl p-6 space-y-6">
                        <h4 className="text-charcoal">Our Contact Details</h4>
                        <p className="text-charcoal text-base">For general inquiries or special requests, please contact us using the details provided below.</p>
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
                                <ul className='flex space-x-4'>
                                    {SOCIAL_PROFILES.map((socialItem) => (
                                        <li key={socialItem.account}>
                                            <Link href={socialItem.path} target='_blank' rel='noopener noreferrer'>
                                                <Image className={'object-fill'} src={`${basePath}${socialItem.icon}`} alt={`${socialItem.account} profile`} width={24} height={24} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </>
    );
};

export default ContactUs;
