import './styles/globals.css';  // Import global styles
import NavBar from './components/NavBar';  // Import NavBar component
import Footer from './components/Footer';  // Import Footer component
import Script from 'next/script';

export const metadata = {
  title: 'Phoenix Energy - Renewable Energy Solutions',
  description: `Phoenix Energy offers innovative renewable energy solutions, including embedded solar systems, 
                battery storage, hydrogen technology, waste valorisation, carbon credits, and energy wheeling services. 
                Harness the power of sustainable energy for a greener future today!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <html lang="en" className='smooth-scroll'>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NCPX3X4B');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={`${basePath}/logo.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCPX3X4B"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        < NavBar />
        <main>{children}</main>
        < Footer />
      </body>
    </html>
  )
}
