import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the interface for a single testimonial
interface Product {
    id: number;
    productName: string;
    description: string;
    featuredImage: string; // Path or URL to the image
  }
  
  // Define the interface for Carousel props
  interface CarouselProps {
    products: Product[];
  }

export default function ProductCarousel({products}: CarouselProps) {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateStyle, setTranslateStyle] = useState<{ [key: string]: string }>({});
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const gap = 24; // 32px gap between items
    let baseTranslate: number;
    let pixelOffset: number;

    if (screenWidth >= 768 && screenWidth < 1024) {
      // For medium screens and up (3 items in view)
      baseTranslate = (currentIndex * 100) / 2;
      pixelOffset = currentIndex * gap;
    } else if (screenWidth >= 1024) {
        // For medium screens and up (3 items in view)
      baseTranslate = (currentIndex * 100) / 3;
      pixelOffset = currentIndex * gap;
    } else {
      // For smaller screens (1 item in view)
      baseTranslate = currentIndex * 85;
      pixelOffset = currentIndex * gap;
    }

    // Set the translate style with a CSS variable
    setTranslateStyle({
      '--carousel-translate': `calc(-${baseTranslate}% - ${pixelOffset}px)`,
    });
  }, [currentIndex, products.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      nextSlide(); // Swipe left, go to next slide
    }
    if (startX - endX < -50) {
      prevSlide(); // Swipe right, go to previous slide
    }
  };


  return (
    <div className="relative w-full flex flex-col md:flex-col gap-8 max-w-[1400px] mx-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {/* Navigation Buttons */}
        <div className='flex flex-row items-center justify-between'>
            <h2 className='text-charcoal'>Transforming waste into high-value products</h2>
            <div className='hidden md:block'>
                <div className='flex flex-row justify-end gap-4'>
                    <div className="relative left-0">
                        <button
                        onClick={prevSlide}
                        className="bg-paynesGray text-white px-4 py-2 rounded-full hover:bg-paynesGrayHighlight"
                        >
                        Prev
                        </button>
                    </div>
                    <div className="relative right-0">
                        <button
                        onClick={nextSlide}
                        className="bg-paynesGray text-white px-4 py-2 rounded-full hover:bg-paynesGrayHighlight"
                        >
                        Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* Carousel Content */}
            <div
            className="flex w-full gap-6 transition-transform duration-500"
            style={{
                transform: `translateX(var(--carousel-translate))`,
                ...translateStyle,
              }}
            >
            {products.map((product) => (
                <div
                key={product.id}
                className="relative flex flex-col w-[85%] md:w-1/2 lg:w-1/3 flex-shrink-0 shadow bg-colombiaBlue pb-6 rounded-3xl"
                >
                    <Image className={'rounded-3xl w-full h-[250px] object-cover'} src={`${basePath}${product.featuredImage}`} alt={`${product.productName} case study`} width={300} height={300} />
                    <div className='relative text-center p-6 space-y-2 justify-center items-center'>
                        
                        <p className="text-lg md:text-xl font-black text-charcoal">{product.productName}</p>
                        <p className="text-charcoal mb-4">{product.description}</p>
                        
                    </div>

                </div>
            ))}
            </div>

    </div>
  );
}
