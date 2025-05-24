"use client";
import  GetInTouchButton from "../../components/GetInTouchButton";
import AltGetInTouchButton from "../../components/AltGetInTouchButton";
import Image from "next/image";
import FAQ from "@/app/components/FAQ";
import HeroSectionS2S from "@/app/components/HeroSectionS2S";
import StepProcess from "@/app/components/OurProcess";
import { CarbonCreditsProcess } from "@/app/constants/constants";
import { CarbonCreditsFAQs } from "@/app/constants/constants";
import CallToAction from "@/app/components/CallToAction";
import Meta from "@/app/components/Meta";

const CarbonCredits = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
        <>
            <Meta
            title="Earn Sustainable Revenue With Carbon Credits"
            description="Businesses can earn and sell carbon credits to offset emissions, generating revenue while reducing operational costs and boosting profits."
            />

            <div className="bg-antiflashWhite">

                {/* Hero Section */} 
                <section className="max-w-[1400px] mx-auto px-4">
                    <HeroSectionS2S 
                        title="Sustainable Revenue From Carbon Credits"
                        subtitle="A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation."
                        imagePath={`${basePath}/images/Carbon-Credits-Hero.webp`}
                        altText="Carbon Credits Coin"
                        width={1024}
                        height={1024}
                        sectionID="how-it-works-carbon-credits"
                        howItWorksActive={true}
                    />
                </section>

                {/* Partners Logos */}  
                <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
                    <div className="max-w-[1400px] mx-auto">
                          
                        <h3 className="text-paynesGray font-medium text-center">Leading companies are investing in carbon credits</h3>
                        <div className="flex-col lg:flex-row mt-12">
                            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/vw-logo.png`}
                                        alt= {"vw-logo"}   // Alt text for the logo
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
                                        src = {`${basePath}/images/brands/nedbank-logo.png`}
                                        alt= {"nedbank logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/anglo-american-logo.png`}
                                        alt= {"anglo american logo"}   // Alt text for the logo
                                        width={150}
                                        height={150}
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                        <Image
                                        src = {`${basePath}/images/brands/sasol-logo.png`}
                                        alt= {"sasol-logo"}   // Alt text for the logo
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
                <section id="earn-carbon-credits" className="relative 
                                                                bg-paynesGray 
                                                                w-full
                                                                py-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-antiflashWhite text-center">Earn carbon credits for your business</h2>
                    
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Green-Electric.svg`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Implement Renewable Energy
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
                                    <Image src={`${basePath}/icons/Efficiency.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Boost Energy Efficiency
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
                                    <Image src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Support Sustainable Projects
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


                {/*Why is matters for your business? */}
                <section id="why-carbon-credits-matters" className="py-14 px-4">

                    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:gap-12 space-y-12">
                        <div className="relative text-start lg:w-2/3">
                            <h2 className="text-charcoal">Why it matters for your business</h2>
                        
                            <div className="py-10 text-charcoal">
                                <ul className="space-y-6">
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/benefits.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Financial Incentives and Cost Savings</h4>
                                            <p className="">Businesses can sell carbon credits to offset emissions, generating revenue while reducing operational costs and boosting profits.</p>
                                        </div>
                                    </li>

                                    <hr />
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                                <Image src={`${basePath}/icons/compliance.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Regulatory Compliance</h4>
                                            <p className="">Carbon credits offset the Carbon Tax under the South African Carbon Tax Act of 2019, which is set to rise to R462 per ton of CO₂ by 2030.</p>
                                        </div>
                                    </li>

                                    <hr />

                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Strengthen Brand Reputation and Competitiveness</h4>
                                            <p className="">Earning carbon credits strengthens your brand&apos;s sustainability reputation, attracting eco-conscious investors and giving you a competitive edge.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start">
                                <GetInTouchButton />
                            </div>

                        </div>

                        <div className="hidden lg:block flex rounded-3xl h-[560px] lg:w-1/3">
                            <Image className="rounded-3xl object-cover h-full w-full transform -scale-x-100" src={`${basePath}/images/home_page_banner.webp`} alt="why carbon credits matter" width={360} height={640} />
                        </div>
                    </div>
                </section>

                {/* Credible Credits & Partners */}
                <section id="carbon-credits-verra" className="relative 
                                                                bg-paynesGray 
                                                                w-full
                                                                py-14
                                                                px-4 xl:px-48 
                                                                flex 
                                                                items-center 
                                                                justify-center">

                        
                        <div className="mx-auto max-w-[1400px] flex flex-col-reverse w-full lg:flex-row gap-8">
                            <div className="text-start lg:w-1/2">
                                <h2 className="text-antiflashWhite">Achieve global recognition with Verra-verified carbon credits</h2>
                                <p className="text-antiflashWhite py-6">
                                We register your carbon credits under Verra, the world&apos;s top certification standard, with third-party validation from a Verra-accredited auditor to ensure unmatched credibility.
                                </p>

                                <button 
                                    type="button" 
                                    onClick={() => window.open("https://www.verra.org","_blank")}
                                    className="get-in-touch-button-alt px-4 py-2 rounded-full hidden lg:block">
                                    Learn more about Verra
                                </button>

                            </div>

                            <div className="flex bg-antiflashWhite rounded-3xl px-4 lg:w-1/2 items-center justify-center shadow">
                                <Image src={`${basePath}/images/brands/Verra.png`} alt="Vera Carbon Credits" width={640} height={240} />
                            </div>
                            
                        </div>
                </ section>


                {/* Our Process */}
                <section id="how-it-works-carbon-credits" className="relative w-full flex px-4 py-14 items-center justify-center">

                    <div className="relative text-center max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal">How it works</h2>

                        <div className='flex mx-auto w-full lg:w-1/2 justify-center items-center'>
                            < StepProcess 
                            steps={CarbonCreditsProcess}/>
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
                        faqItems={CarbonCreditsFAQs}/>

                    </div>

                </section>

                {/* CTA */}
                <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-bottom w-full h-full py-14 items-center justify-center"
                        style={{
                            backgroundImage: `url(${basePath}/images/Carbon-Credits-CTA.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="GET REWARDED FOR GOING GREEN."
                            subtitle=""/>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default CarbonCredits;
