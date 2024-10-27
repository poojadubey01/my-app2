import React from 'react';
import LeftUpdateImage from '../assets/leftupdate.jpg'; // Placeholder for left image
import RightPRDImage from '../assets/rightupdate.jpg'; // Placeholder for right image

function ProjectPage() {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Read and write project updates</h2>
          <p className="text-gray-400">
            Keep everyone informed about the health and progress of your projects.
          </p>
          <div className="mt-8">
            <img
              src={LeftUpdateImage}
              alt="Project Updates"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">PRDs-to-go</h2>
          <p className="text-gray-400">
            Review and react to product specs and other documents in a compact, mobile-optimized reading experience.
          </p>
          <div className="mt-8">
            <img
              src={RightPRDImage}
              alt="PRDs-to-go"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectPage;
