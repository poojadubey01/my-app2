import React from 'react';
import PhoneImageLeft from '../assets/phone-left.jpg'; // Import the left phone image
import PhoneImageRight from '../assets/phone-right.jpg'; // Import the right phone image

function FocusPage() {  // Changed component name to FocusPage
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white relative">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 lg:px-24 mt-16 space-y-12 lg:space-y-0 lg:space-x-16">
        
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Title */}
          <h2 className="text-2xl lg:text-2xl font-semibold mb-2 leading-tight">
            React to what matters most...
          </h2>

          {/* Subheading */}
          <p className="text-sm lg:text-lg text-gray-400 mb-8 leading-relaxed">
            Discuss and update issue details on the fly <br></br>to unblock your team and keep work <br></br> progressing.
          </p>

          {/* Phone Image */}
          <div className="relative">
            <img 
              src={PhoneImageLeft} 
              alt="Phone Left"
              className="rounded-lg shadow-lg object-cover object-center w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Title */}
          <h2 className="text-2xl lg:text-2xl font-semibold mb-2 leading-tight">
            ...snooze the rest for later
          </h2>

          {/* Subheading */}
          <p className="text-sm lg:text-lg text-gray-400 mb-8 leading-relaxed">
            Temporarily remove notifications from your <br></br>inbox to focus on what matters in the <br></br>present moment.
          </p>

          {/* Phone Image */}
          <div className="relative">
            <img 
              src={PhoneImageRight} 
              alt="Phone Right"
              className="rounded-lg shadow-lg object-cover object-center w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusPage;  // Changed export name to FocusPage
