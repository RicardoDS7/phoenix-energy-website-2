import React, { useState, useEffect } from 'react';

// Skeleton component (can be customized)
const LoadingSkeleton: React.FC = () => (
  <div className="bg-antiflashWhite flex justify-center w-full h-full" >
    <p className="font-bold text-charcoal">Loading form...</p>
  </div>
);

const ZohoFormEmbed: React.FC = () => {
  // State to track whether the iframe has loaded
  const [isLoading, setIsLoading] = useState(true);

  // Event handler for iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // In case of an error loading the iframe, you can add a timeout here to fallback
  }, []);

  return (
    <div>
      {/* Display loading skeleton while the iframe is loading */}
      {isLoading && <LoadingSkeleton />}

      <iframe
        src="https://forms.zohopublic.com/russellphoeni1/form/TestEmbeddedForm/formperma/OjsIKLiy5r3GL9SIEhxsQeVZjV_JRfJw837vsS25Pzc?zf_rszfm=1"
        title="Zoho Embedded Form"
        frameBorder="0"
        style={{
          height: '933px',
          width: '100%',
          border: 'none',
          backgroundColor: '#f2f3f4',
          display: isLoading ? 'none' : 'block', // Hide iframe until it is loaded
        }}
        aria-label="Contact Form"
        onLoad={handleIframeLoad} // Triggered once iframe is fully loaded
      />
    </div>
  );
};

export default ZohoFormEmbed;
