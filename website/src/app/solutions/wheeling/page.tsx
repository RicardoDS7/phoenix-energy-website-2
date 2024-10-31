'use client';

import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import CallToAction from '@/app/components/CallToAction';
import FAQ from '@/app/components/FAQ';
import { WheelingProcess, WheelingFAQs } from '@/app/constants/constants';
import GetInTouchButton from '@/app/components/GetInTouchButton';
import StepProcess from '@/app/components/OurProcess';
import Image from 'next/image';
import AltGetInTouchButton from '@/app/components/AltGetInTouchButton';
import BrandsCard from '@/app/components/BrandsCard';
import OptimizedVideo from '@/app/components/Video';

const Wheeling = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
          <div className='bg-antiflashWhite'>

              {/* Hero Section */} 
              <section className='max-w-[1400px] mx-auto px-4'>
                  <HeroSectionS2S 
                      title='Cheaper, Greener, Virtual Power.'
                      subtitle='Wheeled power gives businesses 24/7 access to renewable energy through the existing grid, providing clean, cost-effective power without the expense of on-site infrastructure.'
                      imagePath={`${basePath}/images/Wheeling-Hero-Image.png`}
                      altText='Wind Turbines'
                      width={2048}
                      height={2048}
                  />
              </section>

              {/* Companies buying Carbon Credits */}  
              <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
                    <div className="max-w-[1400px] mx-auto">
                          
                        <h3 className="text-paynesGray font-medium text-center">Businesses that have switched to wheeled power</h3>
                        <div className="flex-col lg:flex-row mt-12">
                            <ul className="flex justify-evenly flex-wrap gap-x-4 gap-y-4">
                                <li>
                                    <BrandsCard
                                    logoPath = "/images/brands/nedbank-logo.png"
                                    altText = "nedbank-logo"   // Alt text for the logo
                                    />
                                </li>

                                <li>
                                    <BrandsCard
                                    logoPath = "/images/brands/sasol-logo.png"
                                    altText = "sasol-logo"   // Alt text for the logo
                                    />
                                </li>

                                <li>
                                    <BrandsCard
                                    logoPath = "/images/brands/vw-logo.png"
                                    altText = "volkswagen-logo"   // Alt text for the logo
                                    />
                                </li>

                                <li>
                                    <BrandsCard
                                    logoPath = "/images/brands/anglo-american-logo.png"
                                    altText = "anglo-american-logo"   // Alt text for the logo
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

              {/* What is Wheeling? */}
              <section className='bg-paynesGray'>
                <div className='max-w-[1400px] mx-auto px-4 py-14'>
                <div className='flex gap-8 w-full items-center justify-center text-charcoal'>

                    <div className='flex w-1/2 flex-col gap-6 text-antiflashWhite'>
                        <h2>Wheeling explained</h2>
                        <p>Wheeling is a process that enables businesses to purchase renewable energy from an independent power provider and receive it through the existing grid infrastructure. Instead of requiring on-site generation, energy is produced remotely and “wheeled” through the grid to the business location, providing a reliable, sustainable power supply that aligns with modern energy and sustainability goals.</p>
                    </div>

                    <div className='flex w-1/2 flex-col gap-6'>
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
                                    <Image src={`${basePath}/icons/Green-Electric.svg`} alt="icon" width={25} height={25} />
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
                                    <Image src={`${basePath}/icons/Efficiency.png`} alt="icon" width={25} height={25} />
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
                                    <Image src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
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

                            {/*Implement Renewable Energy */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
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


                {/* Solar Solutions + Benefits */}
                <section id="carbon-credits-eligibility" className="relative 
                                                                bg-antiflashWhite 
                                                                w-full
                                                                pb-14
                                                                pt-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal text-center">Industries that can benefit the most from wheeling</h2>
                    
                        <p className="text-charcoal text-center mt-12 text-xl">
                        Whether you&apos;re looking for seamless grid integration, reliable battery storage, or backup power with generator integration, we&apos;ve got you covered.
                        </p>

                        {/*Manufacturing */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Solar.svg`} alt="icon" width={25} height={25} />
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
                                                    <p className="">Wheeling delivers reliable, high-capacity power, ensuring manufacturers can meet intense production schedules that can not be met with on-site power generation alone.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Stable, Cost-Efficient Energy Supply</p>
                                                    <p className="">With wheeling, manufacturers secure consistent renewable energy at predictable rates, reducing costs and shielding against market price spikes.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check-Alt.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-bold">Lower Carbon Footprint for Compliance</p>
                                                    <p className="">Clean, wheeled energy helps manufacturers cut emissions, meet sustainability standards, and stay aligned with industry regulations.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton/>
                                </div>

                            </div>

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/Solar-Hero.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>

                        {/*Mining */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Battery-2.png`} alt="icon" width={25} height={25} />
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

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/Battery-Storage.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>

                        {/*Commercial Real Estate */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Integration.png`} alt="icon" width={25} height={25} />
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

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/Solar-Generator.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>

                        {/*Agriculture */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-8">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/pump.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Agriculture
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

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover object-right-[5 h-full rounded-3xl" src={`${basePath}/images/solar-pump.png`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>
                    
                    </div>
            </ section>

            {/* Our Process */}
            <section id="how-it-works-carbon-credits" className="relative w-full flex px-4 py-14 items-center justify-center">

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
            <section id="carbon-credits-faq" className="relative w-full px-4 flex items-center justify-center">

                <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                    <h2 className="text-charcoal">Frequently asked questions</h2>
                
                    < FAQ 
                    faqItems={WheelingFAQs}/>

                </div>

            </section>

            {/* CTA */}
            <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center h-[50vh]"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-bottom w-full h-full py-14 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Wheeling-CTA.png)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="LIMITLESS GREEN ENERGY,"
                            subtitle="STRAIGHT FROM THE GRID."/>

                        </div>

                    </div>
                </section>
              
          </div>
  )
}

export default Wheeling;
