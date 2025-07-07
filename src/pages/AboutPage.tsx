import React from 'react';
interface AboutPageProps {
  theme: string;
}
const AboutPage: React.FC<AboutPageProps> = ({
  theme
}) => {
  return <div className={`w-full pt-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Element Golf Academy
        </h1>
        <p className="text-center mb-16 opacity-80">
          About page content will go here.
        </p>
      </div>
    </div>;
};
export default AboutPage;