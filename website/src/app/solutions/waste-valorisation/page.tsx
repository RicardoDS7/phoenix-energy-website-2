'use client';

import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import Image from 'next/image';
import AltGetInTouchButton from '@/app/components/AltGetInTouchButton';
import GetInTouchButton from '@/app/components/GetInTouchButton';
import ProductCarousel from '@/app/components/WasteProductsCarousel';
import { WasteValorizationProducts, WasteValorizationProcess, WasteValorizationFAQs } from '@/app/constants/constants';
import StepProcess from '@/app/components/OurProcess';
import FAQ from '@/app/components/FAQ';
import CallToAction from '@/app/components/CallToAction';
import Meta from '@/app/components/Meta';

const WasteValorization = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
        <Meta
        title="Transform Waste Into Energy & Profit"
        description="Discover how waste valorisation turns everyday waste into valuable resources, creating new revenue streams, reducing disposal costs, and advancing your business's sustainability efforts."
        />
          <div className='bg-antiflashWhite'>

              {/* Hero Section */} 
              <section className='max-w-[1400px] mx-auto px-4'>
                  <HeroSectionS2S 
                      title='Transform Waste Into Energy & Profit'
                      subtitle='Discover how waste valorisation turns everyday waste into valuable resources, creating new revenue streams, reducing disposal costs, and advancing your business&apos;s sustainability efforts.'
                      imagePath={`${basePath}/images/Waste-Valorization-Hero.webp`}
                      altText='Carbon Credits Coin'
                      width={1024}
                      height={1024}
                      sectionID='how-it-works-waste-valorisation'
                      howItWorksActive={true}
                  />
              </section>

              {/*Waste Valorization Products */}
              <section id="solar-success-stories" className="py-14 px-4">
                    <div className="block overflow-hidden">
                    
                        <ProductCarousel 
                        products={WasteValorizationProducts}/>
                        <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start max-w-[1400px] mx-auto">
                            <GetInTouchButton />
                        </div>

                    </div>                        
                </section>

              {/* Waste Valorization Solutions */}
              <section id="waste-valorisation-processes" className="relative 
                                                                bg-antiflashWhite 
                                                                w-full
                                                                pb-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal text-center">Leading technologies in waste valorisation</h2>
                    
                        <p className="text-charcoal text-center mt-8 text-xl">
                        Pyrolysis and Anaerobic Digestion are two of the most commercially adopted and reliable waste valorisation processes, transforming waste into energy and high-value products that boost revenue and operational efficiency across industries like agriculture, food processing, and manufacturing.
                        </p>

                        {/* Pyrolysis */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-6">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/flame.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h2 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Pyrolysis
                                </h2>
                                <p className="text-antiflashWhite">Pyrolysis is a thermal process that breaks down organic materials at high temperatures in the absence of oxygen, converting waste into valuable products like bio-oil, biochar, and syngas. This method captures energy from waste and creates versatile by-products with multiple industrial uses.</p>
                                <div className='flex flex-col md:flex-row gap-8'>

                                    {/* Feedstocks */}
                                   
                                    <div className="font-inter text-lg text-antiflashWhite space-y-6">
                                        <p className='text-2xl font-bold'>Feedstocks</p>
                                        <ul className="space-y-6">
                                            
                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Plastic Waste</p>
                                                        <p className="">Low-grade plastics that are difficult to recycle.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Rubber</p>
                                                        <p className="">Waste rubber, including used tyres.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Biomass</p>
                                                        <p className="">Low-moisture organic materials such as wood chips and crop residues.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Organic Industrial Waste</p>
                                                        <p className="">Carbon-based residues from industrial processes.</p>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                        
                                    </div>

                                    {/* Products */}
                                    <div className="font-inter text-lg text-antiflashWhite space-y-6">
                                        <p className='text-2xl font-bold'>Products</p>
                                        <ul className="space-y-6">
                                            
                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Bio-oil</p>
                                                        <p className="">A synthetic oil that can be refined into valuable chemicals and fuels.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Biochar</p>
                                                        <p className="">Enhances soil quality and captures carbon for sustainable agriculture.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Syngas</p>
                                                        <p className="">A flexible fuel source used in power generation and chemical production.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Carbon Black</p>
                                                        <p className="">An valuable industrial material for rubber, inks, and coatings.</p>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton/>
                                </div>

                            </div>

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-center object-cover h-full rounded-3xl" src={`${basePath}/images/Pyrolysis-Plant-2.webp`} alt="Battery Storage System" width={1080} height={1080} />
                            </div>
                        </div>

                        {/* Anaeribuc Digestion */}
                        <div className="mt-12 flex flex-col w-full lg:flex-row-reverse gap-8">
                        
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-2/3 flex flex-grow flex-col items-start justify-start text-start space-y-6">
                                <div className="rounded-full bg-antiflashWhite p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/flame.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h2 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Anaerobic Digestion
                                </h2>
                                <p className="text-antiflashWhite">Anaerobic digestion is a biological process where microorganisms break down organic waste in the absence of oxygen, producing valuable by-products like biogas and biofertliser. This method turns waste into renewable energy and nutrient-rich fertliser, supporting sustainable waste management.</p>
                                <div className='flex flex-col md:flex-row gap-8'>

                                    {/* Feedstocks */}
                                   
                                    <div className="font-inter text-lg text-antiflashWhite space-y-6">
                                        <p className='text-2xl font-bold'>Feedstocks</p>
                                        <ul className="space-y-6">
                                            
                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Food Waste</p>
                                                        <p className="">Organic food scraps from households, restaurants, and food processing facilities.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Agricultural Residues</p>
                                                        <p className="">Crop residues, manure, and other organic farm waste.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/waste.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Sewage Sludge</p>
                                                        <p className="">Organic material from wastewater treatment plants, ideal for biogas production.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>

                                    {/* Products */}
                                    <div className="font-inter text-lg text-antiflashWhite space-y-6">
                                        <p className='text-2xl font-bold'>Products</p>
                                        <ul className="space-y-6">
                                            
                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Biogas</p>
                                                        <p className="">A renewable energy source used for electricity, heating, or as vehicle fuel.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Biofertliser</p>
                                                        <p className="">A nutrient-rich organic fertliser that enhances soil health and supports sustainable agriculture.</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="gap-4 w-full">
                                                <div className="flex flex-row gap-4">
                                                    <Image className="object-scale-down object-top" src={`${basePath}/icons/product.png`} alt="icon" width={25} height={25} />
                                                    <div className="flex flex-col space-y-0">
                                                        <p className="font-bold">Digestate</p>
                                                        <p className="">The solid by-product left after digestion, used in soil conditioning and as a compost additive.</p>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-6 align-middle justify-start items-start md:items-center md:justify-center gap-4">
                                    <AltGetInTouchButton/>
                                </div>

                            </div>

                            <div className="hidden lg:block rounded-3xl shadow-md w-full lg:w-1/3 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <Image className="object-cover h-full rounded-3xl" src={`${basePath}/images/anaerobic-digestion.webp`} alt="Battery Storage System" width={500} height={500} />
                            </div>
                        </div>
                    
                    </div>
                </ section>

                {/*Why is matters for your business? */}
              <section id="why-carbon-credits-matters" className="pb-14 px-4">

                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:gap-12 space-y-12">
                    <div className="relative text-start lg:w-2/3">
                        <h2 className="text-charcoal">The business case for waste valorisation</h2>
                    
                        <div className="py-10">
                            <ul className="space-y-6">
                                <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                            <Image src={`${basePath}/icons/benefits.png`} alt="icon" width={25} height={25} />
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-2">
                                        <h4 >Generate New Revenue Streams</h4>
                                        <p className="text-xl">Waste valorisation transforms waste into marketable products, creating profitable avenues from materials that would otherwise be discarded.</p>
                                    </div>
                                </li>

                                <hr />
                                <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0" >
                                            <Image src={`${basePath}/icons/waste-management.png`} alt="icon" width={25} height={25} />
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-2">
                                        <h4 >Reduce Waste Management Costs</h4>
                                        <p className="text-xl">By converting waste into reusable resources, waste valorisation lowers disposal costs and optimises waste handling, saving your business money.</p>
                                    </div>
                                </li>

                                <hr />

                                <li className="flex flex-col md:flex-row align-middle items-start md:items-center gap-6">
                                    <div className="rounded-full bg-powderBlue p-4 justify-end items-end flex-shrink-0">
                                            <Image src={`${basePath}/icons/circular-economy.png`} alt="icon" width={25} height={25} />
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-2">
                                        <h4 >Circular Economy</h4>
                                        <p className="text-xl">Businesses can harness energy and reuse valuable by-products from waste, reducing reliance on external resources and cpntributing to a more sustainable, circular economy.</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start">
                            <GetInTouchButton />
                        </div>

                    </div>

                    <div className="hidden lg:block flex rounded-3xl h-[560px] lg:w-1/3 shadow">
                        <Image className="rounded-3xl object-cover h-full w-full" src={`${basePath}/images/Waste-Valorization.webp`} alt="why carbon credits matter" width={360} height={640} />
                    </div>
                </div>
                </section>

                {/* Our Process */}
                <section id="how-it-works-waste-valorisation" className="relative w-full flex px-4 py-14 items-center justify-center">

                    <div className="relative text-center max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal">How it works</h2>

                        <div className='flex mx-auto w-full lg:w-1/2 justify-center items-center'>
                            < StepProcess 
                            steps={WasteValorizationProcess}/>
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
                        faqItems={WasteValorizationFAQs}/>

                    </div>

                </section>

                {/* CTA */}
                <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-bottom w-full h-full py-14 items-center justify-center"
                        style={{
                            backgroundImage: `url(${basePath}/images/Waste-Valorization-CTA.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="WASTE LESS"
                            subtitle="GAIN MORE."/>

                        </div>

                    </div>
                </section>
              
          </div>
    </>
  )
}

export default WasteValorization;
