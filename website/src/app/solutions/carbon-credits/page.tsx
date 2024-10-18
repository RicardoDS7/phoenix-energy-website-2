'use client';
import  GetInTouchButton from '../../components/GetInTouchButton';
import AltGetInTouchButton from '../../components/AltGetInTouchButton';
import BrandsCard from '@/app/components/BrandsCard';
import Image from 'next/image';
import FAQ from '@/app/components/FAQ';
import HeroSectionS2S from '@/app/components/HeroSectionS2S';

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
                <section className="relative w-full flex flex-col gap-8 py-10 items-center justify-center px-4 lg:px-12 xl:px-48">

                        {/* Companies buying Carbon Credits */}    
                    <h2 className="text-paynesGray text-4xl font-medium">Leading companies are investing in carbon credits</h2>
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
                                                                lg:py-10 lg:px-48 
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl text-antiflashWhite font-inter md:text-5xl lg:text-6xl font-bold">Earn carbon credits for your business</h2>
                    
                        <div className='mt-8 flex flex-col md:flex-row gap-8'>
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/green-electric.svg`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="text-5xl font-inter font-bold text-paynesGray whitespace-pre-wrap">
                                    <span className='block'>Implement</span>
                                    <span  className='block'>Renewable</span>
                                    <span  className='block'>Energy</span>
                                </h3>
                                <p className="font-inter text-lg text-charcoal">
                                Solar Power Installations
                                Equip your business with solar panels to harness clean, renewable energy, significantly reducing electricity costs and CO₂ emissions.

                                Wind Turbines
                                Install wind turbines on-site or invest in off-site wind farms to generate green energy and cut back on fossil fuel dependency.

                                Geothermal Energy Systems
                                Use geothermal heat pumps to provide sustainable heating and cooling solutions for your buildings, reducing energy use and emissions.
                                </p>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/green-electric.svg`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="text-5xl font-inter font-bold text-paynesGray whitespace-pre-wrap">
                                    <span className='block'>Boost</span>
                                    <span  className='block'>Energy</span>
                                    <span  className='block'>Efficiency</span>
                                </h3>
                                <p className="font-inter text-lg text-charcoal">
                                Solar Power Installations
                                Equip your business with solar panels to harness clean, renewable energy, significantly reducing electricity costs and CO₂ emissions.

                                Wind Turbines
                                Install wind turbines on-site or invest in off-site wind farms to generate green energy and cut back on fossil fuel dependency.

                                Geothermal Energy Systems
                                Use geothermal heat pumps to provide sustainable heating and cooling solutions for your buildings, reducing energy use and emissions.
                                </p>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/green-electric.svg`} alt='icon' width={25} height={25} />
                                </div>
                                <h3 className="text-5xl font-inter font-bold text-paynesGray whitespace-pre-wrap">
                                    <span className='block'>Support</span>
                                    <span  className='block'>Sustainable</span>
                                    <span  className='block'>Projects</span>
                                </h3>
                                <p className="font-inter text-lg text-charcoal">
                                Solar Power Installations
                                Equip your business with solar panels to harness clean, renewable energy, significantly reducing electricity costs and CO₂ emissions.

                                Wind Turbines
                                Install wind turbines on-site or invest in off-site wind farms to generate green energy and cut back on fossil fuel dependency.

                                Geothermal Energy Systems
                                Use geothermal heat pumps to provide sustainable heating and cooling solutions for your buildings, reducing energy use and emissions.
                                </p>
                            </div>
                        </div>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>


                {/* How to earn Carbon Credits? */}
                <section id='carbon-credits-eco-system' className="flex flex-row items-center justify-center gap-16 py-10 xl:px-48">

                    <div className="relative z-10 text-start">
                        <h2 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">Why it matters for your business</h2>
                    
                        <div className='py-10'>
                            <ul className='space-y-10'>
                                <li className='flex flex-row align-middle items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                            <Image src={`${basePath}/icons/green-electric.svg`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='text-2xl font-bold'>Create a New Revenue Stream</p>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                                <hr />
                                <li className='flex flex-row align-middle items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                            <Image src={`${basePath}/icons/green-electric.svg`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='text-2xl font-bold'>Create a New Revenue Stream</p>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                                <hr />

                                <li className='flex flex-row align-middle items-center gap-6'>
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                            <Image src={`${basePath}/icons/green-electric.svg`} alt='icon' width={25} height={25} />
                                    </div>
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='text-2xl font-bold'>Create a New Revenue Stream</p>
                                        <p className='text-xl'>Sell the carbon credits you earn to other businesses looking to offset their emissions.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className='mt-6 flex align-middle items-start justify-start'>
                            <GetInTouchButton />
                        </div>

                    </div>

                    <div className='rounded-3xl'>
                        <Image className='rounded-3xl object-cover' src={`${basePath}/images/banner_home_page.png`} alt="why carbon credits matter" width={540} height={800} />
                    </div>

                </section>


                {/* How to earn Carbon Credits? */}
                <section id='how-it-works-carbon-credits' className="relative w-full p-14 flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h2 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">Register your project</h2>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>

                {/* FAQ */}
                <section id='carbon-credits-faq' className="relative w-full p-14 flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h2 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">Frequently asked questions</h2>
                       
                        < FAQ />

                    </div>

                </section>
            </div>
    )
}

export default CarbonCredits;
