import React from 'react';
import portfolioimgaes1 from "../../assets/lastest_code_pic_2.png";
import portfolioimgaes2 from "../../assets/portnew_pic.png";
import portfolioimgaes3 from "../../assets/Rectangle 1069portfolioimgaes3.svg";
import portfolioimgaes4 from "../../assets/Rectangle 1068portfolioimgaes4.svg";
import portfolioimgaes5 from "../../assets/Rectangle 1067portfolioimgaes5.svg";
import portfolioimgaes6 from "../../assets/Rectangle 1076portfolioimgaes6.svg";
import portfolioimgaes7 from "../../assets/BAVET_WEB_PIC.png";
import portfolioimgaes8 from "../../assets/sightbox_web_pic.png";
import portfolioimgaes9 from "../../assets/giganticcandy_web_pic.png";
import portfolioimgaes10 from "../../assets/mydayaway_web_pic.png";
import portfolioimgaes11 from "../../assets/archmotorcycle_web_pic.png";
import arrowimage from "../../assets/Arrow.svg";
const Portfolio = () => {
  const projects = [
    {
      name: "BAVET",
      description: "Saas Landing Page",
      imageSrc: portfolioimgaes1,
      altText: "Bavet Project"
    },
    {
      name: "SIGHTBOX",
      description: "Saas Landing Page",
      imageSrc: portfolioimgaes2,
      altText: "Sightbox Project"
    },
    {
      name: "BAVET",
      description: "Saas Landing Page",
      imageSrc: portfolioimgaes3,
      altText: "Bavet Project"
    },
    {
      name: "SIGHTBOX",
      description: "Saas Landing Page",
      imageSrc: portfolioimgaes4,
      altText: "Sightbox Project"
    },
    {
      name: "BAVET",
      description: "Saas Landing Page",
      imageSrc: portfolioimgaes5,
      altText: "Bavet Project"
    },
    {
      name: "SIGHTBOX",
      description: "Saas Landing Page",
      imageSrc: portfolioimgaes6,
      altText: "Sightbox Project"
    },
    
  ];

  return (
    <div id="portfolio-section" className="min-h-screen bg-[#292929] flex flex-col justify-center items-center p-8">
      <div className="container mx-auto px-4 py-8 sm:py-16 max-w-6xl">
        <h1 className="fontmycustom text-4xl sm:text-6xl lg:text-8xl mb-8 sm:mb-16 text-center" style={{ color: '#e3ddc8' }}>
          PORT<span className="text-stroke bg-abusinees fontmycustom">FOLIO</span>
        </h1>
        
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-8`}>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.name}</h2>
                <p className="text-lg sm:text-xl mb-4">{project.description}</p>
                <a href="#" className="inline-block border border-white rounded-full p-2 hover:bg-white hover:text-gray-900 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <img src={project.imageSrc} alt={project.altText} className="w-full rounded-lg shadow-lg"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;