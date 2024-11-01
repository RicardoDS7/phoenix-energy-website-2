'use client';
import HeroSectionS2S from '@/app/components/HeroSectionS2S';
import CallToAction from '@/app/components/CallToAction';

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
