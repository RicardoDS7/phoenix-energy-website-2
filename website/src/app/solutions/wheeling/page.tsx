'use client';

import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import CallToAction from '@/app/components/CallToAction';
import FAQ from '@/app/components/FAQ';
import { WheelingProcess, WheelingFAQs } from '@/app/constants/constants';
import GetInTouchButton from '@/app/components/GetInTouchButton';
import StepProcess from '@/app/components/OurProcess';
import Image from 'next/image';
import AltGetInTouchButton from '@/app/components/AltGetInTouchButton';
import OptimizedVideo from '@/app/components/Video';
import React, { useRef, useEffect, useState } from 'react';
import Meta from '@/app/components/Meta';

const Wheeling = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    // Separate refs and heights for each section
    const manufacturingRef = useRef<HTMLDivElement>(null);
    const [manufacturingHeight, setManufacturingHeight] = useState(0);

    const miningRef = useRef<HTMLDivElement>(null);
    const [miningHeight, setMiningHeight] = useState(0);

    const commercialRef = useRef<HTMLDivElement>(null);
    const [commercialHeight, setCommercialHeight] = useState(0);

    const agriRef = useRef<HTMLDivElement>(null);
    const [agriHeight, setAgriHeight] = useState(0);

    useEffect(() => {
        if (manufacturingRef.current) {
            setManufacturingHeight(manufacturingRef.current.clientHeight);
        }
        if (miningRef.current) {
            setMiningHeight(miningRef.current.clientHeight);
        }
        if (commercialRef.current) {
            setCommercialHeight(commercialRef.current.clientHeight);
        }
        if (agriRef.current) {
            setAgriHeight(agriRef.current.clientHeight);
        }
    }, []);

  return (
    <>
    <Meta
    title="Wheeling - Cheaper, Greener, Virtual Power"
    description="Wheeled power gives businesses 24/7 access to renewable energy through the existing grid, providing clean, cost-effective power without the expense of on-site infrastructure."
    />
          <div className='bg-antiflashWhite'>

              {/* Hero Section */} 
              <section className='max-w-[1400px] mx-auto px-4'>
                  <HeroSectionS2S 
                      title='Cheaper, Greener, Virtual Power.'
                      subtitle='Wheeled power gives businesses 24/7 access to renewable energy through the existing grid, providing clean, cost-effective power without the expense of on-site infrastructure.'
                      imagePath={`${basePath}/images/Wheeling-Hero-Image.webp`}
                      altText='Wind Turbines'
                      width={1024}
                      height={1024}
                      sectionID='how-it-works-wheeling'
                      howItWorksActive={true}
                  />
              </section>

              {/* Companies using Wheeling */}  
              <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
                    <div className="max-w-[1400px] mx-auto">
                          
                        <h3 className="text-paynesGray font-medium text-center">Businesses that have switched to wheeled power</h3>
                        <div className="flex-col lg:flex-row mt-12">
                            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/shoprite-logo.png`}
                                        alt= {"shoprite-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/vodacom-logo.png`}
                                        alt= {"vodacom-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/growthpoint-logo.png`}
                                        alt= {"growth-point-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/anglo-american-logo.png`}
                                        alt= {"angloamerica-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </section>

              {/* What is Wheeling? */}
              <section className='bg-paynesGray'>
                <div className='max-w-[1400px] mx-auto px-4 py-14'>
                <div className='flex flex-col-reverse lg:flex-row gap-8 w-full items-start justify-center text-charcoal'>

                    <div className='flex w-full lg:w-1/2 flex-col gap-6 text-antiflashWhite'>
                        <h2>Wheeling explained</h2>
                        <p>Wheeling is a process that enables businesses to purchase renewable energy from an independent power provider (IPP) and receive it through the existing grid infrastructure. Instead of requiring on-site generation, energy is produced remotely and “wheeled” through the grid to your business location, providing a reliable, sustainable power supply that aligns with modern energy and sustainability goals.</p>
                        <div>
                            < AltGetInTouchButton />
                        </div>
                    </div>

                    <div className='flex w-full lg:w-1/2 flex-col gap-6'>
                        <OptimizedVideo 
                        src={`${basePath}/videos/WHEELING-EXPLAINED.mp4`}
                        poster={`${basePath}/images/Wheeling-Explained-Poster.png`}
                        height='360px'/>
                    </div>
                </div>
                </div>
              </section>

              {/* Benefits of Hweeled Power */}
              <section id="earn-carbon-credits" className="relative  
                                                                w-full
                                                                py-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal text-center">Why switch to wheeled power?</h2>
                    
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/growth.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-antiflashWhite whitespace-pre-wrap font-bold">
                                    Effortless Scalability for Growing Needs
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Wheeled power solutions are adaptable to growing energy needs, making it easy for businesses to scale up without needing additional infrastructure or operational adjustments.
                                    </p>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/none-icon.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Zero Infrastructure & Maintenance
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Wheeling eliminates the need for on-site generation infrastructure, sparing businesses the high costs of equipment, installation, and maintenance, while still accessing clean, renewable energy.
                                    </p>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Affordable & Stable Energy Rates
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    With wheeled power, businesses can lock in lower, stable rates by purchasing directly from an independent power producer. This shields them from fluctuations in energy prices and helps manage long-term energy budgets effectively.
                                    </p>
                                </div>
                            </div>

                            {/*Maximized Renewable Integration */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/maximize.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Maximized Renewable Integration
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Because wheeling uses offsite power, businesses that cannot fully meet their energy needs with on-site generation can still significantly reduce their dependence on conventional grid power, enabling higher renewable energy adoption.
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="mt-6 flex align-middle items-center justify-center">
                            <GetInTouchButton />
                        </div>

                    </div>
                </ section>


                {/* Wheeling Industries */}
                <section id="carbon-credits-eligibility" className="relative 
                                                                bg-antiflashWhite 
                                                                w-full
                                                                pb-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">

                        <h2 className="text-charcoal text-center">Industries that can benefit the most from wheeling</h2>
                    
                        <p className="text-charcoal text-center mt-6 text-xl">
                        Whether you&apos;re looking for seamless grid integration, reliable battery storage, or backup power with generator integration, we&apos;ve got you covered.
                        </p>

                        <div className="mt-12 flex flex-col gap-8">
                        {/* Manufacturing */}
                        <div className="flex flex-col w-full lg:flex-row-reverse gap-8 items-start">
                            
                            <div 
                            ref={manufacturingRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-col items-start justify-start text-start space-y-8"
                            >
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/factory.png`} alt="manufacturing-icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Manufacturing
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Supports High Production Demands</p>
                                                    <p>Wheeling delivers reliable, high-capacity power, ensuring manufacturers can meet intense production schedules that can not be met with on-site power generation alone.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Stable, Cost-Efficient Energy Supply</p>
                                                    <p>With wheeling, manufacturers secure consistent renewable energy at predictable rates, reducing costs and shielding against market price spikes.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Lower Carbon Footprint for Compliance</p>
                                                    <p>Clean, wheeled energy helps manufacturers cut emissions, meet sustainability standards, and stay aligned with industry regulations.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton/>
                                </div>
                            </div>

                            {/* Image container scales according to text container height */}
                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${manufacturingHeight}px` }}>
                                <Image 
                                    src={`${basePath}/images/Factory-Image.webp`}
                                    alt="Manufacturing Industry" 
                                    width={500} 
                                    height={500} 
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>


                        {/*Mining */}
                        <div className="flex flex-col w-full lg:flex-row gap-8">
                        
                            <div 
                            ref={miningRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-col items-start justify-start text-start space-y-8"
                            >
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/pickaxe.png`} alt="mining-icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Mining
                                </h3>
                               
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">24/7 Renewable Energy Access</p>
                                                    <p className="">Wheeling connects mining sites to round-the-clock renewable energy through the grid, ensuring a steady power supply.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Cost-Effective Operations</p>
                                                    <p className="">Access to stable, lower-cost renewable energy helps mines control expenses and sustain profitability in power-intensive operations.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Advances Sustainability Goals</p>
                                                    <p className="">Wheeling reduces fossil fuel dependence, lowers emissions, and supports mines in meeting regulatory and environmental targets.</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton/>
                                </div>

                            </div>

                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${miningHeight}px` }}>
                                <Image className="object-cover rounded-3xl" 
                                src={`${basePath}/images/Mining-Image.webp`} 
                                alt="Mining Industry" 
                                width={500} 
                                height={500} />
                            </div>
                        </div>

                        {/*Commercial Real Estate */}
                        <div className="flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div 
                            ref={commercialRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8"
                            >
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/apartments.png`} alt="commercial-real-estate-icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Commercial Real Estate
                                </h3>
                        
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Scalable for Multi-Property Portfolios</p>
                                                    <p className="">One wheeling agreement can power multiple properties, simplifying scalability and making it easy for real estate managers to implement sustainable energy solutions across their entire portfolio.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Competitive Advantage with Lower Energy Costs</p>
                                                    <p className="">With access to lower, stable energy rates, wheeling offers landlords a competitive advantage allowing them to pass savings onto tenants.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Enhanced Property Value through Green Credentials</p>
                                                    <p className="">Renewable energy through wheeling enhances green credentials, increases property value, and supports LEED or environmental certifications, attracting investors and eco-conscious tenants.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton/>
                                </div>

                            </div>

                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${commercialHeight}px` }}>
                                <Image className="object-cover rounded-3xl" 
                                src={`${basePath}/images/Commercial-Real-Estate-Image.png`} 
                                alt="Mining Industry" 
                                width={500} 
                                height={500} />
                            </div>
                        </div>

                        {/*Agriculture */}
                        <div className="flex flex-col w-full lg:flex-row gap-8">
                            <div 
                            ref={agriRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-col items-start justify-start text-start space-y-8"
                            >
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/tractor.png`} alt="agriculture-icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">Agriculture</h3>

                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Seasonal Cost Efficiency</p>
                                                    <p>Wheeling offers stable, predictable energy rates that help manage seasonal energy costs, allowing farms to efficiently budget and allocate resources throughout peak and off-peak periods.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Supports Sustainable Farming Practices</p>
                                                    <p>By sourcing renewable energy through wheeling, farms can significantly reduce their carbon footprint, aligning with sustainable agriculture practices that meet consumer and regulatory demands.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Compliance with Eco-Certifications</p>
                                                    <p>Access to clean energy through wheeling supports eligibility for eco-certifications, boosting farm value and opening doors to new markets focused on environmentally responsible produce.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton />
                                </div>
                            </div>

                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${agriHeight}px` }}>
                                <Image className="object-cover rounded-3xl" 
                                src={`${basePath}/images/Agriculture-Image.webp`} 
                                alt="Agriculture Industry" 
                                width={500} 
                                height={500} />
                            </div>
                        </div>
                    </div>
                    </div>
            </ section>

            {/* IPP Partners */}
            <section className='bg-paynesGray'>
                <div className='max-w-[1400px] mx-auto px-4 py-14'>
                <div className='flex flex-col-reverse md:flex-row gap-8 w-full items-center justify-center text-charcoal'>

                    <div className='flex w-full lg:w-1/2 flex-col gap-6 text-antiflashWhite'>
                        <h2>Partnering with the worlds largest low-carbon IPP</h2>
                        <p>We&apos;re proud to offer wheeling through EDF, the world&apos;s largest low-carbon Independent Power Producer (IPP) and a NERSA-registered provider in South Africa. This unique offering gives local businesses access to EDF&apos;s nearly 750 MW of renewable energy projects across South Africa.</p>
                        <div>
                            < AltGetInTouchButton />
                        </div>
                    </div>

                    <div className='flex w-full lg:w-1/2 flex-col gap-6 items-center justify-center'>
                        <Image className="h-[120px] w-auto md:h-[360px] object-cover" src={`${basePath}/images/brands/EDF-Alt.png`} width={300} height={300} alt='EDF-logo' />
                    </div>
                </div>
                </div>
              </section>

            {/* Our Process */}
            <section id="how-it-works-wheeling" className="relative w-full flex px-4 py-14 items-center justify-center">

                <div className="relative text-center max-w-[1400px] mx-auto">
                    <h2 className="text-charcoal">How it works</h2>

                    <div className='flex mx-auto w-full lg:w-1/2 justify-center items-center'>
                        < StepProcess 
                        steps={WheelingProcess}/>
                    </div>

                    <div className="mt-12 flex align-middle items-center justify-center">
                        <GetInTouchButton />
                    </div>

                </div>

            </section>

            {/* FAQ */}
            <section id="carbon-credits-faq" className="relative w-full px-4 pb-14 flex items-center justify-center">

                <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                    <h2 className="text-charcoal">Frequently asked questions</h2>
                
                    < FAQ 
                    faqItems={WheelingFAQs}/>

                </div>

            </section>

            {/* CTA */}
            <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-bottom w-full h-full py-14 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Wheeling-CTA.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto items-center justify-center">
                        
                            < CallToAction 
                            headline="LIMITLESS GREEN ENERGY,"
                            subtitle="STRAIGHT FROM THE GRID."/>

                        </div>

                    </div>
                </section>
              
          </div>
    </>
  )
}

export default Wheeling;
