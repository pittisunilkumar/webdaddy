import React from 'react';

const Page4 = () => {
  return (
    <div id="page4" className="flex-none w-screen lg:w-[100vw] h-screen bg-white relative z-10 overflow-visible lg:-ml-[30vw]">
      <div className="ripple-buttons hidden lg:block absolute w-96 h-96 top-1/3 left-[15%] z-0">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>

      <div className="lg:hidden flex flex-col min-h-screen relative z-10 p-4 md:p-8 ml-0 md:ml-16">
        <div className="md:absolute md:top-16 md:left-16 md:right-8 md:flex md:items-center">
          <h1 className="text-6xl md:text-8xl text-stroke text-gray-800 md:mr-8 text-center md:text-left fontmycustom animate-left-to-right">WHO</h1>
          <p className="text-base md:text-lg text-gray-600 md:flex-1">
            "We're a crew of digital wizards - web devs, SEO geeks, social media mavens, and content creators -turning online ideas into epic digital experiences. With a blend of creativity, AI and tech magic, we make your brand shine!"
          </p>
        </div>

        <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:flex md:items-center md:w-full">
          <h2 className="text-6xl md:text-8xl md:mr-8 text-stroke text-center md:text-left fontmycustom" >WE</h2>
          <p className="text-base md:text-lg text-gray-600 md:flex-1 md:pr-8" >
            "We believe branding, design, development, content and visuals should be aligned and combined with the latest technological advancements for business creation."
          </p>
        </div>

        <div className="md:absolute md:bottom-16 md:left-16 md:right-16 md:flex md:items-center md:justify-end">
          <div className="flex flex-col md:flex-row-reverse md:items-center md:w-full">
            <h2 className="text-6xl md:text-8xl text-gray-800 md:ml-8 text-center md:text-left fontmycustom">ARE</h2>
            <p className="text-base md:text-lg text-gray-600 md:flex-1 md:text-right">
              "We combine Website creation with a passion for Digital marketing. They go hand in hand like teenagers in love. It's an inseparable relationship."
            </p>
          </div>
        </div>
      </div>


      

      <div className="hidden lg:flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-8">
        <div className="absolute top-16 left-[25%] right-8 flex items-start">
          <h1 className="text-9xl xl:text-10xl fontmycustom text-gray-800 mr-8">WHO</h1>
          <p className="flex-1 text-gray-600 text-lg mt-8 pr-8">
            "We're a crew of digital wizards - web devs, SEO geeks, social media mavens, and content creators -turning online ideas into epic digital experiences. With a blend of creativity, AI and tech magic, we make your brand shine!"
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full">
          <div className="flex-1"></div>
          <h2 className="text-9xl xl:text-10xl text-stroke mr-8 fontmycustom"style={{
              color: "transparent",
              WebkitTextStroke: "1px black", 
              textStroke: "1px black", 
            }}>WE</h2>
          <p className="flex-1 text-gray-600 text-lg pr-16">
            "We believe branding, design, development, content and visuals should be aligned and combined with the latest technological advancements for business creation."
          </p>
        </div>

        <div className="absolute bottom-16 left-[25%] right-16 flex items-center justify-end">
          <p className="flex-1 text-gray-600 text-lg text-left pl-8">
            "We combine Website creation with a passion for Digital marketing. They go hand in hand like teenagers in love. It's an inseparable relationship."
          </p>
          <h2 className="text-9xl xl:text-10xl fontmycustom text-gray-800 pl-8">ARE</h2>
        </div>
      </div>





    </div>
  );
};

export default Page4;