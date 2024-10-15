'use client';
import  HeroSection from '../../components/HeroSection';
import  GetInTouchButton from '../../components/GetInTouchButton';
import BrandsCard from '@/app/components/BrandsCard';

const CarbonCredits = () => {
    return (
            <div>
            <HeroSection 
                title='Carbon Credits'
                subtitle='Earn more with Carbon Credits'
            />

                {/* What Are carbon Credits? */}
                <section className="relative w-full p-14 bg-paynesGray flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h2 className="text-4xl text-antiflashWhite font-inter md:text-5xl lg:text-6xl font-bold">What are Carbon Credits?</h2>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>

                {/* Companies Purchasing Carbon Credits */}
                <section className="relative w-full py-14 flex items-center justify-center bg-antiflashWhite overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h3 className="text-4xl text-charcoal font-inter md:text-3xl lg:text-4xl font-semibold">Major companies buying Carbon Credits</h3>

                        <div>
                            <ul className='flex justify-evenly'>
                                <li>
                                    <BrandsCard
                                    logoPath = '/images/brands/nedbank-logo.svg'
                                    altText = 'nedbank-logo'   // Alt text for the logo
                                    link= '#'
                                    />
                                </li>

                                <li>
                                    <BrandsCard
                                    logoPath = '/images/brands/sasol-logo.svg'
                                    altText = 'sasol-logo'   // Alt text for the logo
                                    link= '#'
                                    />
                                </li>

                                <li>
                                    <BrandsCard
                                    logoPath = '/images/brands/vw-logo.svg'
                                    altText = 'volkswagen-logo'   // Alt text for the logo
                                    link= '#'
                                    />
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

                {/* How to earn Carbon Credits? */}
                <section className="relative w-full p-14 bg-antiflashWhite flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h1 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">How can I earn Carbon Credits?</h1>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>

                {/* How to earn Carbon Credits? */}
                <section id='how-it-works-carbon-credits' className="relative w-full p-14 flex items-center justify-center overflow-hidden">

                    <div className="relative z-10 text-center  px-4">
                        <h1 className="text-4xl text-charcoal font-inter md:text-5xl lg:text-6xl font-bold">Our Process</h1>
                    
                        <div className='mt-6 flex align-middle items-center justify-center'>
                            <GetInTouchButton />
                        </div>

                    </div>

                </section>
            </div>
    )
}

export default CarbonCredits;
