import React from 'react';
import LeftPhoneImage from '../assets/leftimg.jpg'; // Placeholder for left phone image
import RightPhoneImage from '../assets/rightimg.jpg'; // Placeholder for right phone image

function IssuePage() {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Create issues in seconds</h2>
          <p className="text-gray-400">
            The quick-access issue composer is designed with an obsessive focus on speed.
            So you can jot down ideas as they come.
          </p>
          <div className="mt-8">
            <img
              src={LeftPhoneImage}
              alt="Left Phone"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">From screenshot to triage in a few simple taps</h2>
          <p className="text-gray-400">
            Quickly share screenshots or photos with Linear to initiate new issues or bug reports.
          </p>
          <div className="mt-8">
            <img
              src={RightPhoneImage}
              alt="Right Phone"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default IssuePage;
