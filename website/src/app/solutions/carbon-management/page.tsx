'use client';
import { useState } from "react";
import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import FAQ from "@/app/components/FAQ";
import GetInTouchButton from "@/app/components/GetInTouchButton";
import { CarbonAccountingFAQs } from "@/app/constants/constants";
import AltGetInTouchButton from "@/app/components/AltGetInTouchButton";
import HowItWorksButton from "@/app/components/HowItWorksButton";
import Meta from "@/app/components/Meta";

const CarbonManagement = () => {

    const [loading, setLoading] = useState(true);

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
    <>
        <Meta
        title="Carbon Management - Sustainability-As-A-Service"
        description="A holistic carbon accounting platform for precise footprint measurement, reporting, and tailored action plans to ensure SBTi and CSRD compliance."
        />

        <div className="bg-antiflashWhite overflow-hidden">

            {/* Hero Section */} 
            <section className="max-w-[1400px] mx-auto px-4">
                <div className="relative pt-28 w-full flex items-center justify-center">
                    {/* Hero Content */}
                    <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
                        
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 text-center md:text-left space-y-6">
                            <h1 className="text-charcoal uppercase font-extrabold break-words">Sustainability-As-A-Service</h1>
                            <p className="mt-4 text-paynesGray">A comprehensive carbon accounting platform providing precise measurement and reporting of your business&apos;s carbon footprint. With a tailored action plan and dedicated guidance, we help you achieve full SBTi and CSRD compliance.</p>
                            <div className="mt-6 flex flex-row gap-4 justify-center md:justify-start items-center">
                                <HowItWorksButton sectionID='carbon-management-steps' />
                                <GetInTouchButton />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex items-end justify-center relative h-[360px] rounded-3xl">
                            {/* Loading Spinner */}
                            {loading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full rounded-3xl">
                                    <div className="loading-circle animate-spin border-4 border-t-4 border-t-paynesGray rounded-full w-12 h-12 mb-4"></div>
                                    <p className="text-charcoal font-medium">Loading...</p>
                                </div>
                            )}

                            {/* Video Content */}
                                <iframe
                                    src="https://player.vimeo.com/video/766513504?h=186e36c0a3?api=1&background=1&mute=0"
                                    title="Carbon Management Software"
                                    width={533.33}
                                    height={360}
                                    className={`rounded-lg object-cover pt-2 w-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    onLoad={() => setLoading(false)} // Hide spinner once loaded
                                ></iframe>

                        </div>


                    </div>
                    </div>
                </section>

                {/* Brands Logos */}  
                <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
                    <div className="max-w-[1400px] mx-auto">
                          
                        <h3 className="text-paynesGray font-medium text-center">Companies commited to managing their carbon footprint</h3>
                        <div className="flex-col lg:flex-row mt-12">
                            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/loreal.png`}
                                        alt= {"loreal-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                {/* <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/daisy-logo.png`}
                                        alt= {"nedbank-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li> */}


                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/hsbc.png`}
                                        alt= {"hsbc logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/hauwei.png`}
                                        alt= {"hauwei logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/siemens.png`}
                                        alt= {"siemens-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>

                {/*Why is matters for your business? */}
                <section id="why-carbon-credits-matters" className="py-14 px-4 bg-charcoal">

                    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:gap-12 space-y-12">
                        <div className="relative flex flex-col items-center justify-center w-full">
                            <h2 className="text-antiflashWhite">Why it matters for your business</h2>
                        
                            <div className="py-10">
                                <ul className="flex flex-wrap gap-6 items-center justify-center text-charcoal">

                                    <li className="bg-antiflashWhite rounded-full py-2 pl-2 pr-4 w-full md:w-auto">
                                        <div className="flex flex-row align-middle items-center gap-6">
                                            <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0 ">
                                                    <Image src={`${basePath}/icons/growth.png`} alt="icon" width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-0 -ml-2 mr-4">
                                                <p className="font-bold">Increased Savings</p>
                                                <p className="text-sm md:text-base">Decrease your operational costs.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="bg-antiflashWhite rounded-full py-2 pl-2 pr-4 w-full md:w-auto">
                                        <div className="flex flex-row align-middle items-center gap-6">
                                            <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0 ">
                                                    <Image src={`${basePath}/icons/benefits.png`} alt="icon" width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-0 -ml-2 mr-4">
                                                <p className="font-bold">New Oppurtunities</p>
                                                <p className="text-sm md:text-base">Access new markets and financing.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="bg-antiflashWhite rounded-full py-2 pl-2 pr-4 w-full md:w-auto">
                                        <div className="flex flex-row align-middle items-center gap-6">
                                            <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0 ">
                                                    <Image src={`${basePath}/icons/competitive.png`} alt="icon" width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-0 -ml-2 mr-4">
                                                <p className="font-bold">Competitiveness</p>
                                                <p className="text-sm md:text-base">Develop a competitive advantage.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="bg-antiflashWhite rounded-full py-2 pl-2 pr-4 w-full md:w-auto">
                                        <div className="flex flex-row align-middle items-center gap-6">
                                            <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0 ">
                                                    <Image src={`${basePath}/icons/compliance.png`} alt="icon" width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-0 -ml-2 mr-4">
                                                <p className="font-bold">Legal Readiness</p>
                                                <p className="text-sm md:text-base">Prepare for stricter laws.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="bg-antiflashWhite rounded-full py-2 pl-2 pr-4 w-full md:w-auto">
                                        <div className="flex flex-row align-middle items-center gap-6">
                                            <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0 ">
                                                    <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-0 -ml-2 mr-4">
                                                <p className="font-bold">Brand Reputation</p>
                                                <p className="text-sm md:text-base">Improve your brand and employer image.</p>
                                            </div>
                                        </div>
                                    </li>

                                    
                                    

                                </ul>
                            </div>

                            <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start">
                                <AltGetInTouchButton />
                            </div>

                        </div>
                    </div>
                </section>

                {/* Carbon Management Steps */}
              <section id="carbon-management-steps" className="relative  
                                                                w-full
                                                                py-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal text-center">Measure. Act. Comply.</h2>
                    
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                            
                            {/*Measure */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/measure.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-antiflashWhite whitespace-pre-wrap font-bold">
                                    Measure & Analyse
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">

                                </div>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">GHG Assessment</p>
                                                    <p className="">Accurately calculate your total emissions across all scopes for impactful carbon reduction.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Multi-Criteria Life Cycle Assessments (LCAs)</p>
                                                    <p>Evaluate environmental impact across your product lifecycle, covering water, waste, and energy.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Suppliers Data Retrieval</p>
                                                    <p>Efficiently gather emissions data from your entire supply chain for a complete Scope 3 emissions profile.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*Action Plan */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/action-plan.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Personalised Action Plan
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">

                                </div>

                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Transition Plan</p>
                                                    <p>Create a roadmap with actionable steps and milestones to systematically reduce emissions.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Sustainable Procurement</p>
                                                    <p>Partner with suppliers who uphold environmental and social responsibility.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Change Management</p>
                                                    <p>Equip your team for sustainable practices with training and clear processes.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Offset</p>
                                                    <p>Achieve carbon neutrality by investing in certified carbon credits.</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>

                            {/*Report & Comply */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Report & Comply
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">

                                </div>

                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Carbon Display</p>
                                                    <p>Showcase emissions data transparently, demonstrating your commitment to sustainability.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Science Based Targets</p>
                                                    <p>Set ambitious goals aligned with climate science, with the option for SBTi certification.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Communication Materials</p>
                                                    <p>Engage stakeholders with professional resources that tell your sustainability story.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Corporate Sustainability Reporting</p>
                                                    <p>Publish comprehensive reports to build trust and show accountability.</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    
                        <div className="mt-6 flex align-middle items-center justify-center">
                            <GetInTouchButton />
                        </div>

                    </div>
                </ section>

                {/* FAQ */}
                <section id="carbon-management-faq" className="relative w-full px-4 pb-14 flex items-center justify-center">

                    <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal">Frequently asked questions</h2>
                       
                        < FAQ 
                        faqItems={CarbonAccountingFAQs}/>

                    </div>

                </section>

                {/* CTA */}
                <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-center w-full h-full py-14 items-center justify-center"
                        style={{
                            backgroundImage: `url(${basePath}/images/Carbon-Management-CTA.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="YOUR ROADMAP TO NET-ZERO."
                            subtitle=""/>

                        </div>

                    </div>
                </section>

        </div>
    </>
    )
}

export default CarbonManagement