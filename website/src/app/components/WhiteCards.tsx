import Image from 'next/image';

interface WhiteCard {
    title: string;  // Path to the logo image
    content: string;   // Alt text for the logo
  }

const WhiteCard: React.FC<WhiteCard> = ({ title, content }) => {

    return (
        <div className="bg-antiflashWhite p-6 rounded-3xl shadow-md w-full flex flex-col items-start justify-start text-start space-y-4">
            <div className="rounded-full bg-powderBlue p-4 justify-end items-end">
                <Image src="/icons/green-electric.svg" alt='icon' width={25} height={25} />
            </div>
            <h3 className="text-6xl font-inter font-bold text-paynesGray">{title}</h3>
            <p className="font-inter text-lg text-charcoal">{content}</p>
        </div>
    )
}

export default WhiteCard