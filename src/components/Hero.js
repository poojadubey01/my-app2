/*import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.jpg";

function Hero() {
  const canvasRef = useRef(null);

  const createNoise = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noiseValue = Math.random() * 255; 
      data[i] = noiseValue; 
      data[i + 1] = noiseValue; 
      data[i + 2] = noiseValue; 
      data[i + 3] = Math.random() * 50; 
    }

    ctx.putImageData(imageData, 0, 0);
  };

  // Resize the canvas dynamically on window resize//
  useEffect(() => {
    createNoise();
    const interval = setInterval(createNoise, 100); // Update noise

    // Adjust the canvas size dynamically
    const resizeCanvas = () => {
      createNoise(); // Redraw the noise when window is resized
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen bg-gray text-black flex flex-col items-start justify-start animate-fadeIn bg-black z-0 p-0">
       
      <img
        src={hero}
        alt="Phone"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-50 object-cover z-0"
      />

      
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      
      <div className="absolute w-full h-[20vh] top-[60%] bg-gradient-to-t from-black to-transparent"></div>

     
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div>
      

      
      <div className="absolute bottom-6 md:bottom-50 left-1/2 transform -translate-x-1/2 z-20 text-center md:text-left px-4 w-full max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          The portable companion <br /> to the Linear system
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Complex workflows in compact form. <br /> Available for iOS and Android.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-center">
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-lg justify-between text-center w-[80%] md:w-auto hover:bg-gray-200"
          >
            Download on the App Store
          </a>
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-lg justify-between text-center w-[80%] md:w-auto hover:bg-gray-200"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;*/

/*import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.jpg";


function Hero() {
  const canvasRef = useRef(null);

  const createNoise = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; // Responsive width
    canvas.height = window.innerHeight; // Responsive height

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noiseValue = Math.random() * 255; 
      data[i] = noiseValue; 
      data[i + 1] = noiseValue; 
      data[i + 2] = noiseValue; 
      data[i + 3] = Math.random() * 50; 
    }

    ctx.putImageData(imageData, 0, 0);
  };

  
  useEffect(() => {
    createNoise();
    const interval = setInterval(createNoise, 100); 

   
    const resizeCanvas = () => {
      createNoise(); 
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen bg-gray text-black flex flex-col items-start justify-start animate-fadeIn bg-black z-0 p-0">
      
    
      <img
        src={hero}
        alt="Phone"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-50 object-cover z-0"
      />

    
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

     
      <div className="absolute w-full h-[20vh] top-[60%] bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div>

     
       <div className="relative bottom-10 md:bottom-20 sm:bottom-30 left-1/2 top-[31rem] transform -translate-x-1/2 z-20 text-center md:text-center px-4 xl-w-[80%] max-w-2xl">
        
        <p className="text-xs md:text-lg text-blue-300 mb-4">
          Introducing Linear Mobile
        </p>

        <h1 className="text-5xl md:text-5xl font-bold text-white mb-6">
          The portable companion <br /> to the Linear system
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Complex workflows in compact form. <br /> Available for iOS and Android.
        </p>

       
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4">
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-lg text-center w-full md:w-auto hover:bg-gray-200"
          >
            Download on the App Store
          </a>
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-lg text-center w-full md:w-auto hover:bg-gray-200"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;*/

import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.jpg"; 

function Hero() {
  const canvasRef = useRef(null);

  const createNoise = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noiseValue = Math.random() * 255;
      data[i] = noiseValue;
      data[i + 1] = noiseValue;
      data[i + 2] = noiseValue;
      data[i + 3] = Math.random() * 50;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    createNoise();
    const interval = setInterval(createNoise, 100);

    const resizeCanvas = () => {
      createNoise();
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const commonStyles = {
    fontFamily:
      'Linear, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontStyle: "normal"
  };

  return (
    <section
      className="relative h-screen bg-gray text-black flex flex-col items-start justify-start animate-fadeIn bg-black z-0 p-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center top 50px"  // Shift the background down by 50px
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="absolute w-full h-[20vh] top-[60%] bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10" />

      {/* Content */}
      <div className="relative bottom-10 md:bottom-20 left-1/3 top-[35rem] transform -translate-x-1/2 z-20 text-center md:text-left px-4 w-full max-w-2xl">
        <p
          className="mb-4"
          style={{
            ...commonStyles,
            fontWeight: 510,
            color: "rgb(130, 143, 255)",
            fontSize: "13px",
            lineHeight: "19px"
          }}
        >
          Introducing Linear Mobile
        </p>

        <h1
          className="mb-6"
          style={{
            ...commonStyles,
            fontWeight: 590,
            color: "rgb(247, 248, 248)",
            fontSize: "48px",
            lineHeight: "52px"
          }}
        >
          The portable companion <br /> to the Linear system
        </h1>

        <p
          className="mb-4"
          style={{
            ...commonStyles,
            fontWeight: 510,
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "21px",
            lineHeight: "28px"
          }}
        >
          Complex workflows in compact form. <br /> Available for iOS and
          Android.
        </p>
      </div>

      {/* QR Code Section */}
      <div className="absolute right-[15%] top-[38rem] flex flex-col gap-4">
        <div className="p-2 border-2 border-gray-300 rounded-lg bg-black hover:bg-gray-800 transition duration-300">
          <p
            style={{
              ...commonStyles,
              fontWeight: 510,
              color: "rgb(247, 248, 248)", 
              fontSize: "14px", 
              lineHeight: "21px"
            }}
          >
            Scan this QR
          </p>
          <div className="mt-1">
            <img
              src="https://via.placeholder.com/80"
              alt="QR Code"
              className="w-20 h-20 object-contain mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href="#"
            className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg bg-black hover:bg-gray-800 transition duration-300"
          >
            <div className="text-white">
              <p
                style={{
                  ...commonStyles,
                  fontWeight: 510,
                  color: "rgb(247, 248, 248)", 
                  fontSize: "14px", 
                  lineHeight: "21px" 
                }}
              >
                Open in App Store
              </p>
              <img
                src="https://via.placeholder.com/24/000000/FFFFFF/?text=🍏" 
                alt="Apple Logo"
                className="w-6 h-6 mt-1"
              />
            </div>
            <span className="text-white text-lg">&rarr;</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg bg-black hover:bg-gray-800 transition duration-300"
          >
            <div className="text-white">
              <p
                style={{
                  ...commonStyles,
                  fontWeight: 510,
                  color: "rgb(247, 248, 248)", 
                  fontSize: "14px", 
                  lineHeight: "21px" 
                }}
              >
                Open in Play Store
              </p>
              <img
                src="https://via.placeholder.com/24/000000/FFFFFF/?text=📱" 
                alt="Google Play Logo"
                className="w-6 h-6 mt-1"
              />
            </div>
            <span className="text-white text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;







