import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-10 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <nav
        className="fixed w-[95%] xl:w-[77%] h-[3rem] max-w-7xl top-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/40 backdrop-blur-xl rounded-[15px] shadow-lg py-4 px-4 transition-all duration-300 ease-in-out border border-opacity-30"
        style={{ borderColor: "#23252a" }}
      >
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 100 100"
              className="w-4 h-4"
            >
              <path
                fill="#ffffff"
                d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"
              />
            </svg>
            <span className="text-sm font-semibold text-white">Linear</span>
          </div>

          <div className="hidden lg:flex space-x-14 text-sm font-medium text-gray-300">
            {[
              "Features",
              "Method",
              "Customers",
              "Changelog",
              "Pricing",
              "Company",
              "Contact",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex lg:hidden space-x-24 text-sm font-medium text-gray-300">
            {["Features", "Pricing", "Company"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          
          <div className="flex items-center space-x-4 lg:space-x-2">
          <Link
  to="/login"
  className="flex items-center min-w-[5rem] text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
  style={{ backgroundColor: "#23252a" }}
>
  Log in
  <span className="ml-2 text-white rounded-md square-full w-5 h-5 flex items-center justify-center" style={{ background: "#48484B"}}>
    L
  </span>
</Link>


            <button className="min-w-[5rem] font-medium text-sm bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
              Sign up
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none flex flex-col justify-center items-center lg:hidden"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <div className="flex flex-col space-y-1 justify-center items-center">
                  <span className="block w-6 h-0.5 bg-white" />
                  <span className="block w-6 h-0.5 bg-white" />
                </div>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col items-start justify-between mt-8 w-full text-white h-[calc(100vh-80px)]">
            <div className="flex justify-between w-full px-4">
              <div className="flex flex-col space-y-6 text-xl font-semibold">
                {[
                  "Plan",
                  "Pricing",
                  "About",
                  "Contact",
                  "Blog",
                  "Integrations",
                  "Docs",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block hover:text-gray-300 transition duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="flex flex-col space-y-6 text-xl font-semibold">
                {[
                  "Build",
                  "Method",
                  "Customers",
                  "Changelogs",
                  "Security",
                  "Careers",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block hover:text-gray-300 transition duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-start w-full px-4 space-x-4 mt-auto mb-8">
              <a href="#" className="text-gray-300 hover:text-white">
                <img
                  src="/path/to/facebook-icon.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <img
                  src="/path/to/twitter-icon.png"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <img
                  src="/path/to/linkedin-icon.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
