import React, { useRef, useEffect, useState } from 'react';
import img1 from '../../assets/Rectangle 1071 portfolioimgaes1.svg';
import '../../styles/Blog.css';

const BlogPost = ({ number, date, content, imagePosition, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const postRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);

  const imageClass = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
  const contentClass = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <article 
      ref={postRef} 
      className={`bg-[#333333] rounded-lg overflow-hidden shadow-lg card ${isVisible ? 'in-view' : ''}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className={`md:w-1/3 mt-4 md:mt-0 ${imageClass} blogpage-blog-image-container`}>
          <img src={image} alt="Blog post" className="w-full h-48 md:h-full object-cover" />
        </div>
        <div className={`md:w-2/3 p-6 ${contentClass} blogpage-blog-text-container`}>
          <div className="blog-card-title">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-[#666666] stroke">{number}</span> Blog Title
            </h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">{date}</p>
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        } else {
          setIsHeaderVisible(false);
        }
      },
      { threshold: 0.1 }
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

  const blogPosts = [
    { number: '01', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'left', image: img1 },
    { number: '02', date: 'DECEMBER 27, 2022', content: 'is simply dummy text of the printing and typesetting industry...', imagePosition: 'right', image: img1 },
    { number: '03', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'left', image: img1 },
    { number: '04', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'right', image: img1 },
    { number: '05', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'left', image: img1 },
    { number: '06', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'right', image: img1 },
    { number: '07', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'left', image: img1 },
    { number: '08', date: 'DECEMBER 27, 2022', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...', imagePosition: 'right', image: img1 },
  ];

  return (
    <div id="blog-section" className="blogpage-container min-h-screen flex flex-col justify-center items-center p-8 bg-[#1c1c1c]">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header ref={headerRef} className={`blogpage-heading mb-20 text-center ${isHeaderVisible ? 'in-view' : ''}`}>
          <h1 className="text-4xl md:text-5xl inline-block">
            <span className="bg-abusinees fontmycustom heading-left">BLOG</span>
            <span className="bg-abusinees fontmycustom text-stroke heading-right">YARD</span>
          </h1>
        </header>

        <main className="space-y-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Blog;