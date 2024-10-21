import React from 'react';
import GetInTouchButton from './GetInTouchButton';
import  HowItWorksButton from './HowItWorksButton';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;     // The title text for the hero section
  subtitle: string; // Optional subtitle text for the hero section
  imagePath: string; // Optional subtitle text for the hero section
  altText: string
  width: number;
  height: number
}

const HeroSectionS2S: React.FC<HeroSectionProps> = ({title, subtitle,imagePath,altText,width,height }) => {

  return (
    <section className="relative pt-28 w-full flex items-center justify-center px-6 lg:px-12 xl:px-48">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
        
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center md:text-left space-y-6">
          <h1 className="text-charcoal text-3xl md:text-7xl font-bold">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-paynesGray">{subtitle}</p>
          )}
          <div className="mt-6 flex flex-row gap-4 justify-center md:justify-start items-center">
            <HowItWorksButton sectionID="how-it-works-carbon-credits" />
            <GetInTouchButton />
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <Image src={imagePath} alt={altText} width={width} height={height} className="rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionS2S;
