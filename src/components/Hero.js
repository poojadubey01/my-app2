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

  return (
    <>
      {/* Desktop/Tablet View */}
      <section
        className="relative h-screen bg-black text-white flex flex-col items-start justify-start animate-fadeIn p-0 hidden md:block"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        <div className="absolute w-full h-[20vh] top-[60%] bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black" />

        {/* Content */}
        <div className="max-w-screen-md mx-auto relative bottom-10 md:bottom-20 left-1/3 top-[35rem] -translate-x-1/2 text-center md:text-left px-4 py-8 w-full max-w-2xl">
          <p className="mb-4 text-blue-400 text-xs font-medium">
            Introducing Linear Mobile
          </p>

          <h1 className="mb-6 text-white text-4xl font-semibold leading-tight">
            The portable companion <br /> to the Linear system
          </h1>

          <p className="mb-4 text-white/70 text-lg font-medium leading-7">
            Complex workflows in compact form. <br /> Available for iOS and
            Android.
          </p>
        </div>

        {/* QR Code and Download Buttons */}
        <div className="absolute right-[15%] top-[38rem] flex flex-col gap-4 md:flex-row">
          <div className="p-2 border-2 border-gray-300 rounded-lg bg-black hover:bg-gray-800 transition duration-300">
            <p className="text-white text-sm font-medium">Scan this QR</p>
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
              <div>
                <p className="text-white text-sm font-medium">
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
              <div>
                <p className="text-white text-sm font-medium">
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

      {/* Mobile View */}
      <section
        className="block md:hidden relative h-full min-h-full-[580px] bg-black pb-30 text-white p-8 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Text */}
        <div className="z-20 mt-[40rem]">
          <p className="text-sm text-blue-400 mb-2 font-medium">
            Introducing Linear Mobile
          </p>

          <h1 className="text-3xl mb-4 font-semibold">
            The portable companion <br /> to the Linear system
          </h1>

          <p className="text-md text-gray-300 mb-6 font-medium">
            Complex workflows in compact form. <br /> Available for iOS and
            Android.
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex z-30 items-center px-4 py-3 bg-white text-black border border-gray-600 rounded-lg hover:bg-gray-800 transition-all"
          >
            <img
              src="https://via.placeholder.com/24/000000/FFFFFF/?text=🍏"
              alt="App Store"
              className="mr-3"
            />
            Download on the App Store
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;














