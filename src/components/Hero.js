import React from 'react';
import phoneimg from '../assets/phoneimg.jpg';  

function Hero() {
  return (
    <section className="relative h-screen bg-gray text-black flex flex-col items-center justify-center opacity-0 animate-fadeIn bg-black">
      
      <h1 className="text-4xl font-bold mb-6">The portable companion to the Linear system</h1>
      <p className="text-lg mb-8">Complex workflows in compact form. Available for iOS and Android.</p>
      <img src={phoneimg} alt="Phone" className="max-w-xs mx-auto" />
    </section>
  );
}

export default Hero;

