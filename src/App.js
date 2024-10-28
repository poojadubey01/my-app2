import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import Hero from './components/Hero';  
import FrameComp from './components/FrameComp';  
import ProductFeatures from './components/ProductFeatures';
import WorkStreamsPage from './components/WorkStreamPage'
import LoginPage from './components/LoginPage';
import Padding from './components/Padding';  // Import the Padding component
import FocusPage from './components/FocusPage';
import ComposerSection from './components/ComposerSection';
import IssuePage from './components/IssuePage';
import ProjectPage from './components/ProjectPage';
import NotificationPage from './components/NotificationPage';
import Footer from './components/footer'
// Home Page component
function HomePage() {
  return (
    <>
      <Hero/>  {/* No padding applied to Hero */}
      <Padding>  {/* Padding applied to the rest of the components */}
        <FrameComp />
        <ProductFeatures />
        <WorkStreamsPage />
        <FocusPage />
        <ComposerSection />
        <IssuePage />
        <ProjectPage />
        <NotificationPage />
        <Footer />
      </Padding>
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
