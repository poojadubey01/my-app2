import React from 'react';
import NavBar from './components/NavBar';  // Updated path
import Hero from './components/Hero';  // Updated path
import DownloadButtons from './components/DownloadButtons';  // Updated path

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <Hero />
      <DownloadButtons />
    </div>
  );
}

export default App;

