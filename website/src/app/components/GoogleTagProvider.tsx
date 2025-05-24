'use client';

import { useEffect } from 'react';

const GTM_ID = 'GTM-NCPX3X4B';

export const GTMProvider = () => {
  useEffect(() => {
    if (!GTM_ID) {
      console.error("Google Tag Manager ID is missing!");
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'gtm.js' });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
};
