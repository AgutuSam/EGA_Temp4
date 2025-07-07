import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  theme?: string;
  isExternal?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  theme = 'dark',
  isExternal = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-400 text-gray-900 focus:ring-cyan-500' : 'bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-600',
    secondary: theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-800' : 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-200',
    outline: theme === 'dark' ? 'border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 focus:ring-cyan-500' : 'border border-cyan-600 text-cyan-600 hover:bg-cyan-600/10 focus:ring-cyan-600'
  };
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    if (isExternal) {
      return <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>;
    }
    return <Link to={href} className={allClasses}>
        {children}
      </Link>;
  }
  return <button className={allClasses} onClick={onClick}>
      {children}
    </button>;
};
export default Button;