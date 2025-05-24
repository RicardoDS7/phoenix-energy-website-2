'use client';
import HeroSectionS2S from "@/app/components/HeroSectionS2S";
import AltGetInTouchButton from "@/app/components/AltGetInTouchButton";
import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import { EnergyManagementFAQs, EnergyManagementProcess } from "@/app/constants/constants";
import StepProcess from "@/app/components/OurProcess";
import FAQ from "@/app/components/FAQ";
import GetInTouchButton from "@/app/components/GetInTouchButton";
import Meta from "@/app/components/Meta";

const EnergyManagement = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
    <>
        <Meta
        title="Energy Management - The Leaner, Greener Way To Manage Your Business"
        description="Save up to 30% on energy costs with an energy audit, and discover inefficiencies and oppurtunities to run your business more efficiently."
        />
        <div className="bg-antiflashWhite">

                {/* Hero Section */} 
                <section className="max-w-[1400px] mx-auto px-4">
                    <HeroSectionS2S 
                        title="The leaner, greener way to manage your business"
                        subtitle="Energy management helps your business identify inefficiencies and energy wastage, while developing and implementing effective policies and strategies to cut costs, boost efficiency, and stay ahead of evolving environmental regulations."
                        imagePath={`${basePath}/images/Energy-Management-Hero.webp`}
                        altText="Energy Management Dashboard"
                        width={1024}
                        height={1024}
                        sectionID="how-it-works-energy-management"
                        howItWorksActive={true}
                    />
                </section>


               {/* Benefits of Energy Management*/}
              <section id="earn-carbon-credits" className="relative 
                                                                bg-antiflashWhite 
                                                                w-full
                                                                py-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="text-charcoal text-center"><span className="text-paynesGray">Save up to 30%</span> on energy costs with an energy audit</h2>
                    
                        <div className="mt-12 flex flex-wrap w-full gap-8">
                            
                            {/*Energy Waste */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/inefficiency.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="text-antiflashWhite whitespace-pre-wrap font-bold">
                                    Identify Inefficiencies & Wastage
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Pinpoint energy-draining equipment and uncover areas of excessive consumption to maximize efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Boost Equipment Efficiency & Lifespan */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/baseline.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Establish a Clear Baseline for Energy Consumption
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Gain a comprehensive understanding of current energy use patterns to track improvements effectively.
                                    </p>
                                </div>
                            </div>

                            {/*Saving Oppurtunities */}
                            <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-grow flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/saving-idea.png`} alt="icon" width={25} height={25} />
                                </div>
                                <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                                    Uncover Cost-Saving Opportunities
                                </h3>
                                <div className="font-inter text-lg text-antiflashWhite">
                                    <p>
                                    Receive a personalized action plan outlining upgrades, behavior changes, and process improvements to drive significant cost reductions.
                                    </p>
                                </div>
                            </div>

                        </div>
                    
                        <div className="mt-6 flex align-middle items-center justify-center">
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>

                {/* ISO 500001 ACCREDITED */}
            <section className='bg-paynesGray'>
                <div className='max-w-[1400px] mx-auto px-4 pt-7 pb-7'>
                <div className='flex flex-col-reverse lg:flex-row w-full items-center justify-center'>

                    <div className='flex w-full lg:w-1/2 flex-col gap-6 text-antiflashWhite'>
                        <h2>ISO 50001 Accredited Energy Auditors</h2>
                        <p>Our energy management auditors and partners are ISO 50001 accredited, ensuring that your energy audits, policies, and action plans adhere to the highest global standards in energy management.</p>
                        <div>
                            < AltGetInTouchButton />
                        </div>
                    </div>

                    <div className='flex w-full lg:w-1/2 flex-col gap-8 items-center justify-center overflow-hidden mx-8'>
                        <div className="flex flex-row w-full items-center justify-center align-middle">
                            <Image className="w-7/12 object-fill" src={`${basePath}/images/brands/secs-logo-alt.png`} width={300} height={300} alt='EDF-logo' />
                            <Image className="w-5/12 object-fill" src={`${basePath}/images/brands/iso-logo-alt.png`} width={300} height={300} alt='EDF-logo' />
                        </div>
                    </div>
                </div>
                </div>
              </section>

              {/* Solar Finance Options */}
              <section id="solar-finance-options" className="relative 
                                                                bg-paynesGray 
                                                                w-full
                                                                pb-14
                                                                px-4
                                                                flex 
                                                                items-center 
                                                                justify-center 
                                                                overflow-hidden">

                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-antiflashWhite text-center">Optimised efficiency starts with clear, actionable policies</h2>
                            <p className="text-antiflashWhite text-center">Energy policies create the structure needed to turn insights from audits into actionable strategies, aligning energy use with business goals and sustainability commitments.</p>
                        </div>
                        <div className="mt-12 flex flex-col w-full lg:flex-row gap-8">
                            
                            {/*Set Standards */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/PPA.png`} alt="ppa-icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                Set Clear Energy Standards
                                </h3>
                                <div className="font-inter text-lg text-charcoal space-y-6">
                                    <p>
                                    Establish standards for energy use and equipment upgrades to ensure consistent and optimized efficiency.
                                    </p>

                                    <p className="font-bold text-2xl">Benefits:</p>
                                    
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Maintains uniform energy-saving practices across all operations.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Prevents expensive repairs and replacements.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Effectively cuts operational energy costs.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>

                            {/* Team Accountability */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-6">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/team-check.png`} alt="cash-purchase-icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                Foster Team Accountability
                                </h3>
                                <div className="font-inter text-lg text-charcoal space-y-6">
                                    <p>
                                    Define roles and responsibilities to ensure every department contributes to energy-saving initiatives.
                                    </p>

                                    <p className="font-bold text-2xl">Benefits:</p>
                                    
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Empowers employees to chamption energy-saving initiatives.</p>
                                
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Reduces wastage through hands-on monitoring.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Boosts operational performance with collaborative energy efforts.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>

                            {/*Compliance */}
                            <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:w-1/3 flex-grow flex flex-col items-start justify-start text-start space-y-4">
                                <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                                    <Image src={`${basePath}/icons/brand-rep.png`} alt="brand reputation icon" width={25} height={25} />
                                </div>
                                <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                                Be Compliant, Boost Reputation
                                </h3>
                                <div className="font-inter text-lg text-charcoal space-y-6">
                                    <p>
                                    Align operations with regulatory requirements to avoid penalties and showcase sustainability leadership.
                                    </p>

                                    <p className="font-bold text-2xl">Benefits:</p>
                                    
                                    <ul className="space-y-6">
                                        
                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Eliminates risks of non-compliance fines.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Opens opportunities for financial incentives and rewards for energy-efficient practices.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>

                                        <li className="gap-4 w-full">
                                            <div className="flex flex-row gap-4">
                                                <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                                <div className="flex flex-col space-y-2">
                                                    <p className="font-semibold">Future-proofs your business for continuity and competitiveness amid evolving energy laws.</p>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    
                        <div className="mt-6 flex align-middle items-center justify-center">
                            <AltGetInTouchButton />
                        </div>

                    </div>
                </ section>

            {/* Our Process */}
            <section id="how-it-works-energy-management" className="relative w-full flex px-4 py-14 items-center justify-center">

                <div className="relative text-center max-w-[1400px] mx-auto">
                    <h2 className="text-charcoal">How it works</h2>

                    <div className='flex mx-auto w-full lg:w-1/2 justify-center items-center'>
                        < StepProcess 
                        steps={EnergyManagementProcess}/>
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
                    faqItems={EnergyManagementFAQs}/>

                </div>

            </section>

            {/* CTA */}
            <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-center w-full h-full py-20 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Energy-Management-CTA-2.webp)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto items-center justify-center">
                        
                            < CallToAction 
                            headline="TAKE CONTROL, BECOME MORE EFFICIENT."
                            subtitle=""/>

                        </div>

                    </div>
            </section>

        </div>
    </>
    )
}

export default EnergyManagement