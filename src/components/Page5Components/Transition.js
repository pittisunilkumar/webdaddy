import React from 'react';
// import { ArrowRight } from 'lucide-react';

const Transition = () => {
  return (
    <div className="relative py-16 bg-[#2b2a2a] min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ transform: 'rotate(45deg) scale(2.5)' }}>
        {[...Array(20)].map((_, index) => (
          <div 
            key={index} 
            className="line absolute w-px h-[200%] bg-white/10 -top-1/2" 
            style={{ left: `${index * 5}%` }}
          ></div>
        ))}
      </div>
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/4 mb-8 md:mb-0">
            <p className="lg:ml-10 text-[#e0e0e0] text-2xl md:text-3xl lg:text-4xl font-light">
              Did you know sites with top-notch design and content are 53% more likely to hit Google's first page? Ready to boost your rankings?
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button className="bg-gray-700 text-white py-3 px-6 rounded hover:bg-gray-600 transition duration-300 flex items-center justify-center text-lg">
              Talk To Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition;