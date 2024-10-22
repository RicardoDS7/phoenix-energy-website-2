'use client';
import  GetInTouchButton from '../../components/GetInTouchButton';
import AltGetInTouchButton from '../../components/AltGetInTouchButton';
import BrandsCard from '@/app/components/BrandsCard';
import Image from 'next/image';
import FAQ from '@/app/components/FAQ';
import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import StepProcess from '@/app/components/OurProcess';
import { CarbonCreditsProcess } from '@/app/constants/constants';

const CarbonCredits = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
            <div className='bg-antiflashWhite'>
                <HeroSectionS2S 
                    title='Sustainable Revenue From Carbon Credits'
                    subtitle='A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation.'
                    imagePath={`${basePath}/images/Carbon-Credits-Hero.png`}
                    altText='Carbon Credits Coin'
                    width={2048}
                    height={2048}
                />
                {/* What Are carbon Credits? */}
                <section className="relative w-full flex flex-col gap-8 py-10 items-center justify-center px-6 lg:px-12 xl:px-48">

                        {/* Companies buying Carbon Credits */}    
                    <h3 className="text-paynesGray font-medium text-center">Leading companies are investing in carbon credits</h3>
                    <div className='flex-col lg:flex-row'>
                        <ul className='flex justify-evenly flex-wrap gap-x-4 gap-y-4'>
                            <li>
                                <BrandsCard
                                logoPath = '/images/brands/nedbank-logo.png'
                                altText = 'nedbank-logo'   // Alt text for the logo
                                />
                            </li>

                            <li>
                                <BrandsCard
                                logoPath = '/images/brands/sasol-logo.png'
                                altText = 'sasol-logo'   // Alt text for the logo
                                />
                            </li>

                            <li>
                                <BrandsCard
                                logoPath = '/images/brands/vw-logo.png'
                                altText = 'volkswagen-logo'   // Alt text for the logo
                                />
                            </li>

                            <li>
                                <BrandsCard
                                logoPath = '/images/brands/anglo-american-logo.png'
                                altText = 'anglo-american-logo'   // Alt text for the logo
                                />
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Who is Elibible for Carbon Credits? */}
                <section id='carbon-credits-eligibility' className="relative 
                                                                bg-paynesGray 
                                                                w-full
                                                                p-6 xl:px-48 
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="text-center">
                        <h2 className="text-antiflashWhite">Earn carbon credits for your business</h2>
                    
                        <div className='mt-8 flex flex-col w-full lg:flex-row gap-8'>
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-4 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Green-Electric.svg`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Implement Renewable Energy
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <ul className='list-disc px-5'>
                                        <li className='mb-2'>
                                            Install embedded solar systems to reduce grid dependence and improve energy security.
                                        </li>

                                        <li className='mb-2'>
                                            Integrate hydrogen fuel cells for backup or primary power in critical operations.
                                        </li>

                                        <li className='mb-2'>
                                            Explore wheeled power solutions for areas with limited infrastructure
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-4 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Efficiency.png`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Boost Energy Efficiecny
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <ul className='list-disc px-5'>
                                        <li className='mb-2'>
                                            Install embedded solar systems to reduce grid dependence and improve energy security.
                                        </li>

                                        <li className='mb-2'>
                                            Integrate hydrogen fuel cells for backup or primary power in critical operations.
                                        </li>

                                        <li className='mb-2'>
                                            Explore wheeled power solutions for areas with limited infrastructure
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-4 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/sustainable.png`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Support Sustainable Projects
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <ul className='list-disc px-5'>
                                        <li className='mb-2'>
                                            Install embedded solar systems to reduce grid dependence and improve energy security.
                                        </li>

                                        <li className='mb-2'>
                                            Integrate hydrogen fuel cells for backup or primary power in critical operations.
                                        </li>

                                        <li className='mb-2'>
                                            Explore wheeled power solutions for areas with limited infrastructure
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>


                {/*Why is matters for your business? */}
                <section id='carbon-credits-eco-system' className="flex flex-col lg:flex-row items-center justify-center px-6 gap-16 py-10 xl:px-48">

                    <div className="relative text-start">
                        <h2 className="text-charcoal">Why it matters for your business</h2>
                    
                        <div className='py-10'>
                            <ul className='space-y-6'>
                                <li className='flex flex-col md:flex-row align-middle items-start md:items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                            <img src={`${basePath}/icons/benefits.png`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h4 >Financial Incentives and Cost Savings</h4>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                                <hr />
                                <li className='flex flex-col md:flex-row align-middle items-start md:items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                            <img src={`${basePath}/icons/compliance.png`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h4 >Regulatory Compliance and Market Access</h4>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                                <hr />

                                <li className='flex flex-col md:flex-row align-middle items-start md:items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                            <img src={`${basePath}/icons/brand-rep.png`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h4 >Strengthen Brand Reputation and Competitiveness</h4>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className='mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start'>
                            <GetInTouchButton />
                        </div>

                    </div>

                    <div className='flex rounded-3xl h-full lg:h-[512px] w- lg:w-1/3'>
                        <Image className='rounded-3xl object-cover h-full w-full transform -scale-x-100' src={`${basePath}/images/home_page_banner.png`} alt="why carbon credits matter" width={360} height={640} />
                    </div>

                </section>


                {/* Our Process */}
                <section id='how-it-works-carbon-credits' className="relative w-full flex p-6 items-center justify-center">

                    <div className="relative text-center">
                        <h2 className="text-charcoal">How it works</h2>

                        < StepProcess 
                        steps={CarbonCreditsProcess}/>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>

                {/* FAQ */}
                <section id='carbon-credits-faq' className="relative w-full p-6 flex items-center justify-center">

                    <div className="text-xl relative text-center md:w-[600px] lg:w-[800px]">
                        <h2 className="text-charcoal">Frequently asked questions</h2>
                       
                        < FAQ />

                    </div>

                </section>
            </div>
    )
}

export default CarbonCredits;
