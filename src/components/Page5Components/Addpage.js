import React, { useState, useRef, useEffect } from "react";

const Addpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const formData = new FormData(formRef.current);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0RJHdo_gqHBKgLSgYVyN1kdTHfpze3GJfFfACjxBiYvW0_n_FCi37Q7U7g_H8sYFT/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[55vh] bg-[#f7f7f7] text-[#4e4e4e] p-5 md:p-10 font-['Montserrat', sans-serif] scroll-smooth">
      {!isMobile && (
        <div className="ripple-buttons w-full md:w-1/2 h-48 md:h-full absolute md:relative left-0 top-0 overflow-hidden md:mb-12">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      )}
      
      <div className="w-full md:w-1/2 p-5 flex flex-col items-center md:items-start text-center md:text-left z-10 md:ml-auto">
        <p className="text-[5vw] md:text-[2.5vw] mb-5 leading-relaxed">
          The power of digital marketing carries a compounding ripple effect on
          your online marketing efforts. We aim to 10X your ROI and revenue
          goals.
        </p>

        <button
          onClick={handleModalToggle}
          className="inline-block px-8 py-3 text-[4vw] md:text-[2.5vw] text-gray-500 bg-transparent border-[5px] border-gray-500 rounded transition-colors duration-300 hover:bg-[#e2dcc8] hover:text-black font-bold mt-5"
        >
          Talk To Us
        </button>
      </div>

      {/* Modal code remains unchanged */}
    </div>
  );
};

export default Addpage;