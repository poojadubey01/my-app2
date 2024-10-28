import React from 'react';
import NotificationImage from '../assets/Notify.jpg'; // Placeholder for the background image

function NotificationPage() {
  return (
    <div className="relative bg-black text-white py-20 px-4">
      {/* Background Image */}
      <div className="relative">
        <img
          src={NotificationImage}
          alt="Notification"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />

        {/* Overlay Content on the Right */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-black via-transparent to-transparent px-8 py-16 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold">Available 24/7. <br /> Or just 9–5.</h2>
          <p className="text-gray-300">
            Receive push notifications about important updates in realtime (but not all the time).
          </p>
          
          <div className="flex space-x-6 mt-8">
            {/* Realtime Notifications */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                <span className="text-xl">📲</span>
              </div>
              <h3 className="font-semibold">Realtime notifications</h3>
              <p className="text-gray-400 text-sm">
                Stay up-to-date on important work streams and instantly take action wherever and whenever necessary.
              </p>
            </div>

            {/* Notification Schedule */}
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
