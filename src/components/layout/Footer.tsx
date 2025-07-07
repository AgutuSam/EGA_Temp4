import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
interface FooterProps {
  theme: string;
}
const Footer: React.FC<FooterProps> = ({
  theme
}) => {
  return <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-200'} mt-auto`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                Element
              </span>
              <span className="text-2xl font-light ml-1">Golf Academy</span>
            </Link>
            <p className="mt-4 text-sm opacity-75">
              Redefining golf performance through technology and mastery at
              Steyn City.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Facebook size={20} />
              </a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Twitter size={20} />
              </a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className={`text-sm ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className={`text-sm ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/facilities" className={`text-sm ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>
                  Facilities & Technology
                </Link>
              </li>
              <li>
                <Link to="/coaches" className={`text-sm ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>
                  Coaches
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className={`text-sm ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-sm ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Element Golf Academy, Steyn City, Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">+27 (0) 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-sm">info@elementgolfacademy.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 opacity-75">
              Subscribe to receive updates on events and promotions
            </p>
            <form className="space-y-2">
              <input type="email" placeholder="Your email address" className={`w-full px-3 py-2 text-sm rounded-md ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 focus:border-cyan-400' : 'bg-white border border-gray-300 focus:border-cyan-600'} focus:outline-none transition-colors`} />
              <button type="submit" className={`w-full px-3 py-2 text-sm rounded-md font-medium ${theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900' : 'bg-cyan-600 hover:bg-cyan-700 text-white'} transition-colors`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className={`mt-12 pt-6 ${theme === 'dark' ? 'border-t border-gray-800' : 'border-t border-gray-300'}`}>
          <p className="text-sm text-center opacity-75">
            © {new Date().getFullYear()} Element Golf Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;