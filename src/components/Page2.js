import React, { useEffect, useRef, useState } from 'react';
import animation from '../assets/animate.gif';
import '../styles/Page2.css';

const Page2 = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = (baseClass) => {
    return `${baseClass} ${isInView ? 'animate' : ''}`;
  };

  return (
    <div ref={sectionRef} id="page2" className="flex-none w-screen lg:w-[140vw] h-screen bg-[#2b2a2a] relative overflow-hidden lg:-ml-[20vw]">
      <div className="absolute inset-0 overflow-hidden" style={{transform: 'rotate(315deg) scale(2.5)'}}>
      </div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-0 lg:w-[80%] xl:w-[70%]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 text-white lg:pr-8 mb-8 lg:mb-0">
              <h1 className={getAnimationClass("text-4xl sm:text-5xl lg:text-7xl xl:text-[7rem] leading-none mb-2 bg-abusinees fontmycustom animate-slide-down")}>
                LET'S BEND
              </h1>
              
              <h1 className={getAnimationClass("text-3xl sm:text-4xl lg:text-7xl xl:text-9xl leading-none mb-2 text-stroke bg-abusinees fontmycustom animate-right-to-left")}>
                DESIGN
              </h1>
              <p className={getAnimationClass("text-sm sm:text-base lg:text-xl xl:text-2xl mb-2 bg-abusinees animate-slide-up-1")}>
                Your digital footprint starts with creating a rock-solid website.
                First impressions do Last - So Let's Make It Last! Don't let
                anyone define You. It's Time to Create Your Own Signature.
              </p>
              <p className={getAnimationClass("text-sm sm:text-base lg:text-xl xl:text-2xl bg-abusinees animate-slide-up-1 hidden sm:block")}>
                An experience where your business goals, branding & marketing
                efforts align like bent wood. A narrative carefully crafted for a
                natural experience. A website with your local & global reach is
                born.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
              <img 
                src={animation} 
                alt="Animated Design" 
                className={getAnimationClass("w-full sm:w-3/4 lg:w-[90%] h-auto object-contain bg-transparent animate-left-to-right")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;