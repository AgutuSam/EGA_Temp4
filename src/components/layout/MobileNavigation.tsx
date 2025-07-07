import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Laptop, UserCheck, PhoneCall } from 'lucide-react';
interface MobileNavigationProps {
  theme: string;
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({
  theme
}) => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 ${theme === 'dark' ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'} shadow-lg`}>
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600' : ''}`}>
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/programs" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/programs') ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600' : ''}`}>
          <Users size={20} />
          <span className="text-xs mt-1">Programs</span>
        </Link>
        <Link to="/facilities" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/facilities') ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600' : ''}`}>
          <Laptop size={20} />
          <span className="text-xs mt-1">Technology</span>
        </Link>
        <Link to="/coaches" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/coaches') ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600' : ''}`}>
          <UserCheck size={20} />
          <span className="text-xs mt-1">Coaches</span>
        </Link>
        <Link to="/contact" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/contact') ? theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600' : ''}`}>
          <PhoneCall size={20} />
          <span className="text-xs mt-1">Contact</span>
        </Link>
      </div>
    </div>;
};
export default MobileNavigation;