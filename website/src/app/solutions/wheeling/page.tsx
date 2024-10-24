'use client';

import HeroSectionS2S from '@/app/components/HeroSectionS2S';

const Wheeling = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
          <div className='bg-antiflashWhite'>

              {/* Hero Section */} 
              <section className='max-w-[1400px] mx-auto px-4'>
                  <HeroSectionS2S 
                      title='Cheaper, Greener, Virtual Power.'
                      subtitle='A carbon credit is a certificate representing the reduction of one ton of CO₂ from the atmosphere. Businesses can earn or purchase them by investing in emission-reducing projects like renewable energy or reforestation.'
                      imagePath={`${basePath}/images/Wheeling-Hero-Image.png`}
                      altText='Carbon Credits Coin'
                      width={2048}
                      height={2048}
                  />
              </section>

              
          </div>
  )
}

export default Wheeling;
