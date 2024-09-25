import React from 'react';
import NavBar from './components/NavBar';  // Updated path
import Hero from './components/Hero';  // Updated path
import DownloadButtons from './components/DownloadButtons';  // Updated path
import FrameComp from './components/FrameComp';
import ProductFeatures from './components/ProductFeatures';
import  WorkStreamsPage from './components/WorkStreamPage';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <Hero />
      <DownloadButtons />
      <FrameComp/>
      <ProductFeatures />
      <WorkStreamsPage />
    </div>
  );
}

export default App;

