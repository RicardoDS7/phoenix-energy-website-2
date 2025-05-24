'use client';
import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import CallToAction from '@/app/components/CallToAction';
import { HydrogenFAQs } from '@/app/constants/constants';
import FAQ from '@/app/components/FAQ';
import GetInTouchButton from '@/app/components/GetInTouchButton';
import AltGetInTouchButton from '@/app/components/AltGetInTouchButton';
import Image from 'next/image';
import Meta from '@/app/components/Meta';


const HydrogenTechnologies = () => {

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
        <Meta
        title="Hydrogen Fuel Injection - Unlock Superior Performance"
        description="Achieve lower emissions, greater efficiency, and reduced fuel costs by integrating hydrogen fuel injection into your engine or generator."
        />
          <div className='bg-antiflashWhite'>

              {/* Hero Section */} 
              <section className='max-w-[1400px] mx-auto px-4'>
                  <HeroSectionS2S 
                      title='Unlock superior performance'
                      subtitle='Achieve lower emissions, greater efficiency, and reduced fuel costs by integrating hydrogen fuel injection into your engine or generator.'
                      imagePath={`${basePath}/images/Hydrogen-Hero-Image-2.webp`}
                      altText='Carbon Credits Coin'
                      width={1024}
                      height={1024}
                      sectionID=''
                      howItWorksActive={false}
                  />
                  
              </section>

              {/* Benefits of Hydrogen Technology*/}
              <section id="earn-carbon-credits" className="relative 
                                                                bg-antiflashWhite 
                                                                w-full
                                                                pt-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal text-center">The Power of Hydrogen Fuel Injection</h2>
                    
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                            
                            {/*Higher Efficiency */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Green-Electric.svg`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-antiflashWhite whitespace-pre-wrap font-bold">
                                    Higher Efficiency
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Achieve up to 15% greater efficiency by maximising fuel utilisation and getting more power out of every drop.
                                    </p>
                                </div>
                            </div>

                            {/* Lower Fuel Costs */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/Efficiency.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Lower Fuel Costs
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Reduce fuel consumption by up to 25%, translating into significant cost savings and more sustainable operations.
                                    </p>
                                </div>
                            </div>

                            {/*Better Combustion */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Better Combustion
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Improve combustion quality by reducing significantly reducing GHG emissions, enabling cleaner and more eco-friendly power production.
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="p-6 flex align-middle items-center justify-center">
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>


                {/*H2 Applications */}
                <section id="why-carbon-credits-matters" className="pb-14 pt-8 px-4">

                    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:gap-12 space-y-12">
                        <div className="relative text-start lg:w-2/3">
                            <h2 className="text-charcoal">Powering Possibilities</h2>
                        
                            <div className="py-10">
                                <ul className="space-y-6">
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/benefits.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Stationary Generators</h4>
                                            <p className="">Hydrogen injection optimises combustion, extending the lifespan of stationary generators and reducing fuel costs and maintenance needs, ultimately lowering lifetime operating costs.</p>
                                        </div>
                                    </li>

                                    <hr />
                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                                <Image src={`${basePath}/icons/compliance.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Heavy Machinery & Earth Moving Equipment</h4>
                                            <p className="">Heavy machinery burns through fuel fast—hydrogen injection maximises combustion efficiency, enabling engines to run longer and drive massive fuel cost savings. </p>
                                        </div>
                                    </li>

                                    <hr />

                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Maritime Ships</h4>
                                            <p className="">In maritime shipping, hydrogen injection reduces greenhouse gas emissions and boosts fuel efficiency, helping fleets meet sustainability goals with cleaner, responsible ocean transport.</p>
                                        </div>
                                    </li>

                                    <hr />

                                    <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                        <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                                <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <h4 >Logistics Vehicles</h4>
                                            <p className="">In a margin-tight industry, every gain in fuel efficiency matters. Hydrogen injection enables logistics fleets to operate smarter and more sustainably, reducing costs while supporting greener operations.</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start">
                                <GetInTouchButton />
                            </div>

                        </div>

                        <div className="hidden lg:block flex rounded-3xl h-[560px] lg:w-1/3">
                            <Image className="rounded-3xl object-cover h-full w-full" src={`${basePath}/images/h2pod.webp`} alt="why carbon credits matter" width={360} height={640} />
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
              <section id="hydrogen-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-top w-full h-full py-14 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Hydrogen-CTA.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="REV UP PERFORMANCE."
                            subtitle=" BOOST YOUR ENGINE WITH H₂."/>

                        </div>

                    </div>
                </section>

              
          </div>
    </>
  )
}

export default HydrogenTechnologies;
