import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileNavigation from './components/layout/MobileNavigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import CoachesPage from './pages/CoachesPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Set loaded state after a brief delay for smooth animations
    setTimeout(() => setIsLoaded(true), 100);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Add reveal animations to elements after theme change
    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100);
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-noir-gradient text-noir-50' 
          : 'bg-gradient-to-br from-noir-50 to-noir-100 text-noir-900'
      } ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow relative overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/programs" element={<ProgramsPage theme={theme} />} />
            <Route path="/facilities" element={<FacilitiesPage theme={theme} />} />
            <Route path="/coaches" element={<CoachesPage theme={theme} />} />
            <Route path="/testimonials" element={<TestimonialsPage theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
          </Routes>
        </main>
        
        <Footer theme={theme} />
        
        {isMobile && <MobileNavigation theme={theme} />}
      </div>
    </Router>
  );
}
