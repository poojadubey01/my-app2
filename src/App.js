import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import Hero from './components/Hero';  
import DownloadButtons from './components/DownloadButtons';  
import FrameComp from './components/FrameComp';
import ProductFeatures from './components/ProductFeatures';
import WorkStreamsPage from './components/WorkStreamPage';
import LoginPage from './components/LoginPage';

function HomePage() {
  return (
    <>
      <Hero />
      <DownloadButtons />
      <FrameComp />
      <ProductFeatures />
      <WorkStreamsPage />
    </>
  );
}

function App() {
  return (
    <Router>
      
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />   {/* Home page route */}
        <Route path="/login" element={<LoginPage />} />   {/* Login page route */}
      </Routes>
    </Router>
  );
}

export default App;


