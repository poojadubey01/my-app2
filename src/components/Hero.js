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

  useEffect(() => {
    createNoise();
    const interval = setInterval(createNoise, 100); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-gray text-black flex flex-col items-start justify-start opacity-0 animate-fadeIn bg-black z-0 p-0">
      <img
        src={hero}
        alt="Phone"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-50 object-cover z-0"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
        
      />
      <div className='absolute min-w-full h-[20vh] top-[25rem]  bg-gradient-to-t from-black to-transparent'></div>
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div>

      <div className="left-[10%] absolute bottom-2 z-20 text-white text-left8">
        <h1 className="text-5xl text-white bottom-0 font-bold mb-6">
          The portable companion<br/> to the Linear system
        </h1>
        <p className="text-lg mb-8">
          Complex workflows in compact form.<br/> Available for iOS and Android.
        </p>
      </div>
      
     
      <div
        className="absolute bottom-9 left-6" 
        style={{
          fontFamily:
            'Linear, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          fontWeight: 510,
          fontSize: "13px",
          lineHeight: "19px",
          color: "#6A74D0" 
        }}
      >
        Introducing Linear Mobile
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noiseValue = Math.random() * 255;
      data[i] = noiseValue;
      data[i + 1] = noiseValue;
      data[i + 2] = noiseValue;
      data[i + 3] = Math.random() * 350;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    createNoise();
    const interval = setInterval(createNoise, 100);
    return () => clearInterval(interval); //
  }, []);

  return (
    <section className="contianer relative h-screen bg-black flex flex-col items-center justify-center opacity-90 animate-fadeIn">
      <div className="relative w-full h-full">
        <img
          src={hero}
          alt="Phone"
          className="absolute top-0 left-0 w-full h-50 object-cover z-0"
        />
        <div className="absolute bottom-0 left-0 w-full z-10 h-[14.2857%]"></div>

        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-[90%] h-full z-10 pointer-events-none opacity-60 mix-blend-overlay"
        />
      </div>
      <div className="absolute min-w-full h-[20vh] top-[20rem]  bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black z-10"></div>

      <div className="left-[10%] absolute bottom-0 z-20 text-white text-left">
        <h1 className=" text-5xl font-bold mb-6 text-left">
          The portable companion <br />
          to the Linear system
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Complex workflows in compact form.
          <br /> Available for iOS and Android.
        </p>
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

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
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

     
       <div className="relative bottom-10 md:bottom-20 left-1/3 top-[31rem] transform -translate-x-1/2 z-20 text-center md:text-left px-4 w-full max-w-2xl">
        
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

export default Hero;






