import React from 'react';
import Phone3 from '../assets/phone33.jpg';
import Swift from '../assets/swift.png';
import Kotlin from '../assets/kotlin.png';
function ProductFeatures() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col lg:flex-row justify-center items-center p-10 space-y-10 lg:space-y-0 lg:space-x-10">
      
    
      <div className="bg-black shadow-lg rounded-lg p-6 w-full lg:w-1/2">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Phone3}
            alt="Phone"
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Ultraportable</h2>
          <p className="text-gray-400 text-center">
            A from-the-ground-up redesigned user interface makes Linear Mobile both light in weight and strong in performance.
          </p>
        </div>
      </div>

      
      <div className="bg-black shadow-lg rounded-lg p-6 w-full lg:w-1/2">
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-4 mb-4">
            {/* Swift Icon */}
            <img
              src={Swift}
              alt="Swift"
              className="h-16 w-16"
            />
            {/* Kotlin Icon */}
            <img
              src={Kotlin}
              alt="Kotlin"
              className="h-16 w-16"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Fully Native</h2>
          <p className="text-gray-400 text-center">
            Linear Mobile is built with native Swift and Kotlin code to guarantee a fast and fluid user experience.
          </p>
        </div>
      </div>

    </div>
  );
}

export default ProductFeatures;
