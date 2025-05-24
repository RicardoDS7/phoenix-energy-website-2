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
import Meta from "./components/Meta";

const HomePage = () => {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
    <Meta
    title="Phoenix Energy - Renewable Energy Solutions"
    description="Empowering African businesses with turnkey renewable energy solutions, to operate more efficiently and sustainably."
    />

    <div className="bg-antiflashWhite">

        {/* Hero Section */} 
        <section className="max-w-[1400px] mx-auto px-4">
            <HeroSectionS2S 
                title="SAVE, EARN, & GROW WITH RENEWABLE ENERGY"
                subtitle="We empower African businesses with accessible, transformative renewable solutions—tailored to drive net-zero goals, boost efficiency, and open new revenue streams. It&apos;s more than saving; it&apos;s sustainable growth."
                imagePath={`${basePath}/images/Home-Page-Hero.webp`}
                altText="Home Page Hero Image"
                width={720}
                height={405}
                sectionID=''
                howItWorksActive={false}
            />
        </section>

        {/* Partners Logos */}  
        <section className="relative flex flex-col gap-8 px-4 py-14 items-center justify-center">
            <div className="max-w-[1400px] mx-auto">
                  
                <h3 className="text-paynesGray font-medium text-center">Partnering with industry leaders for quality solutions backed by experience</h3>
                <div className="flex-col lg:flex-row mt-12">
                    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
                        <li>
                            <a href="https://www.creovision.co.za" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                    <Image
                                    src = {`${basePath}/images/brands/creovision-logo.png`}
                                    alt= {"creovision-logo"}   // Alt text for the logo
                                    width={150}
                                    height={150}
                                    />
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.blueecho.co.za" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                    <Image
                                    src = {`${basePath}/images/brands/blueecho-logo.png`}
                                    alt= {"blue-echo-logo"}   // Alt text for the logo
                                    width={150}
                                    height={150}
                                    />
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.weg.net" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                    <Image
                                    src = {`${basePath}/images/brands/WEG-logo.png`}
                                    alt= {"WEG-logo"}   // Alt text for the logo
                                    width={150}
                                    height={150}
                                    />
                                </div>
                            </a>
                        </li>

                        {/* <li>
                            <a href="https://www.south-africa.edf.com" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                    <Image
                                    src = {`${basePath}/images/brands/edf-logo.png`}
                                    alt= {"edf-logo"}   // Alt text for the logo
                                    width={150}
                                    height={150}
                                    />
                                </div>
                            </a>
                        </li> */}


                        <li>
                            <a href="https://www.standardbank.com" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                    <Image
                                    src = {`${basePath}/images/brands/standard-bank-logo.png`}
                                    alt= {"standard bank logo"}   // Alt text for the logo
                                    width={150}
                                    height={150}
                                    />
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.captive-power.com" target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center justify-center bg-white shadow rounded-3xl w-[150px] lg:w-[200px] h-[112.5px] lg:h-[150px] p-4">
                                    <Image
                                    src = {`${basePath}/images/brands/captive-power-logo.png`}
                                    alt= {"captive power logo"}   // Alt text for the logo
                                    width={150}
                                    height={150}
                                    />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

      {/* Phoenix Solutions */}
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
                <h2 className="text-antiflashWhite">A Fullstack Renewable Energy Solution</h2>
                <p className="mt-4 text-antiflashWhite max-w-[1000px]">Achieving exponential, sustainable growth demands a strategic blend of advanced renewable technologies—each delivering distinct advantages and a competitive edge. Our comprehensive suite of solutions lays out a clear roadmap, guiding your business toward lasting success.</p>
              </div>
              <div className="mt-12 flex flex-col flex-wrap w-full lg:flex-row gap-8 justify-center items-stretch">
                  
                  {/*Embedded Solar */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-between text-start space-y-4">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/Solar.svg`} alt="solar-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Embedded Solar
                      </h3>
                      <div className="flex-grow font-inter text-lg text-charcoal space-y-6">
                          <p>
                          Power your business with flexible, efficient, and reliable solar solutions — custom-designed and strategically financed for sustainable success.
                          </p>

                          <p className="font-bold text-2xl">Solutions:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4 items-start">
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
                          
                      </div>

                        <LearnMoreButton 
                        buttonText="Learn More"
                        path={SOLAR}/>

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
                          Access unlimited, 24/7 renewable power through the grid through wheeling — clean, cost-effective, and infrastructure-free.
                          </p>

                          <p className="font-bold text-2xl">Benefits:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Zero Infrastructure</p>
                      
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Easily Scalable</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">One Contract - Multiple Locations</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>

                      </div>

                    <LearnMoreButton 
                    buttonText="Learn More"
                    path={WHEELING}/>
                      
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
                          Cut emissions, boost efficiency, and save on fuel with hydrogen fuel injection for your engines and generators.
                          </p>

                          <p className="font-bold text-2xl">Ideal For:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Generators</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Heavy Machinery & Equipment</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Logistics Fleets</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Maritime Ships</p>
                                          
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          
                      </div>

                      <LearnMoreButton 
                          buttonText="Learn More"
                          path={HYDROGEN}/>

                  </div>

                  {/*Waste Valorization */}
                  <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full lg:max-w-[420px] flex flex-col items-start justify-start text-start space-y-4">
                      <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                          <Image src={`${basePath}/icons/product-alt.png`} alt="waste-valorization-icon" width={25} height={25} />
                      </div>
                      <h3 className="text-paynesGray whitespace-pre-wrap font-bold">
                          Waste Valorisation
                      </h3>
                      <div className="font-inter text-lg text-charcoal space-y-6">
                          <p>
                          Turn your business into a circular economy with waste valorization—convert waste into valuable products and unlock new revenue opportunities.
                          </p>

                          <p className="font-bold text-2xl">High-Value Products:</p>
                          
                          <ul className="space-y-6">
                              
                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Bio-Oil</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Biogas</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Biochar</p>
                                          
                                      </div>
                                  </div>
                              </li>

                              <li className="gap-4 w-full">
                                  <div className="flex flex-row gap-4">
                                      <Image className="object-scale-down object-top" src={`${basePath}/icons/Check.png`} alt="icon" width={25} height={25} />
                                      <div className="flex flex-col space-y-2">
                                          <p className="font-bold">Carbon Black</p>
                                          
                                      </div>
                                  </div>
                              </li>

                          </ul>

                      </div>

                      <LearnMoreButton 
                          buttonText="Learn More"
                          path={WASTE_VALOR}/>
                          
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
                            Get financially rewarded for your sustainable practices that offset carbon emmissions. Earn carbon credits, and reduce your carbon tax simultaneously.
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

                      </div>
                      
                      <LearnMoreButton 
                          buttonText="Learn More"
                          path={CARBON_CREDITS}/>
                          
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
</>

  );
};

export default HomePage;
