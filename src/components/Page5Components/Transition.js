import React, { useState, useRef, useEffect } from 'react';

const Transition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const formData = new FormData(formRef.current);
    const formObject = Object.fromEntries(formData);

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
    <div className="relative py-16 bg-[#2b2a2a] min-h-[400px] flex items-center overflow-hidden">

      
      <div className="absolute inset-0 -rotate-45 scale-[2.5]">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index} 
            className="absolute w-px h-[200%] bg-white/10 -top-1/2" 
            style={{ left: `${index * 5}%` }}
          ></div>
        ))}
      </div>


      <div className="relative container mx-auto px-8 lg:px-16"> {/* Increased horizontal padding */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto"> {/* Added max-width and centering */}
          <div className="md:w-2/3 mb-8 md:mb-0 pr-4"> {/* Added right padding */}
            <p className="text-[#e0e0e0] text-2xl md:text-3xl lg:text-4xl font-light">
              Did you know sites with top-notch design and content are 53% more likely to hit Google's first page? Ready to boost your rankings?
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <button 
              onClick={handleModalToggle}
              className="bg-transparent border-2 border-gray-500 text-[#e2dcc8] py-3 px-6 rounded-md hover:bg-[#e2dcc8] hover:text-black transition duration-300 text-xl font-bold"
            >
              Talk To Us
            </button>
          </div>
        </div>
      </div>



      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"> {/* Added horizontal padding */}
          <div className="bg-[#1b1b1b] rounded-full w-full max-w-[600px] aspect-square flex flex-col items-center justify-around p-8 relative"> {/* Adjusted for responsiveness */}
            <h2 className="text-[#e2dcc8] text-3xl mb-6">Contact Us</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <div className="w-full max-w-[80%] mb-6 relative">
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full max-w-[50%] bg-transparent border-b-2 border-[#e2dcc8] text-[#e2dcc8] text-center py-2 focus:outline-none"
                />
                <label className="absolute left-1/2 -translate-x-1/2 -top-6 text-[#e2dcc8] text-sm">
                  First Name
                </label>
              </div>
              <div className="w-full max-w-[80%] mb-6 relative">
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full max-w-[75%] bg-transparent border-b-2 border-[#e2dcc8] text-[#e2dcc8] text-center py-2 focus:outline-none"
                />
                <label className="absolute left-1/2 -translate-x-1/2 -top-6 text-[#e2dcc8] text-sm">
                  Last Name
                </label>
              </div>
              <div className="w-full max-w-[80%] mb-6 relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b-2 border-[#e2dcc8] text-[#e2dcc8] text-center py-2 focus:outline-none"
                />
                <label className="absolute left-1/2 -translate-x-1/2 -top-6 text-[#e2dcc8] text-sm">
                  Email
                </label>
              </div>
              <div className="w-full max-w-[80%] mb-6 relative">
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[+][0-9]{1,4} [0-9]{7,15}"
                  placeholder="+65 12345678"
                  className="w-full max-w-[75%] bg-transparent border-b-2 border-[#e2dcc8] text-[#e2dcc8] text-center py-2 focus:outline-none"
                />
                <label className="absolute left-1/2 -translate-x-1/2 -top-6 text-[#e2dcc8] text-sm">
                  Phone Number
                </label>
              </div>
              <div className="w-full max-w-[80%] mb-6 relative">
                <textarea
                  name="message"
                  required
                  className="w-full max-w-[50%] bg-transparent border-b-2 border-[#e2dcc8] text-[#e2dcc8] text-center py-2 focus:outline-none resize-none"
                ></textarea>
                <label className="absolute left-1/2 -translate-x-1/2 -top-6 text-[#e2dcc8] text-sm">
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="bg-black text-[#e2dcc8] px-6 py-3 rounded-full hover:bg-[#e2dcc8] hover:text-black transition duration-300"
              >
                Submit
              </button>
            </form>
            {formSubmitted && (
              <p className="text-[#e2dcc8] text-lg mt-4">Thank you for contacting us!</p>
            )}
            <button
              onClick={handleModalToggle}
              className="absolute -top-5 left-1/2 -translate-x-1/2 bg-transparent text-[#e2dcc8] w-10 h-10 rounded-full text-2xl hover:bg-[#e2dcc8] hover:text-black transition duration-300"
            >
              X
            </button>
          </div>
        </div>
      )}



    </div>
  );
};

export default Transition;