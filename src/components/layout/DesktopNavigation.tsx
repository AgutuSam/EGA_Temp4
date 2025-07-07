import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
interface DesktopNavigationProps {
  theme: string;
}
const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  theme
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  return <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        <li>
          <Link to="/" className={`text-sm font-medium hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>
            Home
          </Link>
        </li>
        <li className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <Link to="/about" className={`text-sm font-medium hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} transition-colors flex items-center`}>
            About Us
            <ChevronDown size={16} className="ml-1" />
          </Link>
          {activeDropdown === 'about' && <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1">
                <Link to="/about" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Our Story
                </Link>
                <Link to="/about" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Philosophy
                </Link>
                <Link to="/about" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Location
                </Link>
              </div>
            </div>}
        </li>
        <li className="relative" onMouseEnter={() => handleMouseEnter('programs')} onMouseLeave={handleMouseLeave}>
          <Link to="/programs" className={`text-sm font-medium hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} transition-colors flex items-center`}>
            Programs
            <ChevronDown size={16} className="ml-1" />
          </Link>
          {activeDropdown === 'programs' && <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5`}>
              <div className="py-1">
                <Link to="/programs" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Junior Development
                </Link>
                <Link to="/programs" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Elite Training
                </Link>
                <Link to="/programs" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Adult Improvement
                </Link>
                <Link to="/programs" className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Corporate Events
                </Link>
              </div>
            </div>}
        </li>
        <li>
          <Link to="/facilities" className={`text-sm font-medium hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>
            Facilities & Technology
          </Link>
        </li>
        <li>
          <Link to="/coaches" className={`text-sm font-medium hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>
            Coaches
          </Link>
        </li>
        <li>
          <Link to="/testimonials" className={`text-sm font-medium hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`px-4 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900' : 'bg-cyan-600 hover:bg-cyan-700 text-white'} transition-colors`}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>;
};
export default DesktopNavigation;