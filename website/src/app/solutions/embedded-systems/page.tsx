"use client";
import  GetInTouchButton from "../../components/GetInTouchButton";
import AltGetInTouchButton from "../../components/AltGetInTouchButton";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import HeroSectionS2S from "@/app/components/HeroSectionS2S";
import StepProcess from "@/app/components/OurProcess";
import { SolarProcess } from "@/app/constants/constants";
import { SolarFAQs } from "@/app/constants/constants";
import FinanceOptionsButton from "@/app/components/FinanceOptionsButton";
import Carousel from "@/app/components/SuccessStoriesCarousel";
import { projectDetails } from "@/app/projects/projectConstants";
import CallToAction from "@/app/components/CallToAction";
import React, { useRef, useEffect, useState } from 'react';
import Meta from "@/app/components/Meta";

const EmbeddedSystems = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    // Separate refs and heights for each section
    const gridTiedRef = useRef<HTMLDivElement>(null);
    const [gridTiedHeight, setgridTiedHeight] = useState(0);

    const bessRef = useRef<HTMLDivElement>(null);
    const [bessHeight, setBessHeight] = useState(0);

    const solarGenRef = useRef<HTMLDivElement>(null);
    const [solarGenHeight, setSolarGenHeight] = useState(0);

    const pumpRef = useRef<HTMLDivElement>(null);
    const [pumpHeight, setPumpHeight] = useState(0);

    useEffect(() => {
        if (gridTiedRef.current) {
            setgridTiedHeight(gridTiedRef.current.clientHeight);
        }
        if (bessRef.current) {
            setBessHeight(bessRef.current.clientHeight);
        }
        if (solarGenRef.current) {
            setSolarGenHeight(solarGenRef.current.clientHeight);
        }
        if (pumpRef.current) {
            setPumpHeight(pumpRef.current.clientHeight);
        }
    }, []);

    return (
        <>
            <Meta
            title="Solar Energy - The Cheapest, Most Reliable Energy Solution"
            description="Our turnkey embedded solar solutions deliver the flexibility, efficiency, and reliability your business needs, from custom design to goal-oriented financing."
            />
            <div className="bg-antiflashWhite">

                {/* Hero Section */} 
                <section className="max-w-[1400px] mx-auto px-4">
                    <HeroSectionS2S 
                        title="The Cheapest, Most Reliable Energy Solution"
                        subtitle="Our turnkey embedded solar solutions deliver the flexibility, efficiency, and reliability your business needs, from custom design to goal-oriented financing."
                        imagePath={`${basePath}/images/Solar-Hero_Image.webp`}
                        altText="Carbon Credits Coin"
                        width={1024}
                        height={1024}
                        sectionID='how-it-works-solar'
                        howItWorksActive={true}
                    />
                </section>

                {/* Partners Logos */}  
                <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
                    <div className="max-w-[1400px] mx-auto">
                          
                        <h3 className="text-paynesGray font-medium text-center">Partnering with industry leaders for quality solutions backed by experience</h3>
                        <div className="flex-col lg:flex-row mt-12">
                            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/creovision-logo.png`}
                                        alt= {"creovision-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/WEG-logo.png`}
                                        alt= {"WEG logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                

                                {/* <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/edf-logo.png`}
                                        alt= {"edf-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li> */}


                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/standard-bank-logo.png`}
                                        alt= {"standard bank logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/captive-power-logo.png`}
                                        alt= {"captive power logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Solar Solutions + Benefits */}
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
                        <h2 className="text-charcoal text-center">Versatile solar solutions tailored to your needs</h2>
                    
                        <p className="text-charcoal text-center mt-6">
                        Whether you&apos;re looking for seamless grid integration, reliable battery storage, or backup power with generator integration, we&apos;ve got you covered.
                        </p>

                        <div className="mt-12 flex flex-col gap-8">
                        {/*Grid Tied */}
                        <div className="flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div 
                            ref={gridTiedRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Solar.svg`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Grid-Tied Solar Systems
                                </h3>
                                <p className="text-antiflashWhite">A grid-tied solar system connects directly to the electrical grid, allowing solar power to supplement your energy needs while drawing from the grid when necessary. Excess energy generated is fed back into the grid, often providing credits or reduced costs through net metering.</p>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Cost Savings</p>
                                                    <p className="">Reduces monthly electricity costs by offsetting grid usage.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Grid Backup</p>
                                                    <p className="">Ensures a reliable power supply when solar output is low.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Net Metering</p>
                                                    <p className="">Earn credits for excess energy sent back to the grid, further lowering bills.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <FinanceOptionsButton 
                                    sectionID="solar-finance-options"/>
                                </div>

                            </div>

                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${gridTiedHeight}px` }}>
                                <Image 
                                    src={`${basePath}/images/Solar-Hero.webp`}
                                    alt="Solar Panels" 
                                    width={500} 
                                    height={500} 
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>

                        {/*Battery Systems */}
                        <div className="flex flex-col w-full lg:flex-row gap-8">
                        
                            <div 
                            ref={bessRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Battery-2.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Battery Energy Storage Systems
                                </h3>
                                <p className="text-antiflashWhite">This setup stores solar energy in batteries for use when sunlight is limited or during peak demand periods. The stored energy enhances energy independence and supports power during grid outages.</p>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Energy Independence</p>
                                                    <p className="">Reduces reliance on the grid and supports energy needs during outages.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Maximises Solar Penetration</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Peak Demand Savings</p>
                                                    <p className="">Uses stored power during high-rate periods, lowering energy costs.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <FinanceOptionsButton 
                                    sectionID="solar-finance-options"/>
                                </div>

                            </div>

                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${bessHeight}px` }}>
                                <Image 
                                    src={`${basePath}/images/Battery-Storage.webp`}
                                    alt="Battery storage for solar power" 
                                    width={500} 
                                    height={500} 
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>

                        {/*Solar-Gen Integration */}
                        <div className="flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div 
                            ref={solarGenRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Integration.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Solar-Generator Integration
                                </h3>
                                <p className="text-antiflashWhite">This hybrid solution allows solar power to supplement a continuously running generator, reducing the generator’s load and fuel consumption. Solar energy offsets part of the generator’s demand, improving overall efficiency and providing added energy security from two sources.</p>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Enhanced Energy Security</p>
                                                    <p className=""> Combines solar and generator power for reliable, continuous back-up energy.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Reduced Fuel Consumption</p>
                                                    <p className="">Solar reduces the generator’s fuel load, lowering operational costs.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Improved Efficiency</p>
                                                    <p className="">Solar lessens strain on the generator, extending its lifespan and optimising performance.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <FinanceOptionsButton 
                                    sectionID="solar-finance-options"/>
                                </div>

                            </div>

                            <div className="hidden lg:flex rounded-3xl shadow-md w-full lg:w-1/3"
                            style={{ height: `${solarGenHeight}px` }}>
                                <Image 
                                    src={`${basePath}/images/Solar-Generator.webp`}
                                    alt="Solar Generator Integration" 
                                    width={500} 
                                    height={500} 
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>

                        {/*Solar Pumps */}
                        <div className="flex flex-col w-full lg:flex-row gap-8">
                        
                            <div 
                            ref={pumpRef}
                            className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/pump.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Solar Pumps
                                </h3>
                                <p className="text-antiflashWhite">Solar pumps offer a sustainable, efficient way to meet diverse water pumping needs across agricultural, industrial, and domestic applications. Designed to operate independently of the grid, these pumps are ideal for remote and off-grid locations, drastically reducing energy costs while ensuring reliable water supply. We offer a range of durable and cost-effective options, including <span className="text-atomicTangerine">submersible solar pumps</span>, <span className="text-atomicTangerine">surface solar pumps</span>, and <span className="text-atomicTangerine">DC/AC hybrid solar pumps</span>.</p>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Cost Savings</p>
                                                    <p className="">Significantly lowers electricity costs by eliminating reliance on costly grid power.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Longer Lifespan</p>
                                                    <p className="">Solar pumps are more durable and require less maintenance than conventional pumps.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Suitable For Remote Locations</p>
                                                    <p className="">Dependable water supply, even in off-grid and reomte areas.</p>
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
                            style={{ height: `${pumpHeight}px` }}>
                                <Image 
                                    src={`${basePath}/images/solar-pump.webp`}
                                    alt="Solar Pump for Farms" 
                                    width={500} 
                                    height={500} 
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                </ section>


                {/*Business Case Studies */}
                <section id="solar-success-stories" className="pb-14 px-4">
                    <div className="block overflow-hidden">
                    
                        <Carousel 
                        projects={projectDetails}/>
                        <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start max-w-[1400px] mx-auto">
                            <GetInTouchButton />
                        </div>

                    </div>                        
                </section>

                {/* Solar Finance Options */}
                <section id="solar-finance-options" className="relative 
                                                                bg-paynesGray 
                                                                w-full
                                                                py-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-antiflashWhite text-center">Flexible finance options</h2>
                    
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                            
                            {/*Purchase Power Agreement */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/PPA.png`} alt="ppa-icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Purchase Power Agreement (PPA)
                                </h3>
                                <div className="font-inter text-lg text-charcoal space-y-6">
                                    <p>
                                        With our PPA option, we install and maintain the solar system on your property at no upfront cost. Your business pays only for the electricity the system generates, typically at a lower rate than traditional grid power. We handle all maintenance, ensuring reliable performance and long-term savings without added responsibility.
                                    </p>

                                    <p className="font-bold text-2xl">Benefits:</p>
                                    
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">No Upfront Cost</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Predictable Energy Costs</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Hassle-Free Maintenance</p>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>

                            {/* Cash Purchase */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-6">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Cash-Purchase.png`} alt="cash-purchase-icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Outright Purchase
                                </h3>
                                <div className="font-inter text-lg text-charcoal space-y-6">
                                    <p>
                                    Your business fully owns the solar system from day one. Purchasing outright provides maximum savings on energy costs, qualifies you for all tax incentives, and enables a quick return on investment. This approach grants you complete control over your energy production and secures long-term financial benefits.
                                    </p>

                                    <p className="font-bold text-2xl">Benefits:</p>
                                    
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Maximum Savings & ROI</p>
                                
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Full Ownership</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Section 12B Tax benefit</p>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>

                            {/*Load Purchase */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Loan-Purchase.png`} alt="loan-purchase-icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Fixed-Term Lease
                                </h3>
                                <div className="font-inter text-lg text-charcoal space-y-6">
                                    <p>
                                        This option allows your business to finance the solar system through affordable fixed payments over time while still gaining the benefits of system ownership. This approach lets you start saving on energy costs immediately, while gradually paying off the system.
                                    </p>

                                    <p className="font-bold text-2xl">Benefits:</p>
                                    
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Flexible Payments</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Ownership Benefits</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Immediate Savings</p>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    
                        <div className="mt-6 flex align-middle items-center justify-center">
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>


                {/* Our Process */}
                <section id="how-it-works-solar" className="relative w-full flex px-4 py-14 items-center justify-center">

                    <div className="relative text-center max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal">How it works</h2>

                        <div className='flex mx-auto w-full lg:w-1/2 justify-center items-center'>
                            < StepProcess 
                            steps={SolarProcess}/>
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
                        faqItems={SolarFAQs}/>

                    </div>

                </section>

                {/* CTA */}
                <section id="solar-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-bottom w-full h-full py-14 items-center justify-center"
                        style={{
                            backgroundImage: `url(${basePath}/images/Solar-CTA.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="POWERING TOMORROW, SAVING TODAY."
                            subtitle="SWITCH TO SOLAR."/>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default EmbeddedSystems;
