import React from 'react';
import LeftUpdateImage from '../assets/leftupdate.jpg'; // Placeholder for left image
import RightPRDImage from '../assets/rightupdate.jpg'; // Placeholder for right image

function ProjectPage() {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Column */}
        <div className="space-y-6 border-r border-gray-600 pr-8">
          <div className="pl-4 lg:pl-8">
            <h2 className="text-2xl font-bold">Read and write project updates</h2>
            <p className="text-gray-400">
              Keep everyone informed about the health <br /> and progress of your projects.
            </p>
          </div>
          <img
            src={LeftUpdateImage}
            alt="Project Updates"
            className="w-full rounded-lg shadow-lg mt-4"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 pl-8">
          <div className="pl-4 lg:pl-8">
            <h2 className="text-2xl font-bold">PRDs-to-go</h2>
            <p className="text-gray-400">
              Review and react to product specs and <br /> other documents in a compact, mobile-<br />optimized reading experience.
            </p>
          </div>
          <img
            src={RightPRDImage}
            alt="PRDs-to-go"
            className="w-full rounded-lg shadow-lg mt-4"
          />
        </div>

      </div>
    </div>
  );
}

export default ProjectPage;
