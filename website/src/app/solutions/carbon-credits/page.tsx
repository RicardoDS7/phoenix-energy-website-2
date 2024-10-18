'use client';
import  HeroSection from '../../components/HeroSection';
import  GetInTouchButton from '../../components/GetInTouchButton';
import AltGetInTouchButton from '../../components/AltGetInTouchButton';
import BrandsCard from '@/app/components/BrandsCard';
import Image from 'next/image';
import FAQ from '@/app/components/FAQ';

const CarbonCredits = () => {

    return (
            <div>
                <HeroSection 
                    title='Carbon Credits'
                    subtitle='Earn more with Carbon Credits'
                />
                <div className='flex items-center justify-center h-[1/3vh] -mt-6'>
                    <Image src={"/images/Carbon-Credits-Hero.png"} alt='Carbon Credits Coin' width={512} height={512} />
                </div>
                {/* What Are carbon Credits? */}
                <section className="h-[1/3vh] -mt-16 relative w-full flex items-center justify-center">

                    <div className='flex flex-col py-10 lg:flex-row gap-8 items-center justify-center overflow-hidden w-[80%]'>
                        <div className="relative z-10 text-start w-full lg:w-1/2">
                            <h2 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">What are Carbon Credits?</h2>
                            <p className='text-lg text-charcoal text-start font-inter'>
                                A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation.
                            </p>

                        </div>

                        {/* Companies buying Carbon Credits */}
                        <div className="relative z-10 text-center w-full lg:w-1/2">
                            <h3 className="text-4xl text-paynesGray font-inter md:text-3xl lg:text-3xl font-semibold">Major companies buying Carbon Credits</h3>

                            <div className='flex-col md:flex-row'>
                                <ul className='flex justify-evenly'>
                                    <li>
                                        <BrandsCard
                                        logoPath = '/images/brands/nedbank-logo.png'
                                        altText = 'nedbank-logo'   // Alt text for the logo
                                        link= '#'
                                        />
                                    </li>

                                    <li>
                                        <BrandsCard
                                        logoPath = '/images/brands/sasol-logo.png'
                                        altText = 'sasol-logo'   // Alt text for the logo
                                        link= '#'
                                        />
                                    </li>

                                    <li>
                                        <BrandsCard
                                        logoPath = '/images/brands/vw-logo.png'
                                        altText = 'volkswagen-logo'   // Alt text for the logo
                                        link= '#'
                                        />
                                    </li>

                                    <li>
                                        <BrandsCard
                                        logoPath = '/images/brands/anglo-american-logo.png'
                                        altText = 'anglo-american-logo'   // Alt text for the logo
                                        link= '#'
                                        />
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </section>

                {/* Who is Elibible for Carbon Credits? */}
                <section id='carbon-credits-eligibility' className="relative bg-paynesGray w-full p-14 flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h2 className="text-3xl text-antiflashWhite font-inter md:text-5xl lg:text-6xl font-bold">Earn carbon credits for your business</h2>
                    
                        <div className='mt-8 flex flex-col md:flex-row gap-8 px-24'>
                            
                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src="/icons/green-electric.svg" alt='icon' width={25} height={25} />
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
                                    <Image src="/icons/green-electric.svg" alt='icon' width={25} height={25} />
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
                                    <Image src="/icons/green-electric.svg" alt='icon' width={25} height={25} />
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
                <section id='carbon-credits-eco-system' className="relative w-full p-14 flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h2 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">Carbon Credits Ecosystem</h2>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>

                {/* How to earn Carbon Credits? */}
                <section className="relative w-full p-14 bg-antiflashWhite flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h2 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">How can I earn Carbon Credits?</h2>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

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
