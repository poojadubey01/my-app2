import React from 'react';
import NotificationImage from '../assets/Notify.jpg'; // Placeholder for the left image

function NotificationPage() {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={NotificationImage}
            alt="Notification"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Available 24/7. <br /> Or just 9–5.</h2>
          <p className="text-gray-400">
            Receive push notifications about important updates in realtime (but not all the time).
          </p>
          
          <div className="flex space-x-4 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">📲</span>
              </div>
              <h3 className="font-semibold">Realtime notifications</h3>
              <p className="text-gray-400 text-sm">
                Stay up-to-date on important work streams and instantly take action wherever and whenever necessary.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">⏰</span>
              </div>
              <h3 className="font-semibold">Notification schedule</h3>
              <p className="text-gray-400 text-sm">
                Configure your own notification schedule to only stay in touch with your work during certain time periods.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NotificationPage;
