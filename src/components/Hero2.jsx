
import React, { useState, useEffect } from 'react';
import sliderImage1 from '../assets/1.png'; 
import sliderImage2 from '../assets/2.png';
import sliderImage3 from '../assets/3.png';


const COLORS = {
  primary: '#1E3A8A', 
  secondary: '#f2592d', 
  backgroundLight: '#f4fcff',
  primary2: '#11253e' 
};


const sliderImages = [sliderImage1, sliderImage2, sliderImage3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = sliderImages.length;

  // Logic for 8-second image transition
  useEffect(() => {
    const timer = setInterval(() => {

      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 8000); 


    return () => clearInterval(timer);
  }, [totalImages]);


  return (
    <section 
      className="py-6 md:py-10" 
      style={{ backgroundColor: COLORS.backgroundLight }} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Struggling With Your <br /> Educational Career?
            </h1>
            
            <p 
              className="text-lg sm:text-xl leading-relaxed mb-6"
              style={{ color: COLORS.primary2, opacity: 0.9 }}
            >
              TaleemiGuide provides clear and authentic guidance at every step.
            </p>

            <ul className="space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              {/* Bullet Points */}
              <li className="flex items-start text-lg sm:text-xl" style={{ color: COLORS.primary2 }}>
                <span className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }}>
                  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Make smarter academic and career choices
              </li>
              <li className="flex items-start text-lg sm:text-xl" style={{ color: COLORS.primary2 }}>
                <span className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }}>
                   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Match your passion with the right field
              </li>
              <li className="flex items-start text-lg sm:text-xl" style={{ color: COLORS.primary2 }}>
                <span className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }}>
                   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Understand subject classifications with clarity
              </li>
              <li className="flex items-start text-lg sm:text-xl" style={{ color: COLORS.primary2 }}>
                <span className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }}>
                   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Explore verified study programs across all institutions
              </li>
              <li className="flex items-start text-lg sm:text-xl" style={{ color: COLORS.primary2 }}>
                <span className="h-6 w-6 mr-3 flex-shrink-0" style={{ color: COLORS.secondary }}>
                   <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </span>
                Get step-by-step help with admissions, scholarships, and academic issues
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button 
                className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-[1.03] transform hover:shadow-xl"
                style={{ backgroundColor: COLORS.secondary, color: 'white' }}
              >
                Start Your Journey
              </button>
              <button
                className="px-8 py-3 text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out hover:scale-[1.03] transform border-2 hover:shadow-lg"
                style={{ borderColor: COLORS.primary, color: COLORS.primary, backgroundColor: 'white' }}
              >
                Seek Taleemi Advice
              </button>
            </div>
            
          </div>
          
          {/* RIGHT SIDE - Image Slider */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center relative">
            <div 
              
              className="w-full max-w-lg lg:max-w-none relative h-[36rem] lg:h-[42rem]"
            >
                
              {sliderImages.map((image, index) => (
                  <img
                      key={index}
                      src={image}
                      alt={`Educational Career Guidance Slide ${index + 1}`}
                      className={`
                          absolute inset-0 
                          w-full h-full 
                          object-contain 
                          transition-opacity duration-700 ease-in-out 
                          rounded-2xl
                          ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                      `}
                  />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;