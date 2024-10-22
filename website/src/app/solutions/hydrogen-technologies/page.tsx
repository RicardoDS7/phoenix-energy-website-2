'use client';
import  GetInTouchButton from '../../components/GetInTouchButton';
import AltGetInTouchButton from '../../components/AltGetInTouchButton';
import BrandsCard from '@/app/components/BrandsCard';
import Image from 'next/image';
import FAQ from '@/app/components/FAQ';
import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import StepProcess from '@/app/components/OurProcess';
import { CarbonCreditsProcess } from '@/app/constants/constants';

const HydrogenTechnologies = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
            <div className='bg-antiflashWhite'>
                <HeroSectionS2S 
                    title='Maximize Generator & Engine Efficiency With Hydrogen'
                    subtitle='A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation.'
                    imagePath={`${basePath}/images/Hydrogen-Hero-Image.png`}
                    altText='Three Wind Turbines'
                    width={1920}
                    height={1080}
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
                        <h2 className="text-antiflashWhite">Industries benefiting from Wheeled Power</h2>
                        <p className='pt-6 text-antiflashWhite'>Wheeling is an ideal solution for businesses with <span className='text-atomicTangerine'>high electricity costs</span> from energy-intensive operations, <span className='text-atomicTangerine'>limited roof space</span> for on-site solar installations, or those <span className='text-atomicTangerine'>needing additional renewable energy</span> to meet sustainability goals.</p>
                    
                        <div className='mt-8 flex flex-col w-full lg:flex-row gap-8'>
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-4 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/Green-Electric.svg`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Mining
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
                                    Manufacturing
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
                            <div className="bg-antiflashWhite p-8 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <img src={`${basePath}/icons/sustainable.png`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Data Centers
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>Data centers are energy-intensive, and wheeling provides a cost-effective solution by supplying renewable energy. Combined with on-site solar and storage, it ensures continuous operations and meets sustainability standards, helping data centers reduce costs while aligning with the eco-conscious demands of international clients.</p>
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
                        <h2 className="text-charcoal">Benefits of Wheeled Power</h2>
                    
                        <div className='py-10'>
                            <ul className='space-y-6'>
                                <li className='flex flex-col md:flex-row align-middle items-start md:items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                            <img src={`${basePath}/icons/benefits.png`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h4 >No capital investment.</h4>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                                <hr />
                                <li className='flex flex-col md:flex-row align-middle items-start md:items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                            <img src={`${basePath}/icons/compliance.png`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h4 >100% remote. No installation required.</h4>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                                <hr />

                                <li className='flex flex-col md:flex-row align-middle items-start md:items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                            <img src={`${basePath}/icons/brand-rep.png`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start gap-2'>
                                        <h4 >Up to 30% cheaper electricity</h4>
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

export default HydrogenTechnologies;
