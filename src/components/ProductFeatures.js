import React from 'react';
import Phone3 from '../assets/phone33.jpg';
import Swift from '../assets/swift.png';
import Kotlin from '../assets/kotlin.png';
import BlurBackground from '../assets/bb2.jpg'; 

function ProductFeatures() {
  return (
    <div className="bg-black text-white min-h-screen p-10">
    
      <div className="flex flex-col lg:flex-row justify-center items-start space-y-10 lg:space-y-0 lg:space-x-10">

        
        <div className="relative bg-black shadow-lg rounded-lg w-full lg:w-2/3">
          {/* Phone Image */}
          <img
            src={Phone3}
            alt="Phone"
            className="rounded-lg w-full h-auto object-cover"
          />
        
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h2 className="text-lg lg:text-xl font-bold mb-2">Ultraportable</h2>
            <p className="text-gray-400">
              A from-the-ground-up redesigned<br></br> user interface makes Linear Mobile both <br></br>light in weight and strong in performance.
            </p>
          </div>
        </div>

        {/* Right Section - Fully Native */}
        <div className="bg-black shadow-lg rounded-lg p-6 w-full lg:w-1/3 flex flex-col justify-start items-center relative">
          
          
          <div
            className="absolute inset-0 bg-center bg-cover filter blur-lg opacity-50 rounded-lg"
            style={{
              backgroundImage: `url(${BlurBackground})`,
            }}
          ></div>

          <div className="flex justify-center space-x-6 mb-4 relative z-10">
            {/* Swift Icon with Shadow Box */}
            <div className="bg-black p-6 rounded-lg shadow-lg flex justify-center items-center">
              <img
                src={Swift}
                alt="Swift"
                className="h-16 w-16"
              />
            </div>
           
            <div className="bg-black p-6 rounded-lg shadow-lg flex justify-center items-center">
              <img
                src={Kotlin}
                alt="Kotlin"
                className="h-16 w-16"
              />
            </div>
          </div>

          {/* Textual Content */}
          <div className="text-center relative z-10">
            <h2 className="text-lg lg:text-xl font-bold mb-2">Fully Native</h2>
            <p className="text-gray-400 text-left">
              Linear Mobile is built with native Swift and Kotlin code to guarantee a fast and fluid user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures;
