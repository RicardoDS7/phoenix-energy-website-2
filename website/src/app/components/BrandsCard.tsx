// import Image from 'next/image';

interface BrandsCard {
    logoPath: string;  // Path to the logo image
    altText: string;   // Alt text for the logo
  }

const BrandsCard: React.FC<BrandsCard> = ({ logoPath, altText }) => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    console.log(`Brand Image ${logoPath} for ${basePath}`)

    return (
        <div className="bg-antiflashWhite rounded-7xl w-[150px] h-[150px] flex items-center justify-center">
            {/* Outer container with rounded corners */}
                {/* Logo */}
                <img
                src={`${basePath}${logoPath}`}
                alt={altText}
                className='rounded-full'
                width={512}
                height={512}
                />
        </div>
    )
}

export default BrandsCard