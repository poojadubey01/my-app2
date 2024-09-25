import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '../assets/smartphone.jpg';

function FrameComp() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  // Effect to detect when the text comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section is in view, set isVisible to true, else false
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the section is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content (Text and Button) */}
      <div
        ref={contentRef}
        className={`relative z-10 text-white text-center max-w-2xl px-6 transition-opacity duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Button */}
        <button className="mb-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 inline mr-2"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch demo
        </button>

        {/* Text */}
        <h2 className="text-xl font-bold mb-2">Built for “away from keyboard” activities.</h2>
        <p className="text-lg">
          Linear Mobile is purpose-designed for on-demand workflows that complement the desktop experience. A powerful sidekick, always available in your pocket.
        </p>
      </div>
    </section>
  );
}

export default FrameComp;
