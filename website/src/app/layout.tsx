import './styles/globals.css';  // Import global styles
import NavBar from './components/NavBar';  // Import NavBar component
import Footer from './components/Footer';  // Import Footer component
import getConfig from 'next/config';

export const metadata = {
  title: 'Phoenix Energy - Renewable Energy Solutions',
  description: `Phoenix Energy offers innovative renewable energy solutions, including embedded solar systems, 
                battery storage, hydrogen technology, waste valorization, carbon credits, and energy wheeling services. 
                Harness the power of sustainable energy for a greener future today!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig.basePath;

  return (
    <html lang="en">
      <head>
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
        < NavBar />
        <main>{children}</main>
        < Footer />
      </body>
    </html>
  )
}
