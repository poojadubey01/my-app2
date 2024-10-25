import React from 'react';
import Phone2 from '../assets/inbox.jpg'; // Use your inbox image here

function WorkStreamsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white relative">
      
      {/* Text Section */}
      <div className="text-center px-6 lg:px-24 mt-16">
        {/* Main Heading */}
        <h1 className="text-3xl lg:text-6xl font-semi-bold mb-6 leading-tight">
          Stay on top of your most<br />important streams of work
        </h1>

        {/* Subheading */}
        <p className="text-sm lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
          The inbox keeps you informed about high-priority <br />tasks and projects
          that need your attention. Tap to take <br />action, swipe to delete, snooze to deal with it later.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/3 flex justify-center items-center mb-16">
        <img
          src={Phone2} 
          alt="Phone Inbox"
          className="mx-auto rounded-lg shadow-lg object-cover object-center"
          style={{ maxHeight: '500px', maxWidth: '100%' }}
        />

       
        <div className="absolute top-1/2 left-0 text-gray-500 text-xs transform -translate-y-1/2 -translate-x-6 rotate-90">
          SWIPE RIGHT TO<br />MARK AS UNREAD
        </div>
        <div className="absolute top-1/2 right-0 text-gray-500 text-xs transform -translate-y-1/2 translate-x-6 rotate-90">
          SWIPE LEFT TO<br />DELETE
        </div>
      </div>
    </div>
  );
}

export default WorkStreamsPage;
