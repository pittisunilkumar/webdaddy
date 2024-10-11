import React, { useEffect, useRef } from 'react';

// import hariimg from "../../assets/hari_image.svg";
// import COOimg from "../../assets/coo_img.svg";
// import rohithimg from "../../assets/rohith_img.svg";
// import girishimg from "../../assets/girish_img.svg";
// import aliimg from "../../assets/ali_img.svg";



const TeamMemberBox = ({ member }) => {
  return (
    <div className="border border-[#e2dcc8] p-4 flex flex-col items-center text-center h-full overflow-hidden">
      
      <img 
        src={member.img} 
        alt={`${member.name} image`} 
        className="w-20 h-20 object-cover mb-2 rounded-full animate-fade-in-down"
      />

      <h2 className="text-xl font-semibold animate-fade-in-up">{member.name}</h2>
      <p className="text-sm animate-fade-in-up animation-delay-300">{member.designation}</p>
    </div>
  );
};

const OurTeam = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add("animate");
        } else {
          containerRef.current.classList.remove("animate");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const teamMembers = [
    { name: "Hari", designation: "CEO", img: "https://dummyimage.com/90x90" },
    { name: "Dhanur", designation: "COO", img: "https://dummyimage.com/90x90" },
    { name: "Rohith", designation: "CTO", img: "https://dummyimage.com/90x90" },
    { name: "", designation: "", img: "" },
    { name: "Girish", designation: "Head- Frontend Developer", img: "https://dummyimage.com/90x90" },
    { name: "Ali", designation: "Head - Digital Marketing", img: "https://dummyimage.com/90x90" },
    { name: "Chris White", designation: "HR", img: "https://dummyimage.com/90x90" },
    { name: "Hamsi", designation: "Mascot", img: "https://dummyimage.com/90x90" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#282828] text-[#e2dcc8]" ref={containerRef}>
      <div className="flex-grow flex flex-col justify-center items-center p-4 md:p-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 text-center" ref={headerRef}>
          <span className="bg-abusinees fontmycustom inline-block animate-left-to-right">OUR</span>
          <span className="text-stroke bg-abusinees fontmycustom inline-block animate-right-to-left ml-4">TEAM</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-center bg-abusinees">
          You will find some of the brightest minds on the web in our team. Your success defines
          the core of our processes. Every collaboration pins it down and are mission oriented
          and driven.
        </p>

        <div className="w-full md:w-[70%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamMemberBox key={index} member={member} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes leftToRight {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes rightToLeft {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeInDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate .animate-left-to-right {
          animation: leftToRight 1s ease-out forwards;
        }

        .animate .animate-right-to-left {
          animation: rightToLeft 1s ease-out forwards;
        }

        .animate-fade-in-down {
          opacity: 0;
          animation: fadeInDown 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animate .grid > div {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default OurTeam;