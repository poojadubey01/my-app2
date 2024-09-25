import React, { useState, useEffect } from 'react';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black' : 'bg-transparent'} py-4 px-6`}>
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-white">Linear</div>
        <div className="flex space-x-4 text-white">
          {['Features', 'Method', 'Customers', 'Changelog', 'Pricing', 'Company', 'Contact'].map((link) => (
            <a href="#" className="hover:text-gray-300 transition duration-300">{link}</a>
          ))}
        </div>
        <div className="space-x-4">
          <button className="text-white">Log in</button>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
