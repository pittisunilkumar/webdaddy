import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [visibleSection, setVisibleSection] = useState(0);
  const rightSideRef = useRef(null);
  const serviceSectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = rightSideRef.current.scrollTop;
      let newVisibleSection = 0;
      serviceSectionRefs.current.forEach((ref, index) => {
        if (ref && scrollPosition >= ref.offsetTop - 250) {
          newVisibleSection = index;
        }
      });
      setVisibleSection(newVisibleSection);
    };

    const rightSide = rightSideRef.current;
    if (rightSide) {
      rightSide.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (rightSide) {
        rightSide.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleServiceClick = (index) => {
    setActiveService(index);
    const targetSection = serviceSectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const services = [
    {
      title: 'Website Design',
      description: 'The time when designers were sidelined in website development discussions is history. Today creative websites start with design and is the backbone of your online experience marketing.',
      accordionItems: [
        { id: 1, title: 'Art Direction', content: ['We blend visual storytelling with strategic design to align with your brand\'s voice and balance creativity with functionality.'] },
        { id: 2, title: 'Experience focused', content: ['We create cohesive, striking websites where every element - from layout to color - enhances user experience and drives meaningful engagement.'] },
        // Add more accordion items as needed
      ],
    },
    {
      title: 'Digital Marketing',
      description: 'A perfect digital marketing strategy should be invisible to the audience. It should feel natural and orchestrate a rich, fun, and learning experience for the visitors through all the sensory medium.',
      accordionItems: [
        { id: 1, title: 'SEO – Search Engine Optimization', content: ['We optimize your site to rank higher on search engines, driving organic traffic.', 'Focused on keyword research, on-page and off-page SEO to improve visibility.'] },
        { id: 2, title: 'GMB/GBP – Google Business Profile', content: ['We optimize your Google Business Profile for local search visibility.', 'Utilize organic strategies and paid ads to enhance your online presence.'] },
        // Add more accordion items as needed
      ],
    },
    // Add more services as needed
  ];

  return (
    <div className="bg-[#292929] text-white min-h-screen p-8" id="services">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-16 text-center font-bold">SERVICES</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 space-y-6 sticky top-8 self-start">
            {services.map((service, index) => (
              <h2
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`text-2xl font-light cursor-pointer transition-all duration-300 ${
                  visibleSection === index ? 'text-4xl font-bold scale-110' : ''
                }`}
              >
                <span className="mr-2">{(index + 1).toString().padStart(2, '0')}/</span>
                {service.title}
              </h2>
            ))}
          </div>
          
          <div className="md:w-2/3 h-[600px] overflow-y-auto pr-4" ref={rightSideRef}>
            {services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                ref={(el) => (serviceSectionRefs.current[serviceIndex] = el)}
                className="mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg mb-8">{service.description}</p>
                
                <div className="space-y-4">
                  {service.accordionItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="overflow-hidden">
                      <button
                        className={`w-full text-left p-4 flex justify-between items-center ${
                          activeIndex === `${serviceIndex}-${item.id}` ? '' : ''
                        }`}
                        onClick={() => handleAccordionToggle(`${serviceIndex}-${item.id}`)}
                      >
                        <span className="text-xl font-semibold">{item.title}</span>
                        <span className={`transform transition-transform duration-300 ${
                          activeIndex === `${serviceIndex}-${item.id}` ? 'rotate-180' : ''
                        }`}>
                          &#9660;
                        </span>
                      </button>
                      {activeIndex === `${serviceIndex}-${item.id}` && (
                        <div className="p-4">
                          <ul className="list-disc list-inside space-y-2">
                            {item.content.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;