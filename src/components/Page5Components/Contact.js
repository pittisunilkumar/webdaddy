import React from 'react';
import APTWavesVideo from "../../assets/waves.mp4"; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={APTWavesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">

        <header className="mb-20 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl inline-block">
            <span className="blend fontmycustom mr-2">CONTACT</span>
            <span className="blend fontmycustom text-stroke ml-2">US</span>
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="md:w-1/3 bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 bg-gray-800 bg-opacity-80">
              <h2 className="font-bold text-white">Webdaddy</h2>
              <p className="text-sm text-gray-200">22 Sin Ming Ln, #06-76 Midview City,<br/>Singapore 573969</p>
              <a href="https://www.google.com/maps/place/Webdaddy/@1.358606,103.833566,1088m/data=!3m1!1e3!4m14!1m7!3m6!1s0x31da17314381ac87:0x17f880b5ad6f542e!2sWebdaddy!8m2!3d1.358606!4d103.833566!16s%2Fg%2F11wc11b3t6!3m5!1s0x31da17314381ac87:0x17f880b5ad6f542e!8m2!3d1.358606!4d103.833566!16s%2Fg%2F11wc11b3t6!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-300 text-sm">Directions</a>
            </div>
            <div className="flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7258906970264!2d103.83515931475415!3d1.3520099989967853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17168ae10303%3A0x7e1dc0be1a88bef!2s22%20Sin%20Ming%20Ln%2C%20Singapore%20573969!5e0!3m2!1sen!2s!4v1632115982568!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            <a href="https://www.google.com/maps/place/Webdaddy/@1.358606,103.833566,1088m/data=!3m1!1e3!4m14!1m7!3m6!1s0x31da17314381ac87:0x17f880b5ad6f542e!2sWebdaddy!8m2!3d1.358606!4d103.833566!16s%2Fg%2F11wc11b3t6!3m5!1s0x31da17314381ac87:0x17f880b5ad6f542e!8m2!3d1.358606!4d103.833566!16s%2Fg%2F11wc11b3t6!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="block p-2 text-center text-blue-300 text-sm bg-gray-800 bg-opacity-80">View larger map</a>
          </div>

          <div className="md:w-1/3 p-8 flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 rounded-lg">
            {['location', 'phone', 'email'].map((item, index) => (
              <div key={index} className="mb-8">
                <svg className="w-12 h-12 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {item === 'location' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>}
                  {item === 'phone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>}
                  {item === 'email' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>}
                </svg>
                <p className="text-center text-white">
                  {item === 'location' && '22 Sin Ming Lane, #06-76 Midview City, Singapore 573969.'}
                  {item === 'phone' && '+65-88061007'}
                  {item === 'email' && 'webdaddy.info@gmail.com'}
                </p>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 bg-gray-800 bg-opacity-70 p-8 rounded-lg flex flex-col">
            <form className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-6">
                {['First Name', 'Last Name', 'Email', 'Phone Number'].map((field, index) => (
                  <div key={index}>
                    <input type={field === 'Email' ? 'email' : field === 'Phone Number' ? 'tel' : 'text'} placeholder={field} className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-white text-white placeholder-gray-300" />
                  </div>
                ))}
                <div>
                  <textarea placeholder="Message" rows="4" className="w-full bg-transparent border-b border-gray-400 pb-2 focus:outline-none focus:border-white text-white placeholder-gray-300"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full bg-white bg-opacity-20 text-white py-2 px-4 hover:bg-opacity-30 transition duration-300">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;