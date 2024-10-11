import React, { useState, useEffect } from 'react';

const PageTransition = ({ children, pageIndex, currentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pageIndex === currentPage) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [currentPage, pageIndex]);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
