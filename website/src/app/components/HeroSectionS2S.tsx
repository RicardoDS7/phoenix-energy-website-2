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
  height: number;
  sectionID: string;
  howItWorksActive: boolean;
}

const HeroSectionS2S: React.FC<HeroSectionProps> = ({title, subtitle,imagePath,altText,width,height,sectionID,howItWorksActive }) => {

  return (
    <div className="relative pt-28 w-full flex items-center justify-center">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <h1 className="text-charcoal uppercase font-extrabold">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-paynesGray">{subtitle}</p>
          )}
          <div className="py-6 flex flex-row gap-4 justify-center md:justify-start items-center">
            {howItWorksActive && (
              <HowItWorksButton sectionID={sectionID} />
            )}
            <GetInTouchButton />
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src={imagePath} alt={altText} width={width} height={height} className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionS2S;
