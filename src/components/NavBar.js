import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-[95%] max-w-7xl top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-white/10 backdrop-blur-sm'
      } rounded-lg shadow-lg py-3 px-6`}
    >
      <div className="flex justify-between items-center">
        
        <div className="flex items-center space-x-2 text-xl font-semibold text-white">
          <span>Linear</span>
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="32"
            height="32"
            viewBox="0 0 100 100"
            className="w-8 h-8"
          >
            <path
              fill="#ffffff"
              d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"
            />
          </svg>
        </div>

        
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        
        <div className="hidden lg:flex space-x-6 text-white">
          {['Features', 'Method', 'Customers', 'Changelog', 'Pricing', 'Company', 'Contact'].map((link) => (
            <a key={link} href="#" className="hover:text-gray-300 transition duration-300">
              {link}
            </a>
          ))}
        </div>

        
        <div className="flex space-x-4">
          <button className="text-white">Log in</button>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
            Sign up
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-2 text-center text-white">
          {['Features', 'Method', 'Customers', 'Changelog', 'Pricing', 'Company', 'Contact'].map((link) => (
            <a key={link} href="#" className="block hover:text-gray-300 transition duration-300">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
