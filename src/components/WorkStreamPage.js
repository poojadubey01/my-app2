import React from 'react';
import Phone2 from '../assets/inbox.jpg';

function WorkStreamsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      
      {/* Text Section */}
      <div className="text-center px-6 lg:px-24">
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Stay on top of your most<br />important streams of work
        </h1>

        {/* Subheading (Modified to two lines and larger size) */}
        <p className="text-lg lg:text-2xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          The inbox keeps you informed about high-priority tasks and projects
          that need your attention. Tap to take action, swipe to delete, snooze to deal with it later.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2">
        <img
          src={Phone2} 
          alt="Phone Inbox"
          className="mx-auto rounded-lg"
        />

        {/* Side Text for Swiping Directions */}
        <div className="absolute top-1/2 left-0 text-gray-500 text-xs transform -translate-y-1/2 -translate-x-6 rotate-90">
          SWIPE RIGHT TO MARK AS UNREAD
        </div>
        <div className="absolute top-1/2 right-0 text-gray-500 text-xs transform -translate-y-1/2 translate-x-6 rotate-90">
          SWIPE LEFT TO DELETE
        </div>
      </div>
    </div>
  );
}

export default WorkStreamsPage;
