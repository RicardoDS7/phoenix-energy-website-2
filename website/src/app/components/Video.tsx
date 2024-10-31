// components/OptimizedVideo.tsx

import React, { useState, useRef } from 'react';

interface OptimizedVideoProps {
    src: string;
    poster: string;
    width?: string;
    height?: string;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({ src, poster, width = '800px', height = '450px' }) => {
    const [showPoster, setShowPoster] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Hide poster and play button when video starts playing
    const handlePlay = () => {
        setShowPoster(false);
    };

    return (
        <div className="relative w-full max-w-[width] rounded-3xl overflow-hidden" style={{ width: '100%', maxWidth: width, position: 'relative'}}>
            {showPoster && (
                <>
                    <img
                        src={poster}
                        alt="Video poster"
                        style={{
                            width: '100%',
                            height: height,
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            cursor: 'pointer'
                        }}
                        onClick={() => videoRef.current?.play()} // Play video on poster click
                    />
                    <div
                        onClick={() => videoRef.current?.play()} // Play video on button click
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2,
                            cursor: 'pointer',
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Play Icon */}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                    </div>
                </>
            )}
            <video
                ref={videoRef}
                controls
                preload="metadata"
                poster={poster} // Keep poster set in video for compatibility
                onPlay={handlePlay} // Hide poster and play button on play
                width="100%"
                height={height}
                style={{ objectFit: 'cover' }}
            >
                <source src={`${src}#t=0.1`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default OptimizedVideo;
