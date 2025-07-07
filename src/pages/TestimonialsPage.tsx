import React from 'react';
interface TestimonialsPageProps {
  theme: string;
}
const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  theme
}) => {
  return <div className={`w-full pt-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Testimonials & Results
        </h1>
        <p className="text-center mb-16 opacity-80">
          Testimonials page content will go here.
        </p>
      </div>
    </div>;
};
export default TestimonialsPage;