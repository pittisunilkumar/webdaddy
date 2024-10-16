import React from 'react';
import backgroundVideo from '../assets/waves.mp4';

import wletter from "../assets/w_image.png";
import dletter from "../assets/d_image.png";

const Page1 = () => {
  return (
    <div id="page1" className="flex-none w-screen lg:w-[130vw] h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" /> 
        </video>
        
        <div className="absolute inset-0 flex items-center justify-start p-8">

          <div className="container mx-auto lg:ml-0 lg:mr-auto lg:pr-[5vw]">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              <div className="space-y-4 order-2 lg:order-1 ml-0 md:ml-8 lg:ml-16">

                <h1 className="blend text-5xl md:text-6xl lg:text-7xl xl:text-8xl fontmycustom opacity-0 transform translate-y-full animate-slide-up-1">
                  A BUSINESS
                </h1>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stroke bg-abusinees fontmycustom opacity-0 transform translate-y-full animate-slide-up-2">
                  CREATION
                </h1>

                <h1 className="blend text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-abusinees fontmycustom opacity-0 transform translate-y-full animate-slide-up-3">
                  AGENCY
                </h1>

                <h6 className="blend text-xl md:text-2xl mt-4 opacity-0 bg-abusinees transform -translate-x-full animate-slide-in">
                  An AI focused team on a mission for your <br />
                  Web development & Digital Marketing needs.
                </h6>

              </div>
              
              <div className="flex flex-col items-center lg:items-end space-y-8 order-1 lg:order-2 px-4 sm:px-8 lg:px-0 lg:mr-16">
                
                <h2 className="blend text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl bg-abusinees fontmycustom text-center lg:text-right w-full">WEBDADDY</h2>
                
                <div className="flex items-center justify-center opacity-0 transform translate-y-full animate-slide-up-4">
                  <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
                    <img src={wletter} alt="W" className="w-full h-full object-contain"/>
                  </div>
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center md:-ml-4">
                    <img src={dletter} alt="D" className="w-full h-full object-contain"/>
                  </div>
                </div>
        
                <h5 className="bg-businees text-center lg:text-center text-lg md:text-xl max-w-sm opacity-0 transform translate-y-full animate-slide-up-5">
                  Like waves carve and etch their story on the shore,
                  we sculpt your enduring digital identity.
                </h5>

              </div>


            </div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default Page1;