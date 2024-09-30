import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import Hero from './components/Hero';  
import DownloadButtons from './components/DownloadButtons';  
import FrameComp from './components/FrameComp';
import ProductFeatures from './components/ProductFeatures';
import  WorkStreamsPage from './components/WorkStreamPage';
import InteractivePage from './components/InteractivePage';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar/>
      <Hero />
      <DownloadButtons />
      <FrameComp/>
      <ProductFeatures />
      <WorkStreamsPage />
      <InteractivePage />
      
    </div>
  );
}

export default App;

