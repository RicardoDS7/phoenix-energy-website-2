import Image from 'next/image';

interface BrandsCard {
    logoPath: string;  // Path to the logo image
    altText: string;   // Alt text for the logo
    link: string;      // Link to redirect when the card is clicked
  }

const BrandsCard: React.FC<BrandsCard> = ({ logoPath, altText, link }) => {

    return (
        <div className="flex items-center justify-center w-full">
            {/* Outer container with rounded corners */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-3xl shadow-md w-[150px] h-[150px] flex items-center justify-center"
            >
                {/* Logo */}
                <Image
                src={logoPath}
                alt={altText}
                className='p-2'
                width={512}
                height={512}
                />
            </a>
        </div>
    )
}

export default BrandsCard