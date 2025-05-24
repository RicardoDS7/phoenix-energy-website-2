'use client';
import Image from "next/image";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamInfo } from "../constants/constants";
import Meta from "../components/Meta";

const About = () => {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
    <>
      <Meta
      title="Our Story - The Rise Of Phoenix Energy"
      description="We believe in an Africa where renewable energy fuels unstoppable growth and lasting sustainability. Our mission is to deliver bespoke solutions that propel businesses toward Net Zero Carbon Emissions, optimize efficiency, and unlock new revenue streams."
      />
      <div className='bg-antiflashWhite w-full'>

        {/* Hero Section */} 
        <section className='flex max-w-[1400px] pb-14 mx-auto px-4 pt-28 justify-center items-center'>
          <div className="flex flex-col text-center  items-center justify-center space-y-6">
            <h1 className="text-charcoal uppercase font-extrabold">The <span className="text-paynesGray">Rise</span> of Phoenix <span className="text-paynesGray">Energy</span></h1>
            <p className="mt-4 text-paynesGray max-w-[1000px]">Phoenix Energy was created to make renewable energy both accessible and transformative across Africa. We set ourselves apart by providing bespoke, turnkey solutions that go beyond conventional energy savings. Our approach gives businesses a comprehensive roadmap and an array of renewable energy solutions designed not only to drive them toward Net Zero Carbon Emissions but also to enhance efficiency and unlock new revenue streams. For us, it&apos;s not just about saving—it&apos;s about empowering businesses to earn, grow, and thrive sustainably. </p>
          </div>
        </section>

        {/* Our Mission */} 
        <div className="bg-paynesGray py-14">
        <section className='max-w-[1400px] mx-auto px-4'>
          <div className="flex flex-col text-center  items-center justify-center space-y-6">
            <h2 className="text-antiflashWhite uppercase font-extrabold">Our Mission</h2>
            <p className="mt-4 max-w-[1000px] text-antiflashWhite">We believe in an Africa where renewable energy fuels unstoppable growth  and lasting sustainability. Our mission is to deliver bespoke solutions that propel businesses toward Net Zero Carbon Emissions, optimize efficiency, and unlock new revenue streams. <br /><br /> 
            <span className="font-semibold text-atomicTangerine">Clean</span> energy. <span className="font-semibold text-atomicTangerine">Thriving</span> enterprises. A <span className="font-semibold text-atomicTangerine">prosperous</span>, resilient <span className="font-semibold text-atomicTangerine">Africa.</span></p>
          </div>
        </section>
        </div>

        {/* Our Values */} 
        <section className='max-w-[1400px] py-14 mx-auto px-4'>
          <div className="text-center justify-center space-y-6">
            <h2 className="text-charcoal uppercase font-extrabold">Our <span className="text-paynesGray">Values</span></h2>
            <p className="mt-4 text-paynesGray"></p>

            <div className="mt-12 flex flex-wrap justify-center w-full gap-8">
                            
              {/*Empathy */}
              <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-col items-start justify-start text-start space-y-4">
                  <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                      <Image src={`${basePath}/icons/empathy.png`} alt="icon" width={25} height={25} />
                  </div>
                  <h3 className="text-antiflashWhite whitespace-pre-wrap font-bold">
                      Empathy
                  </h3>
                  <div className="font-inter text-lg text-antiflashWhite">
                      <p>
                      We put people first, understanding our clients&apos; unique needs to create meaningful, impactful solutions.
                      </p>
                  </div>
              </div>

              {/* Pioneering */}
              <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-col items-start justify-start text-start space-y-4">
                  <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                      <Image src={`${basePath}/icons/pioneering.png`} alt="icon" width={25} height={25} />
                  </div>
                  <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                      Pioneering
                  </h3>
                  <div className="font-inter text-lg text-antiflashWhite">
                      <p>
                      We break new ground with advanced renewable solutions, setting new standards for sustainable growth in business.
                      </p>
                  </div>
              </div>

              {/*Trust */}
              <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-col items-start justify-start text-start space-y-4">
                  <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                      <Image src={`${basePath}/icons/brand-rep.png`} alt="icon" width={25} height={25} />
                  </div>
                  <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                      Trust
                  </h3>
                  <div className="font-inter text-lg text-antiflashWhite">
                      <p>
                      We build lasting partnerships rooted in integrity, transparency, and unwavering reliability.
                      </p>
                  </div>
              </div>

              {/*Better Combustion */}
              <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-col items-start justify-start text-start space-y-4">
                  <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                      <Image src={`${basePath}/icons/sustainable.png`} alt="icon" width={25} height={25} />
                  </div>
                  <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                    Conscience
                  </h3>
                  <div className="font-inter text-lg text-antiflashWhite">
                      <p>
                      Everything we do is driven by our commitment to creating positive change for the planet and future generations.
                      </p>
                  </div>
              </div>

              {/*Better Combustion */}
              <div className="bg-paynesGray p-6 rounded-3xl shadow-md w-full lg:w-1/4 flex flex-col items-start justify-start text-start space-y-4">
                  <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                      <Image src={`${basePath}/icons/flame.png`} alt="icon" width={25} height={25} />
                  </div>
                  <h3 className="font-bold text-antiflashWhite whitespace-pre-wrap">
                  Inspiration
                  </h3>
                  <div className="font-inter text-lg text-antiflashWhite">
                      <p>
                      We inspire businesses by creating new opportunities to deliver efficient, sustainable services—empowering them to inspire their own customers.
                      </p>
                  </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Team */}
        <div className="bg-antiflashWhite pb-14">
          <section className='max-w-[1400px] mx-auto px-4'>
            <div className="text-center justify-center space-y-6">
              <h2 className="text-charcoal uppercase font-extrabold">Meet the Team</h2>
              <p className="mt-4 text-paynesGray"></p>

              <div className="mt-12 flex flex-wrap justify-center items-center w-full gap-8">
                {teamInfo.map((teamMember,index) => (
                  <div key={index} className="flex flex-grow items-center justify-center">
                    <TeamMemberCard 
                    fullname={teamMember.fullname}
                    bio={teamMember.bio}
                    headshot={teamMember.headshot}
                    />
                  </div>
                ))}       
                

              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section id="about-us-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-left w-full h-full py-14 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Home-Page-CTA.png)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto px-4">
                        
                          <div className="flex flex-col rounded-3xl w-full items-center justify-center gap-4 text-antiflashWhite">
                            <h2 className="font-extrabold uppercase">Become a part of our journey</h2>
                            <p className="max-w-[1000px]">We&apos;re always looking for passionate, ambitious and like-minded individuals who share our vision for a prosperous Africa. Join us in driving renewable energy forward and creating a lasting impact.</p>
                            <button 
                                    type="button" 
                                    onClick={() => window.open("https://www.linkedin.com/company/phoenix-energy-solutions/jobs/","_blank")}
                                    className="get-in-touch-button-alt px-4 py-2 rounded-full hidden lg:block">
                                    See career oppurtunities
                            </button>
                          </div>
                            

                        </div>

                    </div>
                </section>

      </div>
    </>
    );
  };
  
  export default About;