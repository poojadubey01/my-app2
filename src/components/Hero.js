import React, { useEffect, useRef } from 'react';
import hero from '../assets/hero.jpg';  

function Hero() {
  const canvasRef = useRef(null);

 
  const createNoise = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
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
    <section className="relative h-screen bg-black flex flex-col items-center justify-center opacity-90 animate-fadeIn">
     
      <div className="relative w-full h-full">
        <img
          src={hero}
          alt="Phone"
          className="absolute top-0 left-0 w-full h-30 object-cover z-0"
        />
         <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
       
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-90% h-full z-10 pointer-events-none opacity-100 mix-blend-overlay" 
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black z-10"></div>
       

     
      <div className="relative z-20 text-bottom text-white">
        <h1 className="text-4xl font-bold mb-6 left-0">
          The portable companion <br/>
          to the Linear system
        </h1>
        <p className="text-lg text-gray mb-8">
          Complex workflows in compact form.<br/> Available for iOS and Android.
        </p>
      </div>
    </section>
  );
}

export default Hero;
