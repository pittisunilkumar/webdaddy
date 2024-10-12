import React, { useEffect, useRef } from 'react';
import car from '../assets/formulasCarimg.svg';
import { color } from 'framer-motion';

const Page3 = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = pageRef.current.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      ref={pageRef}
      id="page3" 
      className="flex-none w-screen lg:w-[200vw] h-screen bg-[#292929] relative z-10 overflow-hidden flex items-center lg:-ml-[10vw]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%] transform rotate-[36deg]">
          {[...Array(40)].map((_, index) => (
            <div 
              key={index} 
              className="line2 absolute w-px h-full bg-white/10" 
              style={{
                left: `${(index / 40) * 100}%`,
                animationDelay: `${index * 0.1}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 lg:max-w-[90%] xl:max-w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="text-center lg:text-left animate-on-scroll">
            <h1 className="text-4xl lg:text-[5.5vw] text-[#e2dcc8] fontmycustom mb-4 leading-tight">
              IN DIGITAL<br/>
              MARKETING<br/>
              <span className="text-3xl lg:text-[5.5vw] text-stroke fontmycustom">WE "TRUST"</span>
            </h1>
            <p className="text-lg lg:text-[1.6vw] text-[#e2dcc8] mt-8 leading-relaxed lg:text-left">
              Our human-led, AI-powered digital marketing creates
              trust, builds value, and maximizes your
              ROI for your business.
            </p>
          </div>

          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-on-scroll">
            <p className="text-xl lg:text-[2vw] text-[#e2dcc8] mb-3 sm:mb-4">
              We will put you in the driver's seat like a Formula 1 racer.
              A digital marketing team assisting you to win with AI.
            </p>
            <img 
              src={car}
              alt="Formula 1 Car" 
              className="w-full max-w-md lg:max-w-lg mx-auto mt-5"
            />
          </div>
          
          <div className="text-center lg:mr-8 xl:mr-12 animate-on-scroll">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5vw] text-[#e2dcc8] fontmycustom mb-2 sm:mb-3 leading-tight">
              OFF TO THE<br/>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[5.5vw] text-stroke fontmycustom">RACES!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.6vw] text-[#e2dcc8] mt-8 leading-relaxed">
              It's not enough to win races. Like race cars,<br className="hidden sm:inline"/> 
              you have to keep your website primed for action.<br className="hidden sm:inline"/> 
              Ready to take on any challenges that come your way!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;