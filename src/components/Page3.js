import React from 'react';
import  car from '../assets/formulasCarimg.svg';

const Page3 = () => {
  return (
    <div id="page3" className="flex-none w-screen lg:w-[200vw] h-screen bg-[#292929] relative z-10 overflow-hidden flex items-center lg:-ml-[10vw]">
      <div className="absolute inset-0 overflow-hidden" style={{transform: 'rotate(45deg) scale(2.5)'}}>
        <div className="line absolute w-px h-[200%] bg-white/10 -top-1/2 left-[0%]"></div>
        <div className="line absolute w-px h-[200%] bg-white/10 -top-1/2 left-[95%]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 lg:max-w-[90%] xl:max-w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="text-center lg:text-left zoom-in-1">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl bg-abusinees fontmycustom mb-4">
              IN DIGITAL<br/>
              MARKETING<br/>
              <span className="text-3xl lg:text-5xl xl:text-6xl bg-abusinees text-stroke fontmycustom">WE "TRUST"</span>
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl bg-abusinees">
              Our human-led, AI-powered digital marketing creates
              trust, builds value, and maximizes your
              ROI for your business.
            </p>
          </div>

          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 zoom-in-1">
            <p className="text-xl lg:text-2xl xl:text-3xl bg-abusinees mb-3 sm:mb-4">
              We will put you in the driver's seat like a Formula 1 racer.
              A digital marketing team assisting you to win with AI.
            </p>
            <img 
              src={car}
              alt="Formula 1 Car" 
              className="w-full max-w-md lg:max-w-lg mx-auto"
            />
          </div>
          
          <div className="text-center lg:mr-8 xl:mr-12 zoom-in-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-abusinees fontmycustom mb-2 sm:mb-3">
              OFF TO THE<br/>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-abusinees text-stroke fontmycustom">RACES!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl bg-abusinees">
              Our human-led, AI-powered<br className="hidden sm:inline"/> digital marketing creates trust,<br className="hidden sm:inline"/> builds value, and maximizes your<br className="hidden sm:inline"/> ROI for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;