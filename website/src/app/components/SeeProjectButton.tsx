'use client';

import { CONTACT_PAGE } from '../constants/constants';  // Import the constants
import { useRouter } from 'next/navigation';

const SeeProjectButton = () => {

    const router = useRouter();  // Initialize the router

    const handleRedirect = () => {
        // Redirect to the desired contact us page
        router.push(CONTACT_PAGE);
    };

    return (
      <button 
        type="button" 
        onClick={handleRedirect}
        className="get-in-touch-button px-4 py-2 rounded-full hidden lg:block"
      >
        Get in touch
      </button>
    );
  };
  
  export default SeeProjectButton;