'use client';
import React from 'react';
interface HowItWorksButtonProps {
    section: string;     // The title text for the hero section
  }

const HowItWorksButton: React.FC<HowItWorksButtonProps> = ({section}) => {

    return (
      <button 
        type="button" 
        onClick={() => window.location.href = `#${section}`}
        className="how-it-works-button px-4 py-2 rounded-full hidden lg:block"
      >
        How it works
      </button>
    );
  };
  
  export default HowItWorksButton;