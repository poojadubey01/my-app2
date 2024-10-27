import React from 'react';
import PhoneImage from '../assets/phone32.jpg'; // Placeholder for your phone image

function ProductWorkSection() {
  return (
    <div className="relative bg-black text-white py-20 min-h-screen flex flex-col justify-center items-center">
      
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Move product work forward.</h1>
        <h2 className="text-4xl font-bold">No matter where you are.</h2>
        <p className="mt-6 text-gray-400">
          Write whenever inspiration strikes. With its ergonomic, palm-perfect design,<br />
          Linear Mobile enables you to write issues, comments, and updates from anywhere.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="relative w-full lg:w-2/3 mx-auto">
        <img
          src={PhoneImage}
          alt="Phone Composer"
          className="rounded-lg shadow-lg object-cover object-center"
        />

        {/* Quick Access Label */}
        <div className="absolute left-4 bottom-1/4 text-gray-400 text-xs tracking-widest">
          QUICK ACCESS TO ALL<br />ISSUE PROPERTIES
        </div>

        {/* Ergonomic Composer Label */}
        <div className="absolute right-4 top-1/4 text-gray-400 text-xs tracking-widest">
          ERGONOMIC COMPOSER
        </div>
      </div>
    </div>
  );
}

export default ProductWorkSection;
