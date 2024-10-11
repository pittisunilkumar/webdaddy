import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);
  const usRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const focusRef = useRef(null);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === focusRef.current) {
          setIsFocusVisible(entry.isIntersecting);
        } else if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-left');
        } else {
          entry.target.classList.remove('slide-in-left');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const elementsToObserve = [
      aboutRef.current,
      usRef.current.querySelector("h1"),
      usRef.current.querySelector("p"),
      visionRef.current,
      missionRef.current,
      focusRef.current,
    ];

    elementsToObserve.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex-none w-screen h-screen bg-[#333] text-[#e0e0e0] font-['Inter',sans-serif] relative z-10 overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="vertical-text-container hidden lg:flex absolute left-0 top-0 bottom-0 items-center">
          <div ref={aboutRef} className="vertical-text text-[10vw] xl:text-[10rem] bg-abusinees fontmycustom">
            About
          </div>
        </div>
        <div className="w-full max-w-[90vw] mx-auto flex flex-col justify-between h-full lg:ml-[15vw]">
          <div className="lg:hidden text-4xl sm:text-5xl md:text-6xl mb-4 bg-abusinees fontmycustom animate-element">
            About Us
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 flex-grow">
            <div ref={usRef} className="flex flex-col justify-start lg:justify-center">
              <h1 className="text-sm sm:text-base md:text-lg font-normal mb-2 lg:mb-4 bg-abusinees animate-element">
                We dream, think, design, engineer, learn and build like artists. And we are hellbent on creating the best digital experiences in the world for our clients.
              </h1>
              <p className="hidden lg:block text-[6vw] xl:text-[5rem] text-stroke leading-none fontmycustom bg-abusinees animate-element" >us</p>
            </div>
            
            <div className="flex flex-col justify-start lg:justify-center">
              <div className="space-y-2 lg:space-y-4">
                <div ref={visionRef} className="bg-abusinees animate-element" >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl fontmycustom mb-1 lg:mb-2">Vision</h3>
                  <p className="text-xs sm:text-sm md:text-base">
                    Our vision is to ride on emergent technologies and be a leader & innovator in creating user experiences.
                  </p>
                </div>
                <div ref={missionRef} className="bg-abusinees animate-element" >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl fontmycustom mb-1 lg:mb-2">Mission</h3>
                  <p className="text-xs sm:text-sm md:text-base">
                    Our mission is to solve your user experience. Easily said than done. That means we have to reimagine, disrupt status quos, find elegant and thoughtful digital solutions on how people interact with brands. To uncover values others can't in an everchanging technology landscape.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              ref={focusRef} 
              className={`flex flex-col justify-start lg:justify-center transition-opacity duration-1000 ease-in-out`}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl fontmycustom mb-1 lg:mb-2">Our Focus</h3>
              <p className="text-xs sm:text-sm md:text-base w-3/4 lg:w-2/3">
                We want to humanize the digital process. Infectious creativity to create natural platforms for seamless communication and experience. Decoding the code. Code only necessary scripts and code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;