import Image from 'next/image';

interface TeamMemberInfo {
    fullname: string;  // Path to the logo image
    bio: string;   // Alt text for the logo
    headshot: string;   // Alt text for the logo
  }

const TeamMemberCard: React.FC<TeamMemberInfo> = ({ fullname, bio, headshot }) => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <div className="bg-antiflashWhite rounded-3xl max-w-[300px] flex flex-col space-y-2 items-center justify-center">
            <Image
            src={`${basePath}${headshot}`}
            alt={`${fullname} portrait`}
            className='rounded-3xl w-full bg-white object-cover max-h-[300px]'
            width={256}
            height={256}
            />
            <div className='pb-4 px-4'>
                <h4 className='text-charcoal'>{fullname}</h4>
                <p className='text-paynesGray'>{bio}</p>
            </div>

        </div>
    )
}

export default TeamMemberCard