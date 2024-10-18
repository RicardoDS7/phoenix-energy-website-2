// import Image from 'next/image';

interface BrandsCard {
    logoPath: string;  // Path to the logo image
    altText: string;   // Alt text for the logo
    link: string;      // Link to redirect when the card is clicked
  }

const BrandsCard: React.FC<BrandsCard> = ({ logoPath, altText, link }) => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    console.log(`Brand Image ${logoPath} for ${basePath}`)

    return (
        <div className="bg-white rounded-3xl shadow-md w-[150px] h-[150px] flex items-center justify-center">
            {/* Outer container with rounded corners */}
                {/* Logo */}
                <img
                src={`${basePath}${logoPath}`}
                alt={altText}
                className='rounded-3xl'
                width={512}
                height={512}
                />
        </div>
    )
}

export default BrandsCard