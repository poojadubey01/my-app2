import React from 'react';
import Phone2 from '../assets/phone2.webp';
function WorkStreamsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      
      
      <div className="text-center px-6 lg:px-24">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Stay on top of your most important streams of work
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 mb-10">
          The inbox keeps you informed about high-priority tasks and projects
          that need your attention. Tap to take action, swipe to delete, snooze to deal with it later.
        </p>
      </div>

      
      <div className="relative w-full lg:w-1/2">
        <img
          src={ Phone2} 
          alt="Phone Inbox"
          className="mx-auto rounded-lg"
        />

        
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
