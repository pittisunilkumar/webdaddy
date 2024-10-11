import React from 'react';

const OurTeam = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-3">
      <div className="max-w-10xl mx-auto text-center">
        <h1 className="text-6xl lg:text-9xl mb-8 inline-block overflow-hidden">
          <span className="bg-abusinees fontmycustom inline-block animate-left-to-right">OUR</span>
          <span className="text-stroke bg-abusinees fontmycustom inline-block animate-right-to-left">TEAM</span>
        </h1>
        
        <p className="text-lg mb-12 max-w-3xl mx-auto bg-abusinees">
          You will find some of the brightest minds on the web in our team. Your success defines
          the core of our processes. Every collaboration pins it down and are mission oriented
          and driven.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-[#444] p-4 rounded-lg">
              <div className="w-16 h-16 bg-[#555] rounded-full mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold bg-abusinees">Hari</h3>
              <p className="text-sm text-gray-400 bg-abusinees">CEO</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;