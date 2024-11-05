import React, { useState, useEffect } from 'react';

// Loading spinner component
const LoadingSkeleton: React.FC = () => (
  <div className="bg-white rounded-3xl flex flex-col justify-center items-center w-full h-[360px] space-y-4">
    {/* Loading Spinner */}
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-atomicTangerine border-opacity-50"></div>
    <p className="font-bold text-charcoal">Loading form...</p>
  </div>
);

const ZohoFormEmbed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Optional: Fallback or timeout for loading errors
  }, []);

  return (
    <div>
      {/* Display loading skeleton while the iframe is loading */}
      {isLoading && <LoadingSkeleton />}

      <iframe
        src="https://forms.zohopublic.com/russellphoeni1/form/TestEmbeddedForm/formperma/OjsIKLiy5r3GL9SIEhxsQeVZjV_JRfJw837vsS25Pzc?zf_rszfm=1"
        title="Zoho Embedded Form"
        className={`h-[1200px] w-full rounded-3xl border-none ${isLoading ? 'hidden' : 'block'}`}
        aria-label="Contact Form"
        onLoad={handleIframeLoad} // Triggered once iframe is fully loaded
      />
    </div>
  );
};

export default ZohoFormEmbed;
