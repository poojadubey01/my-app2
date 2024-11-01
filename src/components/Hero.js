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
      <section className="relative h-screen flex flex-col md:flex-row justify-center items-center animate-fadeIn hidden md:flex pb-20">
        {/* Background Image Div */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-black z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        {/* Noise Effect */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        />
        <div className="absolute w-full h-[20vh] top-[60%] bg-gradient-to-t from-black to-transparent z-10"></div>

        {/* Background Bottom Div */}
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-20 flex justify-center items-center pb-10">
          {/* Content and Buttons Section */}
          <div className="relative z-30 flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full max-w-screen-lg px-4">
            {/* Left Content */}
            <div className="w-full md:w-1/2 py-8">
              <p className="mb-4 text-blue-400 text-xs font-medium">
                Introducing Linear Mobile
              </p>

              <h1 className="mb-6 text-white text-4xl font-semibold leading-tight">
                The portable companion <br /> to the Linear system
              </h1>

              <p className="mb-4 text-white/70 text-lg font-medium leading-7">
                Complex workflows in compact form. <br /> Available for iOS and Android.
              </p>
            </div>

            {/* Right Side (QR Code and Download Buttons) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
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

              <div className="grid grid-cols-2 gap-2 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg bg-black hover:bg-gray-800 transition duration-300"
                >
                  <div>
                    <p className="text-white text-sm font-medium">Open in App Store</p>
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
                    <p className="text-white text-sm font-medium">Open in Play Store</p>
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
          </div>
        </div>
      </section>

      {/* Spacer to create a gap between desktop and mobile sections */}
      <div className="h-40 bg-black"></div>

      {/* Mobile View */}
      <section className="block md:hidden relative h-screen bg-black text-white flex flex-col justify-end items-center text-center pb-20">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-[52%] bg-black z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        {/* Content Overlay Div */}
        <div className="relative z-20 flex flex-col justify-end items-center text-center w-full min-h-screen pb-0 mt-auto mb-35">
          <div className="flex flex-col justify-center items-center mt-auto mb-2">
            <p className="text-sm text-blue-400 mb-2 font-medium">
              Introducing Linear Mobile
            </p>

            <h1 className="mb-6 text-white text-4xl font-semibold leading-tight">
  The portable companion <br /> to the Linear system
</h1>

            <p className="text-sm text-gray-300 mb-4 font-medium">
              Complex workflows in compact form. <br /> Available for iOS and
              Android.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col gap-2 w-[80%] justify-center items-center mb-10">
            <a
              href="#"
              className="flex items-center justify-center w-[78%] p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300"
            >
              <img
                src="https://via.placeholder.com/24/000000/FFFFFF/?text=🍏"
                alt="Apple Logo"
                className="mr-2"
              />
              <p className="text-sm">Download on the App Store</p>
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-[78%] p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300"
            >
              <img
                src="https://via.placeholder.com/24/000000/FFFFFF/?text=📱"
                alt="Google Play Logo"
                className="mr-2"
              />
              <p className="text-sm">Get it on Google Play</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;




/*import React, { useEffect, useRef } from "react";
import heroImage from "../assets/hero.jpg"; // Add the correct path to your hero image

function Hero() {
  const canvasRef = useRef(null);

  // Noise effect function
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
    const resizeCanvas = () => createNoise();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen bg-black text-white flex flex-col justify-end items-center pb-[10rem]">
      {/* Background Image *
      <div
        className="absolute inset-0 bg-cover bg-center md:h-full h-[55%]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${heroImage})`,
          backgroundPosition: "center top",
        }}
      />

      {/* Noise Effect *
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content *
      <div className="relative z-20 text-center flex flex-col items-center">
        {/* Text Content *
        <p className="text-blue-400 text-xs font-medium mb-2">
          Introducing Linear Mobile
        </p>
        <h1 className="text-3xl font-semibold mb-4">
          The portable companion <br /> to the Linear system
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Complex workflows in compact form. <br /> Available for iOS and Android.
        </p>

        {/* Download Buttons *
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#"
            className="flex items-center text-black justify-center px-4 py-2 border border-gray-600 rounded-lg bg-white hover:bg-gray-800 transition duration-300"
          >
            <img
              src="https://via.placeholder.com/24/FFFFFF/000000?text=🍏"
              alt="App Store"
              className="mr-2"
            />
            Download on the App Store
          </a>
          <a
            href="#"
            className="flex items-center text-black justify-center px-4 py-2 border border-gray-600 rounded-lg bg-white hover:bg-gray-800 transition duration-300"
          >
            <img
              src="https://via.placeholder.com/24/FFFFFF/000000?text=📱"
              alt="Google Play"
              className="mr-2"
            />
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;*/















