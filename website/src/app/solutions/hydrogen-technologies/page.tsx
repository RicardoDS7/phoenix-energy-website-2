'use client';
import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import CallToAction from '@/app/components/CallToAction';
import { HydrogenFAQs } from '@/app/constants/constants';
import FAQ from '@/app/components/FAQ';
import GetInTouchButton from '@/app/components/GetInTouchButton';
import AltGetInTouchButton from '@/app/components/AltGetInTouchButton';
import Image from 'next/image';


const HydrogenTechnologies = () => {

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
          <div className='bg-antiflashWhite'>

              {/* Hero Section */} 
              <section className='max-w-[1400px] mx-auto px-4'>
                  <HeroSectionS2S 
                      title='Maximize Generator Efficiency With Hydrogen'
                      subtitle='A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation.'
                      imagePath={`${basePath}/images/Hydrogen-Hero-Image-2.png`}
                      altText='Carbon Credits Coin'
                      width={2048}
                      height={2048}
                  />
                  
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
                            
                            {/*Higher Efficiency */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Green-Electric.svg`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                    Higher Efficiency
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>
                                    Increases generator efficiency by up to 15% through better fuel utilization.
                                    </p>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Efficiency.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Lower Fuel Costs
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>
                                    Reduces fuel consumption by 10-20%, leading to substantial cost savings.
                                    </p>
                                </div>
                            </div>

                            {/*Implement Renewable Energy */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-paynesGray whitespace-pre-wrap">
                                    Better Combustion
                                </h3>
                                <div className="font-inter text-lg text-charcoal">
                                    <p>
                                        Enhances combustion quality, potentially reducing emissions by 20-30%, making energy production cleaner.
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
                            <h2 className="text-charcoal">Applications for Hydrogen Generators</h2>
                        
                            <div className="py-10">
                                <ul className="space-y-6">
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/benefits.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Stationary Generators</h4>
                                            <p className="">Businesses can sell carbon credits to offset emissions, generating revenue while reducing operational costs and boosting profits.</p>
                                        </div>
                                    </li>

                                    <hr />
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                                <Image src={`${basePath}/icons/compliance.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Heavy Machinery & Earth Moving Equipment</h4>
                                            <p className="">Carbon credits offset the Carbon Tax under the South African Carbon Tax Act of 2019, which is set to rise to R462 per ton of CO₂ by 2030.</p>
                                        </div>
                                    </li>

                                    <hr />

                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Maritime</h4>
                                            <p className="">Earning carbon credits strengthens your brand&apos;s sustainability reputation, attracting eco-conscious investors and giving you a competitive edge.</p>
                                        </div>
                                    </li>

                                    <hr />

                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Logistics Vehiclesw</h4>
                                            <p className="">Earning carbon credits strengthens your brand&apos;s sustainability reputation, attracting eco-conscious investors and giving you a competitive edge.</p>
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

              {/* FAQ */}
              <section id="carbon-credits-faq" className="relative w-full px-4 pb-14 flex items-center justify-center">

                <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                    <h2 className="text-charcoal">Frequently asked questions</h2>
                
                    < FAQ 
                    faqItems={HydrogenFAQs}/>

                </div>

            </section>

              {/* CTA */}
              <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-top w-full h-full py-14 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Hydrogen-CTA.png)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="REV UP PERFORMANCE."
                            subtitle=" BOOST YOUR ENGINE WITH H₂."/>

                        </div>

                    </div>
                </section>

              
          </div>
  )
}

export default HydrogenTechnologies;
