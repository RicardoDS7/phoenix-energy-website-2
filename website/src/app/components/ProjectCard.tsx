import Image from 'next/image';
import { ProjectInfo } from '../projects/projectConstants';


const ProjectCard: React.FC<ProjectInfo> = ({ company, solutions, location, production, featured_image }) => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <div className="flex flex-col space-y-2">
            <Image
                src={`${basePath}${featured_image}`}
                alt={`${company} portrait`}
                className="object-cover rounded-3xl h-[202.5px] w-full"
                width={300}
                height={300}
            />
            <div className="pb-4 px-4 space-y-2 text-start">
                <p className="text-base font-bold">{company}</p>

                {/* Location */}
                <div className='flex flex-row items-center justify-start gap-2'>
                    <div className='rounded-3xl p-1 flex-grow-0 w-auto'>
                        <Image src={`${basePath}/icons/address-alt.png`} alt="icon" width={15} height={15} />
                    </div>
                    <p className="text-sm">{location}</p>
                </div>

                {/* System */}
                <div className='flex flex-row items-center justify-start gap-2'>
                    <div className='rounded-3xl p-1 flex-grow-0 w-auto'>
                        <Image src={`${basePath}/icons/system.png`} alt="icon" width={15} height={15} />
                    </div>
                    <p className="text-sm">{solutions}</p>
                </div>

                {/* Power Production */}
                <div className='flex flex-row items-center justify-start gap-2'>
                    <div className='rounded-3xl p-1 flex-grow-0 w-auto'>
                        <Image src={`${basePath}/icons/bolt-alt.png`} alt="icon" width={15} height={15} />
                    </div>
                    <p className="text-sm">{production}</p>
                </div>

                
            </div>
        </div>
    );
}

export default ProjectCard;
