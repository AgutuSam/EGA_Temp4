import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/programs', label: 'Programs' },
    { to: '/facilities', label: 'Facilities' },
    { to: '/coaches', label: 'Coaches' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-dark shadow-glass-lg' 
        : theme === 'dark' 
          ? 'bg-noir-950/90 backdrop-blur-sm' 
          : 'bg-noir-50/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-neon-cyan to-electric-500 animate-pulse">
            <Zap className="text-noir-950" size={20} />
          </div>
          <span className={`text-2xl font-orbitron font-bold ${
            theme === 'dark' ? 'neon-text' : 'text-emerald-700'
          } group-hover:animate-neon-pulse transition-all duration-300`}>
            Element Golf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium font-exo relative group transition-all duration-300 ${
                isActive(link.to)
                  ? 'text-neon-cyan'
                  : theme === 'dark'
                    ? 'text-noir-200 hover:text-neon-cyan'
                    : 'text-noir-700 hover:text-neon-cyan'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-gradient transition-all duration-300 group-hover:w-full ${
                isActive(link.to) ? 'w-full' : ''
              }`} />
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-dark hover:shadow-neon transition-all duration-300 group"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-neon-gold group-hover:animate-pulse" />
            ) : (
              <Moon size={20} className="text-neon-cyan group-hover:animate-pulse" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full glass-dark hover:shadow-neon transition-all duration-300 group"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} className="text-neon-cyan group-hover:animate-pulse" />
            ) : (
              <Menu size={24} className="text-neon-cyan group-hover:animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 glass-dark border-t border-neon-cyan/20 animate-slide-up`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-2 font-medium font-exo transition-all duration-300 ${
                  isActive(link.to)
                    ? 'text-neon-cyan'
                    : 'text-noir-200 hover:text-neon-cyan'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
