import React from "react";

const Footer = () => {
  return (
    <footer className="container-lg flex flex-wrap border-t border-[hsla(0,0%,100%,.08)] bg-[#000000] pt-14 pb-10 px-5">
      <div className="mb-5 flex w-full items-center justify-between lg:mb-0 lg:mr-auto lg:w-fit lg:flex-col">
        <span className="flex items-center gap-1 text-sm font-medium text-[#b4bcd099]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 100 100"
            fill="#fff"
            aria-label="Linear Logo"
          >
            <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" />
          </svg>
          Linear - Designed Worldwide
        </span>
        <div className="flex gap-2 lg:gap-10">
          {/* Twitter Icon */}
          <svg width="24" height="24" fill="#fff" aria-label="Twitter">
            <path d="M23.635 4.757c-.882.392-1.83.654-2.827.775a4.943 4.943 0 002.163-2.724c-.949.56-2 1.014-3.127 1.24a4.917 4.917 0 00-8.506 4.48C7.691 8.093 4.066 6.123 1.64 3.161a4.917 4.917 0 001.523 6.568A4.9 4.9 0 01.96 9.865v.062a4.917 4.917 0 003.946 4.826 4.916 4.916 0 01-2.224.084 4.917 4.917 0 004.588 3.417A9.867 9.867 0 010 18.43a13.932 13.932 0 007.548 2.211c9.056 0 14.006-7.507 14.006-13.986 0-.213-.004-.426-.013-.637A10.006 10.006 0 0024 4.59a9.977 9.977 0 01-2.365.647z" />
          </svg>
          {/* Github Icon */}
          <svg width="24" height="24" fill="#fff" aria-label="GitHub">
            <path d="M12 .296C5.372.296 0 5.668 0 12.297c0 5.308 3.438 9.8 8.205 11.4.6.111.793-.26.793-.577 0-.288-.011-1.049-.017-2.063-3.338.727-4.043-1.6-4.043-1.6-.546-1.4-1.334-1.77-1.334-1.77-1.087-.743.082-.727.082-.727 1.205.085 1.836 1.238 1.836 1.238 1.07 1.831 2.805 1.3 3.49.993.108-.774.419-1.3.764-1.6-2.665-.303-5.467-1.334-5.467-5.934 0-1.313.465-2.392 1.237-3.24-.124-.303-.537-1.527.116-3.176 0 0 1.008-.322 3.3 1.228a11.469 11.469 0 013.006-.404c1.017 0 2.042.138 3.006.404 2.292-1.55 3.3-1.228 3.3-1.228.654 1.649.24 2.873.116 3.176.774.848 1.237 1.927 1.237 3.24 0 4.611-2.807 5.63-5.475 5.927.43.371.814 1.103.814 2.22 0 1.604-.015 2.895-.015 3.284 0 .317.187.694.798.577A12.057 12.057 0 0012 .296" />
          </svg>
          {/* Youtube Icon */}
          <svg width="24" height="24" fill="#fff" aria-label="YouTube">
            <path d="M23.498 6.186a3.001 3.001 0 00-2.11-2.11C19.129 4 12 4 12 4s-7.129 0-9.388.076A3.001 3.001 0 00.502 6.186 34.045 34.045 0 000 12c0 1.586.268 3.16.748 4.69a3.001 3.001 0 002.11 2.11C4.871 20 12 20 12 20s7.129 0 9.388-.076a3.001 3.001 0 002.11-2.11C23.732 15.16 24 13.586 24 12c0-1.586-.268-3.16-.748-4.69zm-12.99 8.467V9.36l6.149 2.647-6.149 2.646z" />
          </svg>
        </div>
      </div>
      {/* Products Section */}
      <div className="w-[min(180px,100%)]">
        <h3 className="mb-[14px] text-sm font-medium leading-6 text-[#b4bcd0]">
          Products
        </h3>
        <ul className="text-sm text-[#b4bcd099]">
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Features
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Integrations
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Pricing</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Changelog
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Docs</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Linear Method
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Download
          </li>
        </ul>
      </div>
      {/* Other Sections */}
      <div className="w-[min(180px,100%)]">
        <h3 className="mb-[14px] text-sm font-medium leading-6 text-[#b4bcd0]">
          Company
        </h3>
        <ul className="text-sm text-[#b4bcd099]">
          <li className="mb-[14px] cursor-pointer hover:text-white">
            About us
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Blog</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Careers</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Customers
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Brand</li>
        </ul>
      </div>
      <div className="w-[min(180px,100%)]">
        <h3 className="mb-[14px] text-sm font-medium leading-6 text-[#b4bcd0]">
          Resources
        </h3>
        <ul className="text-sm text-[#b4bcd099]">
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Startup Program
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Community
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Contact</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">DPA</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Privacy Policy
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Terms of service
          </li>
          <li className="mb-[14px] cursor-pointer hover:text-white">
            Report a vulnerability
          </li>
        </ul>
      </div>
      <div className="w-[min(180px,100%)]">
        <h3 className="mb-[14px] text-sm font-medium leading-6 text-[#b4bcd0]">
          Developers
        </h3>
        <ul className="text-sm text-[#b4bcd099]">
          <li className="mb-[14px] cursor-pointer hover:text-white">API</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Status</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">Github</li>
          <li className="mb-[14px] cursor-pointer hover:text-white">README</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
