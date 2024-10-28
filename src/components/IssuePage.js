import React from 'react';
import LeftPhoneImage from '../assets/leftimg.jpg'; // Placeholder for left phone image
import RightPhoneImage from '../assets/rightimg.jpg'; // Placeholder for right phone image

function IssuePage() {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Column with Border */}
        <div className="space-y-6 border-r border-gray-600 pr-8">
          <div className="pl-4 lg:pl-24">
            <h2 className="text-2xl font-bold">Create issues in seconds</h2>
            <p className="text-gray-400">
              The quick-access issue composer is<br /> designed with an obsessive focus on <br />speed.
              So you can jot down ideas as they<br /> come.
            </p>
          </div>
          <img
            src={LeftPhoneImage}
            alt="Left Phone"
            className="w-full rounded-lg shadow-lg mt-4"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 pl-8">
          <div className="pl-4 lg:pl-24">
            <h2 className="text-2xl font-bold">From screenshot to triage <br />in a few simple taps</h2>
            <p className="text-gray-400">
              Quickly share screenshots or photos with <br />Linear to initiate new issues or bug reports.
            </p>
          </div>
          <img
            src={RightPhoneImage}
            alt="Right Phone"
            className="w-full rounded-lg shadow-lg mt-4"
          />
        </div>

      </div>
    </div>
  );
}

export default IssuePage;
