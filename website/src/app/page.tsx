'use client';
import Image from "next/image";
import HeroSectionS2S from "./components/HeroSectionS2S";
import Carousel from "./components/SuccessStoriesCarousel";
import GetInTouchButton from "./components/GetInTouchButton";
import AltGetInTouchButton from "./components/AltGetInTouchButton";
import { projectDetails } from "./projects/projectConstants";
import { WHEELING, SOLAR, CARBON_CREDITS, WASTE_VALOR, HYDROGEN } from "./constants/constants";
import LearnMoreButton from "./components/LearnMoreSolutionButton";
import CallToAction from "./components/CallToAction";

const HomePage = () => {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
      <div className="bg-antiflashWhite">

        {/* Hero Section */} 
        <section className="max-w-[1400px] mx-auto px-4">
            <HeroSectionS2S 
                title="SAVE, EARN, & GROW WITH RENEWABLE ENERGY"
                subtitle="Our turnkey embedded solar solutions deliver the flexibility, efficiency, and reliability your business needs, from custom design to goal-oriented financing."
                imagePath={`${basePath}/images/Home-Page-Hero.png`}
                altText="Home Page Hero Image"
                width={2048}
                height={2048}
                sectionID='how-it-works-solar'
                howItWorksActive={true}
            />
        </section>

        {/* Partners Logos */}  
        <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
            <div className="max-w-[1400px] mx-auto">
                  
                <h3 className="text-paynesGray font-medium text-center">Partnering with industry leaders for quality solutions backed by experience</h3>
                <div className="flex-col lg:flex-row mt-12">
                    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
                        <li>
                            <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                <Image
                                src = {`${basePath}/images/brands/solar-supply-logo.png`}
                                alt= {"nedbank-logo"}   // Alt text for the logo
                                width={150}
                                height={150}
                                />
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                <Image
                                src = {`${basePath}/images/brands/daisy-logo.png`}
                                alt= {"nedbank-logo"}   // Alt text for the logo
                                width={150}
                                height={150}
                                />
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                <Image
                                src = {`${basePath}/images/brands/edf-logo.png`}
                                alt= {"nedbank-logo"}   // Alt text for the logo
                                width={150}
                                height={150}
                                />
                            </div>
                        </li>


                        <li>
                            <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                <Image
                                src = {`${basePath}/images/brands/standard-bank-logo.png`}
                                alt= {"standard bank logo"}   // Alt text for the logo
                                width={150}
                                height={150}
                                />
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center justify-center bg-white shadow rounded-3xl h-[150px] p-4">
                                <Image
                                src = {`${basePath}/images/brands/captive-power-logo.png`}
                                alt= {"captive power logo"}   // Alt text for the logo
                                width={150}
                                height={150}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

      {/* Solar Finance Options */}
      <section id="solar-finance-options" className="relative 
                                                      bg-paynesGray 
                                                      w-full
                                                      py-14
                                                      px-4
                                                      flex 
                                                      items-center 
                                                      justify-center 
                                                      overflow-hidden">

          <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="text-antiflashWhite">Flexible finance options</h2>
                <p className="mt-4 text-antiflashWhite max-w-[1000px]">Founded in 2024, Phoenix Energy was created to make renewable energy both accessible and transformative across Africa. We set ourselves apart by providing bespoke, turnkey solutions that go beyond conventional energy savings. Our approach gives businesses a comprehensive roadmap and an array of renewable energy solutions designed not only to drive them toward Net Zero Carbon Emissions but also to enhance efficiency and unlock new revenue streams. For us, it&apos;s not just about saving—it&apos;s about empowering businesses to earn, grow, and thrive sustainably. </p>
              </div>
              <div className="mt-12 flex flex-col flex-wrap w-full lg:flex-row gap-8 justify-center">
                  
                  {/*Embedded Solar */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-start text-start space-y-4">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/Solar.svg`} alt="solar-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Embedded Solar
                      </h3>
                      <div className="font-inter text-lg text-charcoal space-y-6">
                          <p>
                              With our PPA option, we install and maintain the solar system on your property at no upfront cost. Your business pays only for the electricity the system generates, typically at a lower rate than traditional grid power. We handle all maintenance, ensuring reliable performance and long-term savings without added responsibility.
                          </p>

                          <p className="font-bold text-2xl">Solutions:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Grid-Tied Solar Systems</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Battery Energy Storage Systems</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Solar-Generator Integration</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Solar Pumps</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>

                          <LearnMoreButton 
                          buttonText="Learn More"
                          path={SOLAR}/>
                          
                      </div>
                  </div>

                  {/* Wheeling */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-start text-start space-y-6">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/Wheeling.svg`} alt="wheeling-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Wheeled Power
                      </h3>
                      <div className="font-inter text-lg text-charcoal space-y-6">
                          <p>
                          Your business fully owns the solar system from day one. Purchasing outright provides maximum savings on energy costs, qualifies you for all tax incentives, and enables a quick return on investment. This approach grants you complete control over your energy production and secures long-term financial benefits.
                          </p>

                          <p className="font-bold text-2xl">Benefits:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Maximum Savings & ROI</p>
                      
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Full Ownership</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Tax Incentives</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          
                          <LearnMoreButton 
                          buttonText="Learn More"
                          path={WHEELING}/>

                      </div>
                  </div>

                  {/*Hydrogen Technologies */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-start text-start space-y-4">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/Hydrogen.svg`} alt="hydrogen-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Hydrogen Technologies
                      </h3>
                      <div className="font-inter text-lg text-charcoal space-y-6">
                          <p>
                              A loan purchase allows your business to finance the solar system through a loan from your preferred bank, spreading out payments over time while still gaining the benefits of system ownership. This approach lets you start saving on energy costs immediately, while gradually paying off the system.
                          </p>

                          <p className="font-bold text-2xl">Benefits:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Flexible Payments</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Ownership Benefits</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Immediate Savings</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>

                          <LearnMoreButton 
                          buttonText="Learn More"
                          path={HYDROGEN}/>
                          
                      </div>
                  </div>

                  {/*Waste Valorization */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-start text-start space-y-4">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/product-alt.png`} alt="waste-valorization-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Waste Valorization
                      </h3>
                      <div className="font-inter text-lg text-charcoal space-y-6">
                          <p>
                              A loan purchase allows your business to finance the solar system through a loan from your preferred bank, spreading out payments over time while still gaining the benefits of system ownership. This approach lets you start saving on energy costs immediately, while gradually paying off the system.
                          </p>

                          <p className="font-bold text-2xl">Benefits:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Flexible Payments</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Ownership Benefits</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Immediate Savings</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>

                          <LearnMoreButton 
                          buttonText="Learn More"
                          path={WASTE_VALOR}/>
                          
                      </div>
                  </div>

                  {/*Carbon Credits */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-start text-start space-y-4">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/Carbon-Credits.svg`} alt="Carbon-Credits-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Carbon Credits
                      </h3>
                      <div className="font-inter text-lg text-charcoal space-y-6">
                          <p>
                              A loan purchase allows your business to finance the solar system through a loan from your preferred bank, spreading out payments over time while still gaining the benefits of system ownership. This approach lets you start saving on energy costs immediately, while gradually paying off the system.
                          </p>

                          <p className="font-bold text-2xl">Benefits:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Flexible Payments</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Ownership Benefits</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Immediate Savings</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>

                          <LearnMoreButton 
                          buttonText="Learn More"
                          path={CARBON_CREDITS}/>
                          
                      </div>
                  </div>




              </div>
          
              <div className="mt-6 flex align-middle items-center justify-center">
                  <AltGetInTouchButton />
              </div>

          </div>
      </ section>

      {/*Business Case Studies */}
      <section id="solar-success-stories" className="py-14 px-4">
        <div className="block overflow-hidden">
        
            <Carousel 
            projects={projectDetails}/>
            <div className="mt-6 flex align-middle items-center justify-center lg:items-start lg:justify-start max-w-[1400px] mx-auto">
                <GetInTouchButton />
            </div>

        </div>                        
      </section>

      {/* CTA */}
      <section id="carbon-credits-cta" className="relative w-full flex items-center justify-center"
                >
          <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
          <div className="flex bg-cover bg-bottom w-full h-full py-14 items-center justify-center"
              style={{
                  backgroundImage: `url(${basePath}/images/Home-Page-CTA.png)`,
                }}>
              <div className="text-xl relative text-center max-w-[1400px] mx-auto">
              
                  < CallToAction 
                  headline="SAVE. EARN. GROW."
                  subtitle="GET STARTED TODAY"/>

              </div>

          </div>
      </section>

    </div>

  );
};

export default HomePage;
