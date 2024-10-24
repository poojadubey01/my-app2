import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/phone22.jpg';

function FrameComp() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

   
      <div
        ref={contentRef}
        className={`relative z-10 text-white text-left max-w-lg px-6 transition-opacity duration-1000 ease-out transform mb-20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Watch Demo Button */}
        <button className="mb-4 px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 inline mr-2"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </button>

        {/* Heading and Paragraph */}
        <h2 className="text-sm xs:text-base md:text-lg font-bold mb-2">
          Built for “away from keyboard” activities.
        </h2>
        <p className="text-xs xs:text-sm md:text-base">
          Linear Mobile is purpose-designed for on-demand workflows that
          complement the desktop experience. A powerful sidekick, always
          available in your pocket.
        </p>
      </div>
    </section>
  );
}

export default FrameComp;
