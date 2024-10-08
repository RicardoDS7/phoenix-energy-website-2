import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='w-full overflow-hidden h-screen z-0'>
      <Image src='/images/home_page_banner.png' alt="Banner Image" layout="fill" objectFit="cover" quality={100} priority />
    </div>
  );
};

export default HomePage;
