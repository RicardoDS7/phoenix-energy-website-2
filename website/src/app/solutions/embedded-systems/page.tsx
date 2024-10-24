"use client";
import  GetInTouchButton from "../../components/GetInTouchButton";
import AltGetInTouchButton from "../../components/AltGetInTouchButton";
import BrandsCard from "@/app/components/BrandsCard";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import HeroSectionS2S from "@/app/components/HeroSectionS2S";
import StepProcess from "@/app/components/OurProcess";
import { CarbonCreditsProcess } from "@/app/constants/constants";
import { CarbonCreditsFAQs } from "@/app/constants/constants";
import FinanceOptionsButton from "@/app/components/FinanceOptionsButton";


const EmbeddedSystems = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
            <div className="bg-antiflashWhite">

                {/* Hero Section */} 
                <section className="max-w-[1400px] mx-auto px-4">
                    <HeroSectionS2S 
                        title="The Cheapest, Most Reliable Energy Solution"
                        subtitle="A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation."
                        imagePath={`${basePath}/images/Solar-Hero_Image.png`}
                        altText="Carbon Credits Coin"
                        width={2048}
                        height={2048}
                    />
                </section>

                {/* Companies buying Carbon Credits */}  
                <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
                    <div className="max-w-[1400px] mx-auto">
                          
                        <h3 className="text-paynesGray font-medium text-center">Partnering with industry leaders for quality solutions backed by experience</h3>
                        <div className="flex-col lg:flex-row mt-12">
                            <ul className="flex justify-evenly flex-wrap gap-x-4 gap-y-4">
                                <li>
                                    <div className="flex items-center justify-center bg-white shadow-none rounded-full h-[150px] w-[150px] p-4">
                                        <Image
                                        src = {"/images/brands/solar-supply-logo.png"}
                                        alt= {"nedbank-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow-none rounded-full h-[150px] w-[150px] p-4">
                                        <Image
                                        src = {"/images/brands/daisy-logo.png"}
                                        alt= {"nedbank-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow-none rounded-full h-[150px] w-[150px] p-4">
                                        <Image
                                        src = {"/images/brands/edf-logo.png"}
                                        alt= {"nedbank-logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>


                                <li>
                                    <div className="flex items-center justify-center bg-white shadow-none rounded-full h-[150px] w-[150px] p-4">
                                        <Image
                                        src = {"/images/brands/standard-bank-logo.png"}
                                        alt= {"standard bank logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow-none rounded-full h-[150px] w-[150px] p-4">
                                        <Image
                                        src = {"/images/brands/captive-power-logo.png"}
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

                {/* Earn Carbon Credits For Your Business */}
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
                    
                        <p className="text-charcoal text-center mt-12 text-xl">
                        Whether you&apos;re looking for seamless grid integration, reliable battery storage, or backup power with generator integration, we&apos;ve got you covered.
                        </p>

                        {/*Grid Tied */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Solar.svg`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Grid-Tied Solar Systems
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Energy Independence & Security</p>
                                                    <p className="">Battery Storage Systems ensure energy independence by storing excess power, providing reliable backup during outages, and reducing reliance on the grid for enhanced energy security.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Maximizes Solar Penetration</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Peak Shaving</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <FinanceOptionsButton 
                                    sectionID="solar-finance-options"/>
                                    <AltGetInTouchButton />
                                </div>

                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/Solar-Hero.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>

                        {/*Battery Systems */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Battery-2.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Battery Energy Storage Systems
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Energy Independence & Security</p>
                                                    <p className="">Battery Storage Systems ensure energy independence by storing excess power, providing reliable backup during outages, and reducing reliance on the grid for enhanced energy security.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Maximizes Solar Penetration</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Peak Shaving</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <FinanceOptionsButton 
                                    sectionID="solar-finance-options"/>
                                    <AltGetInTouchButton />
                                </div>

                            </div>

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/Battery-Storage.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>

                        {/*Solar-Gen Integration */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Integration.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Solar-Generator Integration
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Energy Independence & Security</p>
                                                    <p className="">Battery Storage Systems ensure energy independence by storing excess power, providing reliable backup during outages, and reducing reliance on the grid for enhanced energy security.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Maximizes Solar Penetration</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <img className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Peak Shaving</p>
                                                    <p className=""> Battery storage provides a consistent power supply during grid outages or renewable energy dips, ensuring uninterrupted operations</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <FinanceOptionsButton 
                                    sectionID="solar-finance-options"/>
                                    <AltGetInTouchButton />
                                </div>

                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/Solar-Generator.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>
                    
                    </div>
                </ section>


                {/*Why is matters for your business? */}
                <section id="carbon-credits-eco-system" className="py-14 px-4">

                    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:gap-12 space-y-12">
                        <div className="relative text-start lg:w-2/3">
                            <h2 className="text-charcoal">Why it matters for your business</h2>
                        
                            <div className="py-10">
                                <ul className="space-y-6">
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <img src={`${basePath}/icons/benefits.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Financial Incentives and Cost Savings</h4>
                                            <p className="text-xl">Businesses can sell carbon credits to offset emissions, generating revenue while reducing operational costs and boosting profits.</p>
                                        </div>
                                    </li>

                                    <hr />
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                                <img src={`${basePath}/icons/compliance.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Regulatory Compliance</h4>
                                            <p className="text-xl">Carbon credits offset the Carbon Tax under the South African Carbon Tax Act of 2019, which is set to rise to R462 per ton of CO₂ by 2030.</p>
                                        </div>
                                    </li>

                                    <hr />

                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <img src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Strengthen Brand Reputation and Competitiveness</h4>
                                            <p className="text-xl">Earning carbon credits strengthens your brand&apos;s sustainability reputation, attracting eco-conscious investors and giving you a competitive edge.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start">
                                <GetInTouchButton />
                            </div>

                        </div>

                        <div className="flex rounded-3xl h-[560px] lg:w-1/3">
                            <Image className="rounded-3xl object-cover h-full w-full transform -scale-x-100" src={`${basePath}/images/home_page_banner.png`} alt="why carbon credits matter" width={360} height={640} />
                        </div>
                    </div>
                </section>

                {/* Earn Carbon Credits For Your Business */}
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
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Green-Electric.svg`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Purchase Power Agreement (PPA)
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>
                                    Earn carbon credits by integrating renewable energy sources like solar and wheeling into your business operations. For example, installing solar panels on your premises reduces reliance on fossil fuels, lowers carbon emissions, and generates valuable carbon credits for every ton of CO₂ saved.
                                    </p>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Efficiency.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Cash Purchase
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>
                                    Improve your energy efficiency and earn carbon credits by upgrading lighting systems, optimizing HVAC, or adopting energy-efficient equipment. By cutting energy use, your business reduces its carbon footprint, with each kilowatt-hour saved resulting in significant emissions reductions and valuable carbon credits.
                                    </p>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Loan Purchase
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>
                                    Support certified sustainability projects like carbon sequestration, reforestation, or sustainable agriculture to earn carbon credits. These initiatives capture carbon, reduce emissions, and offset your business&apos;s footprint while promoting environmental protection and benefiting global communities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="mt-6 flex align-middle items-center justify-center">
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>


                {/* Our Process */}
                <section id="how-it-works-carbon-credits" className="relative w-full flex px-4 py-14 items-center justify-center">

                    <div className="relative text-center max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal">How it works</h2>

                        < StepProcess 
                        steps={CarbonCreditsProcess}/>
                    
                        <div className="mt-12 flex align-middle items-center justify-center">
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>

                {/* FAQ */}
                <section id="carbon-credits-faq" className="relative w-full pb-14 px-4 flex items-center justify-center">

                    <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal">Frequently asked questions</h2>
                       
                        < FAQ 
                        faqItems={CarbonCreditsFAQs}/>

                    </div>

                </section>
            </div>
    )
}

export default EmbeddedSystems;
