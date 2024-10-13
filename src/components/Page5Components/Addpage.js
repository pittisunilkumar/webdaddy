import React, { useState, useRef, useEffect } from "react";

const Addpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

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
    <>
      <style jsx>{`
        @keyframes ripple {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
            transform: translateY(100px);
          }
          100% {
            width: 600px;
            height: 400px;
            opacity: 0;
            transform: translateY(100px);
          }
        }
        .ripple-button {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          border: none;
          background-color: #eff2f5;
          box-shadow: inset 10px 10px 20px #a5a7a9, inset -10px -10px 20px #ffffff;
          transition: 0.33s ease-in all;
          opacity: 0;
          margin-bottom: 25%;
        }
        .ripple-button::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 30px;
          background-color: grey;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        .talk-to-us-button::before,
        .talk-to-us-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          transition: all 0.5s;
          border: 1px solid rgba(255,255,255,0.2);
          background-color: rgba(255,255,255,0.1);
        }
        .talk-to-us-button:hover::before {
          transform: rotate(-45deg);
          background-color: rgba(255,255,255,0);
        }
        .talk-to-us-button:hover::after {
          transform: rotate(45deg);
          background-color: rgba(255,255,255,0);
        }
        .talk-to-us-button:hover {
          color: #26d3b4;
          border: none;
        }
      `}</style>
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[55vh] bg-white text-[#4e4e4e] font-['Montserrat',sans-serif] scroll-smooth overflow-hidden">
        <div className="hidden md:flex absolute top-0 left-0 w-1/2 h-full justify-center items-center overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="ripple-button"
              style={{
                animation: `ripple 5s infinite ${index * 0.5}s`,
              }}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 p-5 flex flex-col items-center md:items-start text-center md:text-left mt-[10px] md:ml-[50%]">
          <p className="text-[6vw] md:text-[2.5vw] mb-[1px] max-w-[90%] md:max-w-full">
            The power of digital marketing carries a compounding ripple effect on
            your online marketing efforts. We aim to 10X your ROI and revenue
            goals.
          </p>

          <button
            onClick={handleModalToggle}
            className="talk-to-us-button inline-block py-[10px] px-[60px] text-[6vw] md:text-[2.5vw] text-gray-500 bg-transparent border-[3px] border-gray-500 rounded-[5px] transition-all duration-300 whitespace-nowrap mt-[30px] font-bold cursor-pointer relative"
          >
            <span className="z-[2] block absolute w-full h-full"></span>
            Talk To Us
          </button>
        </div>

        {isModalOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[1000] transition-all duration-300 ease-in-out"
            onClick={handleModalToggle}
          >
            <div
              className="modal-content bg-white p-8 rounded-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mt-0 mb-5 text-3xl text-center text-gray-800">Contact Us</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-between">
                <div className="form-group w-full mb-4">
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group w-full mb-4">
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group w-full mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="form-group w-full mb-4">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="+65 12345678"
                    pattern="[+][0-9]{1,4} [0-9]{7,15}"
                    required
                  />
                </div>
                <div className="form-group w-full mb-4">
                  <textarea
                    name="message"
                    className="w-full p-2 border border-gray-300 rounded resize-none"
                    required
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="py-2 px-5 bg-black text-white border-none rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800">
                  Submit
                </button>
              </form>
              {formSubmitted && (
                <p className="bg-green-100 text-green-800 text-center text-lg mt-5 p-2 rounded">
                  Thank you for contacting us!
                </p>
              )}
              <button
                onClick={handleModalToggle}
                className="bg-gray-200 rounded-full p-2 text-gray-800 text-lg cursor-pointer absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center hover:bg-gray-300"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Addpage;