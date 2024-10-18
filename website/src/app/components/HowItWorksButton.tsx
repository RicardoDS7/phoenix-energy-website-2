'use client';
import React from 'react';
interface HowItWorksButtonProps {
    sectionID: string;     // The title text for the hero section
  }

const HowItWorksButton: React.FC<HowItWorksButtonProps> = ({sectionID}) => {

  const scrollToSection = () => {
      const section = document.getElementById(sectionID);

      if (section) {
        const offset = 100; // Adjust the offset
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth' // Smooth scroll behavior
        });
      } else {
        console.error("Section with ID 'faq' not found");
      }
  }
      

    return (
      <button 
        type="button" 
        onClick={scrollToSection}
        className="how-it-works-button px-4 py-2 rounded-full hidden lg:block"
      >
        How it works
      </button>
    );
  };
  
  export default HowItWorksButton;