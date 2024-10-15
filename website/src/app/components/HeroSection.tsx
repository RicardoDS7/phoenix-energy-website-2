import React from 'react';
import GetInTouchButton from './GetInTouchButton';
import  HowItWorksButton from './HowItWorksButton';

interface HeroSectionProps {
  title: string;     // The title text for the hero section
  subtitle?: string; // Optional subtitle text for the hero section
}

const HeroSection: React.FC<HeroSectionProps> = ({title, subtitle }) => {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl text-charcoal font-inter md:text-6xl lg:text-8xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-xl font-inter text-paynesGray md:text-2xl">{subtitle}</p>}
        
        <div className='mt-6 flex align-middle items-center justify-center gap-2'>
          <HowItWorksButton 
          section = 'how-it-works-carbon-credits'/>
          <GetInTouchButton />
        </div>

      </div>
      
      
    </section>
  );
};

export default HeroSection;
