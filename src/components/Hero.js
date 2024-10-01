import React from 'react';
import hero from '../assets/hero.jpg';  

function Hero() {
  return (
    <section className="relative h-screen bg-gray text-black flex flex-col items-center justify-center opacity-0 animate-fadeIn bg-black">
      <h1 className="text-5xl font-bold mb-6">The portable companion to the Linear system</h1>
      <p className="text-lg mb-8">Complex workflows in compact form. Available for iOS and Android.</p>
      
      
      <img 
        src={hero} 
        alt="Phone" 
        className="max-w-xl-50% mx-auto h-30 bg-blend-multiply mt-40"  
      />
    </section>
  );
}

export default Hero;

