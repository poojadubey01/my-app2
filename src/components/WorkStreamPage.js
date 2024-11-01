import React from 'react';
import Phone2 from '../assets/inbox.jpg'; // Use your inbox image here

function WorkStreamsPage() {
  return (
    <div className="relative bg-black min-h-screen text-white flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-80 mb-48"
        style={{
          backgroundImage: `url(${Phone2})`,
          backgroundSize: '90%', // Adjust to make the image smaller
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay for the text */}
      <div className="relative z-7 text-center h-[60rem] px-6 lg:px-24">
        {/* Main Heading */}
        <h1 className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
          Stay on top of your most<br />important streams of work
        </h1>

        {/* Subheading */}
        <p className="text-sm lg:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
          The inbox keeps you informed about high-priority <br />tasks and projects
          that need your attention. Tap to take <br />action, swipe to delete, snooze to deal with it later.
        </p>
      </div>

      {/* Instructions on swiping */}
      
      </div>
  
  );
}

export default WorkStreamsPage;
