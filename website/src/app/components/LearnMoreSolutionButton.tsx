'use client';


import { useRouter } from 'next/navigation';

interface LearnMoreProps {
    buttonText: string;
    path: string;
  }

const LearnMoreButton: React.FC<LearnMoreProps> = ({buttonText,path}) => {

    const router = useRouter();  // Initialize the router

    const handleRedirect = () => {
        // Redirect to the desired contact us page
        router.push(path);
    };

    return (
      <button 
        type="button" 
        onClick={handleRedirect}
        className="get-in-touch-button px-4 py-2 rounded-full hidden lg:block"
      >
        {buttonText}
      </button>
    );
  };
  
  export default LearnMoreButton;